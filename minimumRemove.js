/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let toBeStr = s.split("");
  let opFlag = 0;
  for (let i = 0; i < toBeStr.length; i++) {
    if (toBeStr[i] === "(") {
      opFlag++;
    } else if (toBeStr[i] === ")") {
      opFlag--;
      if (opFlag < 0) {
        toBeStr.splice(i, 1);
        opFlag++;
        i--;
      }
    }
  }
  opFlag = 0;
  for (let i = toBeStr.length - 1; i != -1; i--) {
    if (toBeStr[i] === ")") {
      opFlag++;
    } else if (toBeStr[i] === "(") {
      opFlag--;
      if (opFlag < 0) {
        toBeStr.splice(i, 1);
        opFlag++;
      }
    }
  }

  return toBeStr.join("");
};
