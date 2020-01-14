const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


//numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,'y']


stdin.on('data', (key) => {

  

  if (key === '\u0003') {
    
    console.log(`Thank you for using me, ciao!`);
    process.exit();
    

  } else if (key === 'b' ) {

    process.stdout.write('\x07')

  } else if (key > 0 && key <= 9) {

    setTimeout(() => process.stdout.write(`setting timer for ${key} seconds`), key*10);
    setTimeout(() => process.stdout.write('\x07'), key*1000)
  } 
});

console.log('after callback');

// else {

//   numbers.forEach((n) => {
//     if (n === key) {
//       console.log("helo")
//     }
//   })
// }
