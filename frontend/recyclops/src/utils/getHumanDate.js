export const getHumanDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};
