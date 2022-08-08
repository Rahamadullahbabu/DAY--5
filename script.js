// 1.Do the below programs in Anonymous function & IIFE

// a. Print odd numbers in an array

function oddnum(...sum){ 
  console.log(sum);
  return ;
 }
   console.log(oddnum(1,3,5,7,9,11,13,15,17,19));

   // b.Convert all the strings to title caps in a string array

   function toTitles(s){
    return s.replace(/\w\S*/g, function(t) { 
    return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); 
    }); 
    }
  var str = toTitles('happy to see after a long time');
  console.log(str);

  // c.Sum of all numbers in an array
  
  var marks = [40, 50, 0, 25, 10];
  var getAverage = function (marks) {

    let sum = 0;

for (let mark of marks) {
    sum = sum + mark;
}
 let avg = sum / marks.length;

return avg;
}
console.log(getAverage([40, 50, 0, 25, 10]));


// d.Return all the prime numbers in an array


let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [];
function isPrime(num) {
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

// e.Return all the palindromes in an array

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));

//f.Return median of two sorted arrays of the same size

const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}

let a = [0,2,3,5,9];
let b = [1,4];
console.log(median(a,b));



//g.Remove duplicates from an array

var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

var test = ['mike','james','james','alex'];
var testBis = ['alex', 'yuri', 'jabari'];
console.log(uniqueArray(test.concat(testBis)));

//h.Rotate an array by k times

const arr = [12, 6, 43, 5, 7, 2, 5];
const rotateByOne = function (arr) {
   for(let i = 0; i < arr.length-1; i++){
      temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
   };
}
Array.prototype.rotateBy = function(n){
const { length: l } = this;
   if(n >= l){
       return;
   };
   for(let i = 0; i < n; i++){
       rotateByOne(this);
   };
};
const a = [1,2,3,4,5,6,7];
a.rotateBy(2);
console.log(a);


//2--(submisson not needed)

// 3-Do the below programs in arrow functions.

// a.Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let odds = arr.filter(number => {
  return number % 2 !== 0;
});
console.log(odds);

// b.Convert all the strings to title caps in a string array

function titleCase(str) {
  return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
}
console.log(titleCase("It is good to see you")); 

// c.Sum of all numbers in an array

var marks = [40, 50, 0, 25, 10];
var getAverage =  (marks) => {

  let sum = 0;

for (let mark of marks) {
  sum = sum + mark;
}
let avg = sum / marks.length;

return avg;
}
console.log(getAverage([40, 50, 0, 25, 10]));

// d.Return all the prime numbers in an array

let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let result = [] isPrime(num)=>{
  if(num < 2) return false;

  for (let k = 2; k < num; k++){
    if(num % k == 0){
      return false;
    }
  }
  return true;
}
num.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

// e.Return all the palindromes in an array

let arr = ["foo", "racecar", "pineapple", "porcupine", "pineenip",'pap','aaaa'];
let palindromes = arr.filter(w => {
  let len = w.length;
  for (let i = 0; i < len / 2; i++) {
    if (w[i] == w[len - i - 1]) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(palindromes)


