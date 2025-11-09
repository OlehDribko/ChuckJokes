function getTimeHoursAgo(lastDate) {
  const dateNow = Date.now();
  const dataUpdate = new Date(lastDate).getTime();
  const difference = dateNow - dataUpdate;

  return Math.floor(difference / (1000 * 60 * 60));
}

export { getTimeHoursAgo };
