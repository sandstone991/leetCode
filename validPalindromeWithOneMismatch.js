var validPalindrome = function (s) {
  let j = s.length - 1;
  let i = 0;
  let chances = true;
  while (i < j) {
    if (s[i] !== s[j]) {
      if (!chances) {
        return false;
      }
      chances = false;
      if (checkPalindrome(s, i + 1, j)) {
        i += 1;
        continue;
      }
      if (checkPalindrome(s, i, j - 1)) {
        j -= 1;
        continue;
      }
      return false;
    }
    i++;
    j--;
  }
  return true;
};

function checkPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
