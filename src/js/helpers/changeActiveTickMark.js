const changeActiveTickMark = (el, val) => {
  el.forEach((el, i) => {
    const result = val;
    if (result === i + 1) el.classList.add('tickmarks__item--isActive');
  });
};

export { changeActiveTickMark };
