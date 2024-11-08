// string questions
// Q1. Reversing of string
// const reverseFunction = (str)=> {
//     let reverse = ""
//     for(let i = str.length - 1; i >= 0; i--) {
//         reverse  += str[i]
//     }
//     return reverse

// or

// return str.split("").reverse().join("")
// }
// let str1 = "ABCDEFGHI"
// let result = reverseFunction(str1)
// console.log(result);

// Q2. For check pelindrome
// const Pelindrome = (str)=> {
//     let reverse = str.split("").reverse().join("")
//     let result;
//     if(str === reverse){
//         result = "This is a pelindrome"
//     }else {
//         result = "This is not a pelindrome"
//     }
//     return result
//  }
//  let str1 = "ABBA"
//  let result = Pelindrome(str1)
//  console.log(result);

// const perindrome = (str)=> {
//     let reverse =  "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reverse += str[i]
//     }
//     if(str === reverse){
//         return `${str} is a pelindrome`
//     }else{
//         return `${str} is not a pelindrome`
//     }
//   }

//   console.log( perindrome("arawww"))

// const Pelindrome = (str)=> {
//     let result = ""
//     for(let i = 0 ; i <= Math.floor(str.length / 2); i++){
//         if(str[i] === str[str.length -1 -i] ){
//             result = "pelindrome"
//         }else {
//             result = "Not pelindrome"
//         }
//     }
//     return result
//   }
//   let str1 = "ABABA"
//   let result = Pelindrome(str1)
//   console.log(result);

// 03. function for find largest word from any string
// let text = "AA Anshuuu kuma444 Singh SessionEnded"
// const largestWord = (str)=> {
//  let largestWord = "";
//  let words = str.split(" ")
//  words.forEach((item)=>{
//     if( item.length > largestWord.length){
//         largestWord = item
//     }
//  })
//  return largestWord;
// }
// const result = largestWord(text);
// console.log(result);;

//04. Counting duplicate characters
// const charCountResult = (str) => {
//     let charCount = {};
//     for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }

//     // Find the character with the maximum count
//     let maxChar = '';
//     let maxCount = 0;

//     for (let char in charCount) {
//       if (charCount[char] > maxCount) {
//         maxCount = charCount[char];
//         maxChar = char;
//       }
//     }

//     return { maxChar, maxCount, charCount };
//   };

//   const str = "adsjfdsfsfjsdjfhacabcsbajda";
//   console.log(charCountResult(str));

// or

// const charCountResult = (str) => {
//   let obj = {};
//   let letters = str.split("");
//   letters.forEach((item) => {
//     if (obj.hasOwnProperty(item)) {
//       obj[item] = obj[item] + 1;
//     } else {
//       obj[item] = 1;
//     }
//   });
//   let maxCount = 0;
//   let maxChar = "";
//   for (let item in obj) {
//     if (obj[item] > maxCount) {
//       maxCount = obj[item];
//       maxChar = item;
//     }
//   }
//   return { maxCount, maxChar, obj };
// };
// const str = "adsjfdsfsfjsdjfhacabcsbajda";
// console.log(charCountResult(str));

//05. Reversing of words in any string
// const reverseWords = (str)=> {
//     const data = str.split(" ")
//     console.log("data", data)
//     const mapMethod = data.map((item)=> item.split("").reverse().join("") )
//     console.log("mapMethod", mapMethod)

//   }
//   const str = "I evol uoy os !hcum"
//   console.log(reverseWords(str))

//06. sorting an array by length of an element
// const sortByLength = (arr)=> {
//     return arr.sort((a, b)=> a.length - b.length)
//   }
//   const Input= ["You", "beautiful", "looking" , "are"]
//   console.log(sortByLength(Input))

// Question: Write a function that returns the first non-repeating character in a string. If all characters repeat, return null.
// function firstNonRepeatingCharacter(str) {
//     const charCount = {};

//     for (let char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for (let char of str) {
//         if (charCount[char] === 1) return char;
//     }

//     return null;
// }
// console.log(firstNonRepeatingCharacter("swiss"));
// console.log(firstNonRepeatingCharacter("aabb"));

// Question: Write a function to check if two strings are anagrams of each other.
// function areAnagrams(str1, str2) {
//     const normalize = (str)=> str.toLowerCase().split("").sort().join("")
//     return normalize(str1) === normalize(str2)
//    }
//    console.log(areAnagrams("Listen", "silent"));
//    console.log(areAnagrams("hello", "world"));

