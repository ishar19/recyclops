export const addScan = async (userId, scanId) => {
  const body = {
    userId: userId,
    scanId: scanId,
  };
  return fetch(`http://localhost:5000/user/addScan`, {
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
  return fetch(`http://localhost:5000/user/saveScan`, {
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
  return fetch(`http://localhost:5000/user/removeScan`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};
