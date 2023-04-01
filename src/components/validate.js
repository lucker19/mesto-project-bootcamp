export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disabled",
  inputErrorClass: "popup__error",
  errorClass: "apopup__error_visible",
};

const showInputError = (popupForm, formInput, errorMessage, settings) => {
  const formError = popupForm.querySelector(`.${formInput.id}__error`);
  formError.textContent = errorMessage;

  formError.classList.add(settings.errorClass);
  formInput.classList.add(settings.inputErrorClass);
};

const hideInputError = (popupForm, formInput, settings) => {
  const formError = popupForm.querySelector(`.${formInput.id}__error`);

  formError.classList.remove(settings.errorClass);
  formInput.classList.remove(settings.inputErrorClass);
  formError.textContent = "";
};
const isValid = (popupForm, formInput, settings) => {
  if (!formInput.validity.valid) {
    showInputError(popupForm, formInput, formInput.validationMessage, settings);
  } else {
    hideInputError(popupForm, formInput, settings);
  }
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((popupForm) => {
    popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(popupForm, settings);
  });
};
const hasInvalidInput = (inputList) => {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
};
export const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList, settings)) {
    disableButton(buttonElement, settings);
  } else {
    enableButton(buttonElement, settings);
  }
};

const disableButton = (buttonElement, settings) => {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.disabled = true;
};
const enableButton = (buttonElement, settings) => {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.disabled = false;
};
const setEventListeners = (popupForm, settings) => {
  const inputList = Array.from(
    popupForm.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = popupForm.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settings);
  popupForm.addEventListener("submit", () => {
    disableButton(buttonElement, settings);
  });
  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValid(popupForm, formInput, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};
