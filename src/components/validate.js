import {
  cardsArea,
  popupImageZoom,
  popupProfile,
  popupCards,
  popupImageZoomCloseIcon,
  popupCardsCloseIcon,
  editProfileIcon,
  addCardIcon,
  profileName,
  profileStatus,
  popupProfileCloseIcon,
  nameInput,
  nameCardInput,
  descriptionInput,
  linkCardInput,
} from "../pages/index";
import {
  addCards,
  integrationCard,
  formSubmitHandler,
  integrationInitialCards,
} from "../components/card";
import { popupOpen, popupClose,popupEscClose } from "./modal";

export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__error_visible");
  errorElement.textContent = errorMessage;
};

export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
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
  });
}

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

enableValidation();
