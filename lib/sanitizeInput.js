const sanitizeInput = (e) => {
  let input = e.target.value;
  if (isNaN(input) || isNaN(parseInt(input)) || parseInt(input) < 1 || parseInt(input) > 9) {
    return -1;
  } else {
    return parseInt(input);
  }
}

export default sanitizeInput;
