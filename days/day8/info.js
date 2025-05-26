console.log("hello from the js file");

let students = [
  {
    name: "Pratap",
    age: 29,
    address: "pokhara",
    hobbies: ["coding", "singing", "hiking"],
    bio: "he is from Nepal and he likes to hike and code and is found of teaching",
  },
  {
    name: "Sonam",
    age: 23,
    address: "thimphu",
    hobbies: ["gaming", "reading"],
    bio: "he is from bhutan thimphu and he likes to dring and relax playing online games",
  },
  {
    name: "Chimi",
    age: 19,
    address: "thimphu",
    hobbies: ["reading", "cooking", "games"],
    bio: "she is from bumthang and loves to cook and clean house",
  },
  {
    name: "Tenzin",
    age: 24,
    address: "bumthang",
    hobbies: ["driving", "music", "chatting", "tiktok"],
    bio: "she likes to drive around listening to music and make tiktok",
  },
  {
    name: "Kuenzang",
    age: 20,
    address: "zhamgang",
    hobbies: ["tiktok", "games", "singing", "dancing"],
    bio: "he likes to dance and sing to make tiktok",
  },
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
  if (selectValue === "Select one") {
    alert(`please select either age or address or bio or hobbies or all`);
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

  //   } else if (selectValue === "Age") {
  //     alert(`${name} is ${student.age} years old`);
  //     return;
  //   } else if (selectValue === "Adderss") {
  //     alert(`${name} is from ${student.address}`);
  //     return;
  //   } else if (selectValue === "Bio") {
  //     alert(`${name} ${student.Bio} `);
  //     return;
  //   }
  //   else if (selectValue === "Hobbies") {
  //     alert(`${name} hobbies are ${student.Hobbies} `);
  //     return;
  //   }
  // }

  switch (selectValue) {
    case "Age":
      alert(`${name} is ${student.age} years old`);
      break;

    case "Address":
      alert(`${name} is from ${student.address}`);
      break;

    case "Hobbies":
      alert(`${name} likes to ${student.hobbies}`);
      break;

    case "Bio":
      alert(`${name} ${student.bio}`);
      break;

    default:
      alert(
        `${name} is ${student.age} years old and is from  ${student.address} whos bio are ${student.bio} and has a hobbie ${student.hobbies}`
      );
  }
}

