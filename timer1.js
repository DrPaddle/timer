



const numbers = ['900', '310', '-10', 'asdfadsf'];
//const numbers = process.argv.slice(2);
console.log(numbers.map(n => parseInt(n)).filter(n => Number.isInteger(n) && n >=0))
const simpleTimer = (numbers) => {

  numbers
  .map(n => parseInt(n))
  .filter(n => Number.isInteger(n) && n >=0)
  .forEach(n => {

    setTimeout(() => process.stdout.write('\x07'), n);

  });
};
simpleTimer(numbers);







// const numbers = ['900', '310', '-10', 'asdfadsf'];
// //const numbers = process.argv.slice(2);

// const simpleTimer = (numbers) => {
//  // console.log(numbers)
//   if (numbers.length === 0 ) {
//     console.log("no numbers inputted");
//     return
//   } 
//   numbers
//   .map(n => parseInt(n)).filter(n => Number.isInteger(n) && n >=0)
//   numbers.forEach(str => {
//     let newNumber = parseInt(str);
//     console.log(newNumber);
//     if (newNumber < 0) {

//       console.log("this is less than 0: ", newNumber);
//       return

//     } else if (Number.isNaN(newNumber)) {

//       console.log("this is not a number", newNumber);
//       return
//     } 
//     setTimeout(() => process.stdout.write('\x07'), newNumber);
//   });
// };
// simpleTimer(numbers);

