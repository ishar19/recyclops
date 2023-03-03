import { getUserJWT } from "../utils/getUserJWT.js";
export const newGameModel = (gameDocumentId, userId) => {
  gameDocumentId = gameDocumentId.gameDocumentId;
  console.log(gameDocumentId);
  return {
    gameId: gameDocumentId,
    userId: userId ? userId : null,
    startTimestamp: new Date(Date.now()),
    endTimestamp: null,
    livesLeft: 3,
    score: 0,
    questions: [],
  };
};

export const newGame = async (userId) => {
  console.log(userId);
  const jwt = await getUserJWT();
  const gameDocumentId = await fetch(
    `http://localhost:${
      import.meta.env.VITE_FAST_API_PORT
    }/game/new?token=${jwt}`
  ).then(async (data) => {
    return await data.json();
  });
  return newGameModel(gameDocumentId, userId);
};

export const fetchGame = async () => {
  return fetch(
    `http://localhost:${
      import.meta.env.VITE_FAST_API_PORT
    }/game/fetch?game_id=UnjZQJNIOTy6rYe4kxFx`
  ).then(async (data) => {
    return await data.json();
  });
};

export const saveGame = async () => {
  const body = {
    gameId: "UnjZQJNIOTy6rYe4kxFx",
    userId: "k",
    startTimestamp: "2023-02-27T15:30:00.000000",
    endTimestamp: "2023-02-27T15:30:00.000000",
    livesLeft: 3,
    score: 190,
    questions: [],
  };
  return fetch(
    `http://localhost:${import.meta.env.VITE_FAST_API_PORT}/game/save`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  ).then(async (data) => {
    return await data.json();
  });
};

export const getQuestions = async () => {
  return fetch(
    `http://localhost:${import.meta.env.VITE_FAST_API_PORT}/questions/random`
  ).then(async (data) => {
    return await data.json();
  });
};
