export const getScans = async (id) => {
  return fetch(`http://localhost:5000/scan/getData/${id}`).then(
    async (data) => {
      return await data.json();
    }
  );
};

export const getRecentScansId = async (user) => {
  return fetch(`http://localhost:5000/user/scanHistory/${user.uid}`).then(
    async (data) => await data.json()
  );
};

export const scanImage = async (uri, userId = null) => {
  const body = {
    userId: userId,
    dataURI: uri,
  };
  return fetch(`http://localhost:5000/scan/newScan/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => await data.json());
};
