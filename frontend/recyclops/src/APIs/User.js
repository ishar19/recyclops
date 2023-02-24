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
