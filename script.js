// ====================
// Part 1: Event Handling
// ====================
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "You clicked the button! 🎉";
});

// ====================
// Part 2: Interactive Features
// ====================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counter = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// ====================
// Part 3: Form Validation
// ====================
const signupForm = document.getElementById("signupForm");
const formErrors = document.getElementById("formErrors");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent page reload
  formErrors.textContent = ""; // clear errors

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Validate Name
  if (name === "") {
    errors.push("Name cannot be empty");
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address");
  }

  // Validate Password
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  // Show errors or success
  if (errors.length > 0) {
    formErrors.textContent = errors.join(", ");
  } else {
    alert("Form submitted successfully! 🎉");
    signupForm.reset();
  }
});