// Question: Write a function to count the number of vowels and consonants in a string.
// const CoutLetter = (str)=> {
//     const vavel = "aeiouAEIOU"
//     let vavelCount = 0;
//     let consonentCount = 0;
//     for(let item of str){
//         if(vavel.includes(item)){
//             vavelCount ++
//         }else{
//             consonentCount++
//         }
//     }
//     return {vavelCount ,consonentCount}
// }
// const result = CoutLetter("dshfjketiowueiosdnfsklfwrje")
// console.log(result)

// Array /////////////////////////////////////////////////////////////////////////
// 1. Check if pair with the given Sum exists in Array
// const hasPairWithSum = (array, targetSum) => {
//   let pairs = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         pairs.push({
//           first: array[i],
//           second: array[j],
//         });
//       }
//     }
//   }
//   if (pairs.length > 0) {
//     return pairs;
//   } else {
//     return "Not Found Pairs";
//   }
// };
// const array = [1, 2, 5, 4, 5, 6];
// const targetSum = 10;
// const result = hasPairWithSum(array, targetSum);
// console.log(result);

// 2. Find all duplicates from an Array
// const findDuplicates = (array) => {
//   let duplicateNumbers = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         duplicateNumbers.push(array[i]);
//       }
//     }
//   }
//   if (duplicateNumbers.length > 0) {
//     return duplicateNumbers;
//   } else {
//     return "Here Not having any Duplicates";
//   }
// };

// const array = [1, 2, 3, 6, 3, 6, 1];
// const result = findDuplicates(array);
// console.log(result);

// 3. find max number from array
// function findMax(arr){
//     if(arr.length === 0){
//         return null
//     }
//  let max = arr[0]
//  let min = arr[0]

//  for(let i = 0; i < arr.length ; i++ ){
//    if(arr[i] > max){
//        max = arr[i]
//    }
// if (arr[i] < min) {
//     min = arr[i];
// }
// }
// return { max, min };
// }
// const numbers = [31, 17, 2, 5, 19, 1];
// const maxNumber = findMax(numbers);
// console.log(maxNumber);

//4. for find even number from an array
// const evenNumber = (arr) => {
//   let result = arr.filter((num) => num % 2 === 0);
//   return result;
// };
// let array1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = evenNumber(array1);
// console.log(result);

//5 Factorial of a number
// const Factorial = (num)=> {
//     let result = 1;
// if (number === 0 || number === 1) {
//   result = 1;
// }
//     for(let i= 1; i <= num ; i++){
//         result *= i
//     }
//     return result
// }
// let number = 4
// let result = Factorial(number)
// console.log(result)

//6. for find prime number from an array
// function isPrime(num) {

//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {

//       if (num % i === 0) return false;

//     }
//     return true;
//   }

// function isPrime(num) {

//     if (num <= 1) return false;

//     for (let i = 2; i < num; i++) {

//       if (num % i === 0) return false;

//     }
//     return true;
//   }

//7. find longest nestest array
// const longestArr = (arr) => {
//   let array = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > array.length) {
//       array = arr[i];
//     }
//   }
//   return array;
// };
// const array = [[1], [2, 3], [9, 8, 0, 6, 0], [8, 9, 0]];
// console.log(longestArr(array));

//8. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// const toTitleCase = (str) => {
//   const result = str
//     .split(" ")
//     .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     .join(" ");

//   console.log(result);
// };
// console.log(toTitleCase("anshu singh"));

//9. a function take a two argument first an array & second a number find the index of two number that sum is equal to target number
// const sumNumber = (arr, target)=>{
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++ ){
//             if(arr[i] !== arr[j]){
//                 if(arr[i] + arr[j] === target){
//                     return [i, j]
//                 }
//             }
//         }
//     }
// }
// console.log(sumNumber([2,5,7,8], 10));

//10. Que sorting of an array
// const maxNumber = (num)=>{
//     for (let i= 0; i < num.length; i++){
//        for(let j= i + 1; j < num.length ; j++){
//            if(num[i] > num[j]){
//                let temp = num[i];
//                num[i] = num[j]
//                num[j] = temp
//            }
//        }
//     }
//     return num
//     }
//     let data = [100, 4, 5, 200, 80, 30, 20, 500]
//     console.log(maxNumber(data))
