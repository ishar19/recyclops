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
