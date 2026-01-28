const form = document.querySelector(".signup-form");
const message = document.querySelector(".success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "Thank you! We’ll notify you at launch.";
  message.style.display = "block";
  form.reset();
});
