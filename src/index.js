module.exports = function check(str, bracketsConfig) {
  const stack = [];
  brackets = Object.fromEntries(bracketsConfig);

  for (const x of str.split("")){
    if (stack[0] === x) {
      stack.shift();
    }else if(brackets[x]){
      stack.unshift(brackets[x]);
    }else{
      return false
    }
  }
  return stack.length === 0
}
