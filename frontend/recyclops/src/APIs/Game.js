import { getUserJWT } from "../utils/getUserJWT.js";
export const newGameModel = (gameDocumentId, userId) => {
  gameDocumentId = gameDocumentId.gameDocumentId;
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
  const jwt = await getUserJWT();
  const gameDocumentId = await fetch(
    `${import.meta.env.VITE_FAST_API_PORT}/game/new?token=${jwt}`
  ).then(async (data) => {
    return await data.json();
  });
  return newGameModel(gameDocumentId, userId);
};

// export const fetchGame = async () => {
//   return fetch(
//     `${
//       import.meta.env.VITE_FAST_API_PORT
//     }/game/fetch?game_id=UnjZQJNIOTy6rYe4kxFx`
//   ).then(async (data) => {
//     return await data.json();
//   });
// };

export const saveGame = async (body) => {
  const jwt = await getUserJWT();
  return fetch(`${import.meta.env.VITE_FAST_API_PORT}/game/save?token=${jwt}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => {
    return await data.json();
  });
};

export const getQuestions = async () => {
  return fetch(`${import.meta.env.VITE_FAST_API_PORT}/questions/random`).then(
    async (data) => {
      return await data.json();
    }
  );
};

export const getLeaderboardList = async () => {
  return fetch(`${import.meta.env.VITE_FAST_API_PORT}/leaderboard/list`).then(
    async (data) => {
      return await data.json();
    }
  );
};
