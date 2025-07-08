const defaultTodaySet = (defaultDate) => {
  const year = defaultDate.getFullYear();
  const month = String(defaultDate.getMonth() + 1).padStart(2, '0');
  const date = String(defaultDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};

export default defaultTodaySet;
