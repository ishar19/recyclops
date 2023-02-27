export const getArticles = async () => {
  return fetch(`http://localhost:5000/articles/getArticles`).then(
    async (data) => {
      return await data.json();
    }
  );
};

export const saveArticle = async (userId, articleId) => {
  const body = {
    userId: userId,
    articleId: articleId,
  };
  return fetch(`http://localhost:5000/user/saveArticle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

export const removeArticle = async (userId, articleId) => {
  const body = {
    userId: userId,
    articleId: articleId,
  };
  return fetch(`http://localhost:5000/user/removeArticle`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

export const savedArticles = async (id) => {
  return fetch(`http://localhost:5000/user/savedArticle/${id}`).then(
    async (data) => {
      return await data.json();
    }
  );
};

export const readingHistory = async (userId, articleId) => {
  const body = {
    userId: userId,
    articleId: articleId,
  };
  return fetch(`http://localhost:5000/user/readingHistory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};
