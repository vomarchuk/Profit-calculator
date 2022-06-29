const changeTextContent = (el, val) => {
  el.forEach(i => {
    i.textContent = val;
  });
};

export default changeTextContent;
