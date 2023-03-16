// DESCRIPTION:
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// let Func= ( n) => n ? n.value : console.log();

const expr = 1;

let Func = (n) => {
  switch (n) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "two";
      break;

    case 3:
      return "three";
      break;

    case 4:
      return "Four";
      break;

    case 5:
      return "Five";
      break;

    case 6:
      return "Six";
      break;

    case 7:
      return "Seven";
      break;
 
    case 8:
      return "eight";
      break;

    case 9:
      return "nine";
      break;


    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
};
console.log(Func(5));
