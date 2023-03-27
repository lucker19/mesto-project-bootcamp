import { profileName,profileStatus, nameInput, descriptionInput,popupProfile } from "./constants";
import { popupClose, } from "./modal";

export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.add("popup__error_visible");
  errorElement.textContent = errorMessage;
};

export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};
export const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
export function enableValidation() {
  const forms = Array.from(document.querySelectorAll(".popup__form"));
  forms.forEach((formElement) => {
    setEventListeners(formElement);
}); }

export const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

export const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button-submit_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button-submit_disabled");
    buttonElement.disabled = false;
  }
};

export const setEventListeners = (popupForm) => {
  const inputList = Array.from(popupForm.querySelectorAll(".popup__input"));
  const buttonElement = popupForm.querySelector(".popup__button-submit");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValid(popupForm, formInput);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__error',
  errorClass: 'popup__error_visible'
}); 

export const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = descriptionInput.vue;al
  popupClose(popupProfile);
};

