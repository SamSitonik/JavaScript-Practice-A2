// Final Answers
// Q1:

// function printInt(n) {
//   for (var i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }

// printInt(50);

// Q2:

// function printIntRev(n) {
//   for (var i = n; i >= 1; i--) {
//     console.log(i);
//   }
// }

// printIntRev(50);

// Q3:

// function checkInput(x) {
//     if (typeof x === "number") {
//       return "number";
//     } else if (typeof x === "string") {
//       return "string";
//     } else if (typeof x === "boolean") {
//       return "boolean";
//     } else {
//       return -1;
//     }
//   }
// console.log(checkInput("false"));         // string

// Q4:

// function simpleEvenAdding(num) {
//   var solution = 0;

// for (var i = 1; i <= num; i++) { 
//     if (i % 2 === 0) { 
//       solution += i;
//     }
//   }
//   return solution;
// }

// console.log(simpleEvenAdding(11));

// Q5:

// function letterCapitalize(str) {
//   var solution = "";
//   var words = str.split(" ");
//   var length = words.length;

//   for (var i = 0; i < length; i++) {
//     solution += " " + words[i][0].toUpperCase() +
//     words[i].slice(1);
//   }
//   return solution.slice(1);
// }
// console.log(letterCapitalize("you cannot find the answer online"));

// Q6:

// function simpleReverse(str) {
//   var solution = "";

//   for (var i = str.length - 1; i>= 0; i--) {
//     solution += str[i];
    
//   }
//   return solution;
// }
// console.log(simpleReverse("I Love Code Hellooooooo"));

// Q7:

// function findDiff(arr) {
//     var min = arr[0];
//     var max = arr[0];
//     var length= arr.length;

//     for (var i = 0; i < length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//           }
//         if (arr[i] > max) {
//             max = arr[i];
//         }     
//     }
//     return max - min;
// }
// console.log(findDiff([1,5,10,15,20,100]));

// Q8:

// function timeConvert(num) {
//     var hours = parseInt(num / 60);
//     var mins = num % 60;
//     var solution = hours +":"+ mins;

//     return solution
// }
// console.log(timeConvert(5555))

// Q9:

// function findStr(str,long) { 
//     var strLength = str.length;
//     var longLength = long.length;
//     var counter = 0;

// for (var i = 0; i <= longLength-strLength; i++) {
//     if (str === long.slice(i, i+strLength)) {
//         counter++;
//     }
// }
// return counter;
// }
// console.log(findStr("bo","JamboRamboBobo"));

// Q10:

// function selfDividingNumbers(left,right) {
//     var solution = [];
//     for (var i = left; i <= right; i++) {
//         if (checkSelfDividing(i)) {
//         solution.push(i);
//         }
//     }
//     return solution;
// }

//     // Helper Function to check
//     function checkSelfDividing(num) {
//         var numString = num.toString();
//         var numArray = numString.split("");
//         var length = numArray.length;

//     for (var i = 0; i < length; i++) {
//         if (num % parseInt(numArray[i]) !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(selfDividingNumbers(12,21));

// Q11:

// function moveZeros(nums) {
//     var solution = [];
//     var counter = 0;
//     var length = nums.length;

//     for (var i = 0; i < nums.length; i++){
//         if (nums[i] === 0) {
//             counter ++;
//         } else {
//             solution.push(nums[i]);
//         }
//     }
//     while (counter > 0) {
//         solution.push(0);
//         counter--;
//     }
//     return solution;
// }
// console.log(moveZeros([0,1,0,3,12]));

// Q12:

// function average(nums) {
//     var sum = 0;
//     var length = nums.length;

//     for (var i = 0; i < length; i++) {
//         sum += nums[i];
//     }
//     return sum / length;
// }
// console.log(average([2,3,3,5,7,10]));
