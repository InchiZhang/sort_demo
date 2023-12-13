//判断输入的值是不是有效
function isTruly(item) {
  if (item || item === 0) {
    return true;
  }
  return false;
}

// 判断是不是数字，排除NaN
function isNumber(number) {
  return number === +number;
}

export { 
  isNumber, 
  isTruly 
};
