// Relisten to the video! These Questions will be on the interviews. 
// Q1: DONE--Write the function printInt(n) taking one parameter n and print all natural numbers from 1 to n in console.
// create a function with the correct name, get half point. 
function printInt(n) {
    // This needs to be a loop(forloop, when to start and when to stop)
    for (var i= 1; i<=n; i++) {
                console.log(i);
    }
}

printInt(10);
// TEST everything on index.HTML. 
// don't ...FIND on VIDEO

// Q2: Write the function printIntRev(n) taking one parameter n and print all natural numbers in reverse in console (from n to 1).
// Hint: reverse loop in Q1 (same as above)
function printIntRev(n) {
 
	for(let i = 1; i>=1 ; i--) {
		console.log(i);
    }
}
printIntRev(50)

// Q3: Write the function checkInput(x) taking one parameter x and return the string ‘number’ if x is a number; return the string ‘string’ if x is a string; and return ‘boolean’ if x is a boolean. Otherwise returns -1. 
Examples:
checkInput(5) ====> ‘number’
checkInput(‘hello’)======> ‘string’
checkInput(‘5’) ======> ‘string’
checkInput(true)=====> boolean
checkInput([1,2,3,4]) =====> -1
Hint: Check JavaScript typeof
.....

// Q4:Write the function simpleEvenAdding(num) taking a number and add up all the even numbers from 1 to num, and return it 
Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
       simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
       simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
              simpleEvenAdding(1) ======> 0
       simpleEvenAdding(0) =======> 0
Hint: loop + if conditional + %
....

// Q5:Write the function letterCapitalize(str) taking a string and capitalize the first letter of each word. The given words will be separated by only one space.
	Examples:
    letterCapitalize(“hello world”) ===========> “Hello World”
letterCapitalize(“you cannot find the answer online”) =====>  “You Cannot Find The Answer Online”

Hint: There is a built-in function in JavaScript that change string into uppercase. There is also a function to separate string into an array of words. (split)

// Q6: Write the function simpleReverse(str) taking a string and return the string in reversed order. 
	Examples:
    // simpleReverse(‘hello’) ======> ‘olleh’
    // simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

Hint: Think of how you can loop through a string or array of characters backwards to produce a new string

// Q7: Write the function findDiff(arr) taking an array of numbers as parameter and return the difference between the maximum number and the minimum number (max - min). 
Examples:
findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
findDiff([1, 1, 1, 1, 1]) =======> 0 
findDiff([1]) ======> 0;
findDiff([]) =======> 0;
Hint: 1)Looking for max, 2)Looking for min 3) min -> max - min.Use a loop to subtract min from max, Check online

// Q8: Write the function timeConvert(num) taking a number as parameter and return the number of hours and minutes the parameter converts to. Separate the number of hours and minutes with a colon.
	Example:
    timeConvert(61) ======> 1:1
    timeConvert(63) =======> 1:3
    timeConvert(120)======> 2:0
    timeConvert(59)=======> 0:59
    Hint: Dividing(/) and modulo(%) the number 60. NO loop needed!

// Q9: Write the function findStr(str, long) taking two strings as parameters and return how many str you can find in long. Assume Str is not empty string.
Example:
findStr(“hi”, “dasdhidasdahidashi”) =======> 3
findStr(“o”, “daodo”) =======> 2
findStr(“ha”,”abcde”)=======> 0
findStr(“h”, “hihelloho”)======> 3
Hint: HARD! loop through the long string, to check if there is any "str"

// Q10- Write the function selfDividingNumbers(left, right) taking two number bound as parameters and returns an array of every possible self dividing number between 
them, including the bounds. 

Hint: A self-dividing number is a number that is divisible by every digit it contains. For example, 128 is a self-dividing number because 128 % 1 ==0, 128 % 2 == 0 and 128 % 8 == 0. 
**Be careful, definition- self dividing number, Loop, from 1-10, (1,10)
Examples:
	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
selfDividingNumbers(12, 21) =======> [12, 15]

// Q11-  video
11. Write the function moveZeros(nums) taking an array of numbers and move all 0’s to the end of it while maintaining the relative order of the non-zero elements.  For example:
moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
moveZeros([0,0,0]) ======> [0,0,0]
moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]

function moveZeros(nums{
    var temp;
    for(var i=0; i ,nums.length-1; i++){
// if this case happens, you're gonna subtract
    if (nums[1]===0) {
        temp=nums.splice(i,1)
        nums(push(temp[0]));
    }
})

// Q12- Create an average(nums) function that calculates the average of an array of numbers.
Examples: 
	average([2, 6]) =====> 4
	average([2, 3, 3, 5, 7, 10]) ======> 5
average([7, 1432, 12, 13, 100]) ======> 312.8
average([]) ======> 0

Hint: Sum of all elements / number of elements

