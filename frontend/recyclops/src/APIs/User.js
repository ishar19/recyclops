export const addScan = async (userId, scanId) => {
  const body = {
    userId: userId,
    scanId: scanId,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/addScan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => await data.json());
};

export const saveScan = async (userId, scanId) => {
  const body = {
    userId: userId,
    scanId: scanId,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/saveScan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

export const removeScan = async (userId, scanId) => {
  const body = {
    userId: userId,
    scanId: scanId,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/removeScan`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

export const getUserData = async (userId) => {
  return fetch(
    `${import.meta.env.VITE_NODE_JS_PORT}/user/basicInfo/${userId}`
  ).then(async (data) => await data.json());
};
export const newUser = async (userId, email) => {
  const body = {
    id: userId,
    email: email,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/newUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

