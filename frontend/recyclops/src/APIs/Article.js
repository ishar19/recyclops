export const getArticles = async () => {
  return fetch(
    `${import.meta.env.VITE_NODE_JS_PORT}/articles/getArticles`
  ).then(async (data) => {
    return await data.json();
  });
};

export const saveArticle = async (userId, articleId) => {
  const body = {
    userId: userId,
    articleId: articleId,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/saveArticle`, {
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
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/removeArticle`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};

export const savedArticles = async (id) => {
  return fetch(
    `${import.meta.env.VITE_NODE_JS_PORT}/user/savedArticle/${id}`
  ).then(async (data) => {
    return await data.json();
  });
};

export const getReadingHistory = async (id) => {
  return fetch(
    `${import.meta.env.VITE_NODE_JS_PORT}/user/readingHistory/${id}`
  ).then(async (data) => {
    return await data.json();
  });
};

export const getArticleById = async (id) => {
  return fetch(
    `${import.meta.env.VITE_NODE_JS_PORT}/articles/getArticleById/${id}`
  ).then(async (data) => {
    return await data.json();
  });
};

export const readingHistory = async (userId, articleId) => {
  const body = {
    userId: userId,
    articleId: articleId,
  };
  return fetch(`${import.meta.env.VITE_NODE_JS_PORT}/user/readingHistory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(async (data) => data.ok);
};
