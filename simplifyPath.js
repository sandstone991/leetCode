/**
 * @param {string} s
 * @return {boolean}
 */
var simplifyPath = function (path) {
  let pathArr = path.split("/");
  let toBeStr = ['/'];
  for (let char of pathArr) {
    if (char === "." || char === "") {
      continue;
    } else if (char === "..") {
    if(toBeStr.length!==1){
      toBeStr.pop();
      toBeStr.pop();}
        continue;
    }
    toBeStr.push(char, "/");
  }
  toBeStr.pop();
  return toBeStr.length > 0 ? toBeStr.join("") : "/";
};
