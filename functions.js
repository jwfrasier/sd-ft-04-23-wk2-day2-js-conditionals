function sumTwoNumbers(num1, num2) {
  console.log({ num1 });
  console.log({ num2 });
  return num1 + num2;
}

for (let index = 0; index < 11; index++) {
  console.log(sumTwoNumbers(30, -33));
}
// define a function that is called thisIsMyName
function thisIsMyName(myName) {
  console.log(myName.toUpperCase());
}

// invoke the function you just made
thisIsMyName("Kim");
// change your original function to accept a name parameter

// write a function that accepts 3 a parameters
// the parameters are as follows
// height
// weight
// age

function poundsToKilos(lbs) {
  return;
}
function age2Sec(age) {
  return age * 525949;
}

function heightWeightAge(height, weight, age) {
  console.log(`Your height is ${height} \n`);
  console.log(`Your weight is approx ${weight * 0.45} kilos `);
  const ageInSeconds = age2Sec(age);
}
// for height, I need you to write a message that says
// "Your height is height"

// for weight, I want you to convert it to kilos
// convert that into a whole number
//  print a message that says
// "You weight approx 220 kilos"

// for age, I need you to convert their age, into seconds
heightWeightAge("6ft", 150, 22);
