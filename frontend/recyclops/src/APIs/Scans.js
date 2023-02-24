export const getScans = async (id) => {
  return fetch(
    `https://marvelous-nerve-production.up.railway.app/scan/getData/${id}`
  ).then(async (data) => {
    return await data.json();
  });
};

export const getRecentScansId = async (user) => {
  return fetch(
    `https://marvelous-nerve-production.up.railway.app/user/scanHistory/${user.uid}`
  ).then(async (data) => await data.json());
};

export const scanImage = async (uri, userId = null) => {
  console.log(userId);
  const body = {
    userId: userId,
    dataURI: uri,
  };
  return fetch(
    `https://marvelous-nerve-production.up.railway.app/scan/newScan/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  ).then(async (data) => await data.json());
};
