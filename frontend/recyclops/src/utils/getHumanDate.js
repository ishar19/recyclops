export const getHumanDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
};
