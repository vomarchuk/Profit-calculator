const getDateNow = (date, term) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const result = `${yyyy}-${mm}-${dd}`;
  return result;
};

export { getDateNow };
