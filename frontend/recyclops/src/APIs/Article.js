export const getArticles = () => {
  return fetch(`http://localhost:5000/articles/getArticles`).then(
    async (data) => {
      return await data.json();
    }
  );
};
