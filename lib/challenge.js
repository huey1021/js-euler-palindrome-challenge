'use strict';

module.exports = () => {
  return true;
};

let sum = 0;

let isPalindrome =  function(n) {
  let str = n.toString();
  return str === str.split('').reverse().join('');
};

for ( let i=1; i<1000000;i++) {
  if (isPalindrome(i.toString(10)) && isPalindrome(i.toString(2)))
  sum+=i;
}
print(sum);
