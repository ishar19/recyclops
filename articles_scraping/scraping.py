import dateparser
import feedparser
from bs4 import BeautifulSoup
from contextlib import suppress
from datetime import datetime
import random
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

random_images = [
  "https://cdn.pixabay.com/photo/2012/04/11/18/12/recycle-29227_960_720.png",
  "https://cdn.pixabay.com/photo/2012/04/02/13/48/recycle-24543_960_720.png",
  "https://cdn.pixabay.com/photo/2016/08/04/17/05/trash-can-1569513_960_720.png",
  "https://cdn.pixabay.com/photo/2012/04/26/14/19/bio-42609_960_720.png",
  "https://cdn.pixabay.com/photo/2013/07/13/12/45/woman-160281_960_720.png"
]

if __name__ == '__main__':
  cred = credentials.Certificate("private_key.json")
  firebase_admin.initialize_app(cred)
  db = firestore.client()
  articles_ref = db.collection('articles')
  sources_ref = db.collection("sources")
  source_docs = sources_ref.get()

  for source_doc in source_docs:
    feed_id : str = source_doc.id
    source_doc_dict : dict = source_doc.to_dict()
    feed_name : str = source_doc_dict['feedName']
    feed_url : str = source_doc_dict['feedUrl']
    news_feed = feedparser.parse(feed_url)
    if news_feed.get('status') != None and news_feed.status != 200: 
      print(f'{feed_name} Error - {news_feed.status}', flush=True)
      continue
    for entry in news_feed['entries']:
      published : datetime = dateparser.parse(entry['published'])
      title : str = BeautifulSoup(entry['title'], 'lxml').text
      description : str | None = entry['description']
      if description is not None:
        description : str = BeautifulSoup(entry['description'], 'lxml').text
        description = description.split(' ')
        description = ' '.join(description[:-1])
        description = description[:253] + ' ...'
      link : str = entry['link']
      tags : list[str] = [tag['term'] for tag in entry['tags']]
      image_url = None
      with suppress(AttributeError, IndexError, KeyError, TypeError):
        if feed_id == "recycle_dot_com":
          image_url = BeautifulSoup(entry['content'][0]['value'], 'lxml').find('img')['src']
        elif feed_id == "earth_911":
          image_url = entry['media_thumbnail'][0]['url']
        elif feed_id == "clean_river":
          image_url = BeautifulSoup(entry['content'][0]['value'], 'lxml').find('figure').find('img')['src']
      if image_url is None:
        image_url = random.choice(random_images)
      #dict of fields
      set_dict = {
        'sourceId' : feed_id,
        'title' : title,
        'description' : description,
        'tags' : tags,
        'published' : published,
        'articleUrl': link,
        'imageUrl': image_url,
      }

      # Query the collection for documents with the matching title
      matching_docs = articles_ref.where('articleUrl', '==', link).get()
      
      # If at least one document matches, update the first one
      if len(matching_docs) > 0:
        print(f'updating')
        update_doc = matching_docs[0].reference
        update_doc.update(set_dict)
      else:
        print(f'creating')
        # create a new document with a timestamp field
        create_doc = articles_ref.document()
        create_doc.set(set_dict)