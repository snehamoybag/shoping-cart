const getTruncateString = (string, length = string.length) => {
  if (length >= string.length) return string;

  return string.slice(0, length) + "...";
};

export default getTruncateString;
