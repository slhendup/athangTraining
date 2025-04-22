console.log("hello from the js file");

let students = [
  { name: "pratap", age: 29, address: "pokhara" },
  { name: "sonam", age: 23, address: "thimphu" },
  { name: "chimi", age: 19, address: "thimphu" },
  { name: "tenzin", age: 24, address: "bumthang" },
  { name: "kuenzang", age: 20, address: "zhamgang" },
];

function submit() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  const mySelect = document.getElementById("option");
  const selectValue = mySelect.value;

  if (!name) {
    alert("please enter a name");
    return;
  } 
  if (selectValue === "Select one" ) {
    alert (`please select either age or address or both`);
    return;
  }

  const student = students.find(function (item) {
    if (name === item.name) {
      return true;
    } else {
      return false;
    }
  });

  if (!student) {
    alert(`no student found with the name ${name}`);
    return;
  }
  if (selectValue === "Age") {
    alert(`${name} is ${student.age} years old`);
    return;
  } 
  if (selectValue === "Adderss") {
    alert(`${name} is from ${student.address}`);
    return;
  } 
  if (selectValue === "Both") {
    alert(`${name} is ${student.age} and is from ${student.address}`)
    return;
  }

}
