let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
document.write('<div>We Have X-Admins</div>');


document.write(`<div>  We Have ${myAdmins.length} Admin </div>`)

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] == "Stop") {
    break;
  }
  document.write(`<div>  The Admin for Team ${i + 1} is ${myAdmins[i]} </div>`);
  document.write(`Team Members is :`);
  for(let j = 0 ; j < myEmployees.length ; j++)
  {
      // if(myEmployees[i][0] == 'A')
      // {
      //     console.log(myEmployees[i]);
      // }
      // if(myEmployees[i][0] == 'S')
      // {
      //     console.log(myEmployees[i]);
      // }
      if(myEmployees[j][0] == 'O')
      {
          document.write(`${myEmployees[j]}`)
      }
  }

  
}
