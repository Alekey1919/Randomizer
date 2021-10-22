// NAVBAR

let randomNumber = document.querySelector(".random-number-section");
let randomPerson = document.querySelector(".random-person-section");
let yesNo = document.querySelector(".yes-no-section");

document.getElementById("random-number").addEventListener("click", () => {
  randomNumber.classList.remove("none");
  randomPerson.classList.add("none");
  yesNo.classList.add("none");
});

document.getElementById("random-person").addEventListener("click", () => {
  randomNumber.classList.add("none");
  randomPerson.classList.remove("none");
  yesNo.classList.add("none");
});

document.getElementById("yes-no").addEventListener("click", () => {
  randomNumber.classList.add("none");
  randomPerson.classList.add("none");
  yesNo.classList.remove("none");
});

// RANDOM NUMBER

// Block weird values in inputs type number

const checkPress = (e) => {
  if ((e.which != 8 && e.which != 0 && e.which < 48) || e.which > 57) {
    e.preventDefault();
  }
};

const randomNumberMin = document.getElementById("random-number-min");
randomNumberMin.addEventListener("keypress", checkPress);

const randomNumberMax = document.getElementById("random-number-max");
randomNumberMax.addEventListener("keypress", checkPress);

document
  .getElementById("random-number-button")
  .addEventListener("click", () => {
    let min = document.getElementById("random-number-min").value;
    let max = document.getElementById("random-number-max").value;

    if (min === "" || max === "") {
      return alert("You need to set a min and a max value");
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("random-number-result").innerText = result;
  });

// RANDOM PERSON

document
  .getElementById("random-person-button")
  .addEventListener("click", () => {
    let names = document.getElementById("random-person-input").value.split(",");
    let result = Math.floor(Math.random() * names.length);
    document.getElementById("random-person-result").innerText = names[result];
  });

// YES NO

document.getElementById("yes-no-button").addEventListener("click", () => {
  let answers = [
    "Yes.",
    "No.",
    "Probably.",
    "Probably not.",
    "Definitely.",
    "Never.",
    "Follow your heart, not a robot.",
  ];

  document.getElementById("yes-no-result").innerText =
    answers[Math.floor(Math.random() * answers.length)];
});
