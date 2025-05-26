let name = "dorji";

switch (name) {
  case "pema":
    console.log("pema");
    break;
  case "sonam":
    console.log("sonam");
    break;
  case "dorji":
    console.log("dorji");
    break;
  default:
    console.log(`its not here`);

for(let i=0; i<10; i++){
    console.log("my name is sonam")
}
}
let names = [
    "pratap",
  "sonam",
  "tenzin",
  "chime",
  "kinzang",
  "jigme",
  "gaylay",
  "tak nat",
  "karma",
  "pema",
  "jaymang",
];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i = 2; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function countEvenNumbers(numbers) {
  let count = 0;
  for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

let i = 1;
while (i <= 10) {
  console.log("name");
  i++;
// }

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzBuzz";
  } else if (number % 3 === 0
  ) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(25));
console.log(fizzBuzz(9));
console.log(fizzBuzz(7));

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 2; i <= 10; i++) {
  if (i%2!== 0) {
    console.log(i);
  }
}

let i = 5;
while (i <= 50) {
  console.log(i);
  i = i * 2;
}
 
let i = 3;
while (i <= 500) {
  console.log(i);
  if (i % 3 === 0){
    i = i * 2;
  }
}
