export const parseDateToText = (_timeTarget: Date): string => {
  const now = +new Date();
  const timeTarget = +new Date(_timeTarget);
  const diff = (now - timeTarget) / (1000 * 60);
  const hoursDifference = diff / 60;
  let text;

  if (hoursDifference < 1) {
    const value = Math.round(((hoursDifference * 60) / 100) * 100);
    const metric = value === 1 ? "minute" : "minutes";
    text = `${value} ${metric} ago`;
  } else if (hoursDifference >= 1 && hoursDifference <= 24) {
    const value = Math.round(hoursDifference);
    const metric = value === 1 ? "hour" : "hours";
    text = `${value} ${metric} ago`;
  } else {
    const value = Math.round(hoursDifference / 24);
    const metric = value === 1 ? "day" : "days";
    text = `${value} ${metric} ago`;
  }

  return text;
};
