"use strict";

// * Selector
const btn = document.querySelector(".btn--notify");
const inputField = document.querySelector("#email-input");
const errorBox = document.querySelector(".error");

// * Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".btn--close");
const modalClose = document.querySelector(".modal-close");

const checkEmail = function (email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).trim());
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  inputField.value = "";
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  if (!checkEmail(inputField.value)) {
    errorBox.textContent = "Please provide a valid email address";
    inputField.style.setProperty("border-color", "var(--secondary-200)");
  } else {
    errorBox.textContent = "";
    inputField.style.setProperty("border-color", "var(--primary)");
    openModal();
  }
});

// btn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
console.log("javascript loaded");
