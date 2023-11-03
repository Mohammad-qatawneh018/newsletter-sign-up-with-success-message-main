const container = document.querySelector(".container");
const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

const userEmail = document.querySelector(".email-field");
const invalidEmail = document.querySelector(".invalid-email");
const subButton = document.querySelector(".button");
const user = document.querySelector(".user-email");

const confirmedMsg = document.querySelector(".confirmed-message");
const dissmisMsg = document.querySelector(".dissmis-message");

function success() {
  leftSide.style.display = "none";
  rightSide.style.display = "none";
  confirmedMsg.classList.add("active");
  container.classList.add("success");
}

function validEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = userEmail.value.trim();
  if (validEmail(email)) {
    success();
    user.innerText = email;
    userEmail.value = "";
    invalidEmail.classList.remove("active");
    userEmail.classList.remove("active");
  } else {
    invalidEmail.classList.add("active");
    userEmail.classList.add("active");
  }
});

dissmisMsg.addEventListener("click", () => {
  leftSide.style.display = "block";
  rightSide.style.display = "block";
  container.classList.remove("success");
  confirmedMsg.classList.remove("active");
});
