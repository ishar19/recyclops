from datetime import datetime
from fastapi import FastAPI, HTTPException
from firebase_admin import auth, credentials, firestore
from pydantic import BaseModel
import firebase_admin
import random
import uvicorn

if __name__ == '__main__':
  #Fast API App Instance
  fast_api_app = FastAPI()

  #Firebase App
  cred = credentials.Certificate("game_endpoint_files\private_key.json")
  firebase_admin.initialize_app(cred)

  #Collection References
  db = firestore.client()
  games_ref = db.collection('games')
  leaderboard_ref = db.collection('leaderboard')
  questions_ref = db.collection('questions')
  users_ref = db.collection('users')

  @fast_api_app.get("/questions/random")
  async def random_question()-> dict:

    # Get a reference to the sorted docs
    sorted_docs_query = questions_ref.order_by("internalIndex", direction=firestore.Query.DESCENDING).limit(1)
    sorted_docs_data = sorted_docs_query.get()[0].to_dict()


    #Generate random offset
    random_offset = random.randrange(0, sorted_docs_data['internalIndex'])

    # Get a reference to the random document
    random_question_query = questions_ref.where('internalIndex', '==', random_offset).limit(1)
    
    return random_question_query.get()[0].to_dict()
  
  @fast_api_app.get("/game/fetch")
  async def fetch_game(game_id: str) -> dict:
    game_doc_ref = games_ref.document(game_id)

    # Get the document snapshot
    game_doc_snapshot = game_doc_ref.get()
    
    # Check if the document exists
    if game_doc_snapshot.exists:
      return game_doc_snapshot.to_dict()
    else:
      raise HTTPException(
        status_code=404, 
        detail="Game Not Found"
      )

  @fast_api_app.get("/game/new")
  async def new_game(token: str) -> dict: 
    try:
      decoded_token = auth.verify_id_token(token)
      print(decoded_token)
    except auth.InvalidIdTokenError:
      raise HTTPException(
        status_code=401, 
        detail="Invalid Token"
      )
    user_id: str = decoded_token['uid']
    
    #Checking user in users Collection
    user_query = users_ref.where('id', '==', user_id).limit(1)
    user_query_results = user_query.get()
    if len(user_query_results) == 0:
      raise HTTPException(
        status_code=404,
        detail="User Not Found"
      )

    #Generating a New Game Document
    create_doc = games_ref.document()
    game_doc_id = create_doc.id
    create_doc.set({
      "gameId" : game_doc_id,
      "userId" : user_id,
      "startTimestamp" : datetime.now(),
      "endTimestamp" : None,
      "livesLeft" : 3,
      "score" : 0,
      "questions" : [],
      "type" : "drag_and_drop"
    })


    #Updating the Game History for a User
    doc = user_query_results[0].reference
    dict_data : dict = doc.get().to_dict()
    current_game_history = dict_data.get('gameHistory') or []
    current_game_history.append(game_doc_id)
    doc.update({'gameHistory': current_game_history})

    return {"gameDocumentId" : game_doc_id}

  #Save Game Item

  class GameItem(BaseModel):
    gameId : str 
    userId : str 
    startTimestamp : datetime
    endTimestamp : datetime | None 
    livesLeft : int 
    score : int 
    questions : list


  @fast_api_app.post("/game/save")
  async def save_game(game_item: GameItem) -> dict:

    game_data = game_item.dict()

    #Get Game Doc Reference
    old_game_doc_ref = games_ref.document(game_data['gameId'])

    # Get the document snapshot
    old_game_doc_snapshot = old_game_doc_ref.get()

    # Check if the document exists
    if old_game_doc_snapshot.exists:
      old_game_doc_data : dict = old_game_doc_snapshot.to_dict()
      user_id : str = old_game_doc_data['userId']

      #Get user in leaderboard collection
      leaderboard_doc_ref = leaderboard_ref.document("drag_and_drop")
      leaderboard_doc_list : list[dict] = leaderboard_doc_ref.get().to_dict()['list']
      
      user_exists = False
      for index, inner_dict in enumerate(leaderboard_doc_list.copy()):
        if inner_dict['userId'] == user_id:
          if game_data['score'] > leaderboard_doc_list[index]['score']:
            leaderboard_doc_list[index]['score'] = game_data['score']
          user_exists = True
        
        if index == len(leaderboard_doc_list)-1:
          if not user_exists:
            leaderboard_doc_list.append(
              {
                "userId" : user_id,
                "score" : game_data['score']
              }
            )
          leaderboard_doc_list.sort(key=lambda x: x["score"], reverse=True)
          leaderboard_doc_ref.update(
            {"list": leaderboard_doc_list}
          )

      old_game_doc_ref.update(
        game_data
      )

      return {"message": "Save Successful", "status_code": 200}

    else:
      raise HTTPException(
        status_code=404, 
        detail="Game Document Not Found"
      )
    


  #leaderboard related commands
  @fast_api_app.get("/leaderboard/list")
  async def leaderboard() -> list[dict]:
    leaderboard_doc_ref = leaderboard_ref.document("drag_and_drop")
    leaderboard_doc_data = leaderboard_doc_ref.get().to_dict()
    return leaderboard_doc_data['list']


  # #leaderboard user related commands
  @fast_api_app.get("/leaderboard/user")
  async def leaderboard(user_id: str) -> dict:

    #Get user in leaderboard collection
    leaderboard_doc_ref = leaderboard_ref.document("drag_and_drop")
    leaderboard_doc_list : list[dict] = leaderboard_doc_ref.get().to_dict()['list']
    
    for index, inner_dict in enumerate(leaderboard_doc_list.copy()):
      if inner_dict['userId'] == user_id:
        inner_dict['rank'] = index+1
        return inner_dict
    
    raise HTTPException(
      status_code=404, 
      detail="User Not Found"
    )


  if __name__=="__main__":
    uvicorn.run(fast_api_app,host="127.0.0.1",port=5000)