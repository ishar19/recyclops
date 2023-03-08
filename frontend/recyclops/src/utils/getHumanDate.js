export const getHumanDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return (
    date.getDay(Date.parse(date)) +
    "/" +
    (parseInt(date.getMonth(Date.parse(date)), 10) + 1) +
    "/" +
    date.getFullYear(Date.parse(date))
  );
};
