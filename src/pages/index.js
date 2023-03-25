import "./index.css";
import "../index.html";
import {
  
  integrationCard,
  formSubmitHandler,
  
} from "../components/card";

import { popupOpen, popupClose, } from "../components/modal";

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const editProfileIcon = document.querySelector(".profile__edit-button");

export const addCardIcon = document.querySelector(".profile__button-add");

export const profileName = document.querySelector(".profile__name");

export const profileStatus = document.querySelector(".profile__status");

export const popupProfile = document.querySelector("#profile-popup");

export const popupCards = document.querySelector("#cards-popup");

export const popupImageZoom = document.querySelector("#image-popup");

export const popupProfileCloseIcon = popupProfile.querySelector(
  ".popup__button-close"
);

export const popupCardsCloseIcon = popupCards.querySelector(
  ".popup__button-close"
);

export const popupImageZoomCloseIcon = popupImageZoom.querySelector(
  ".popup__button-close"
);

export const nameInput = popupProfile.querySelector(".popup__name");

export const nameCardInput = popupCards.querySelector(".popup__name");

export const descriptionInput = popupProfile.querySelector(".popup__status");

export const linkCardInput = popupCards.querySelector(".popup__status");

export const cardsArea = document.querySelector(".pictures");

export const popups = document.querySelectorAll(".popup");

editProfileIcon.addEventListener("click", () => popupOpen(popupProfile));

addCardIcon.addEventListener("click", () => popupOpen(popupCards));

popupProfileCloseIcon.addEventListener("click", () => popupClose(popupProfile));

popupCardsCloseIcon.addEventListener("click", () => popupClose(popupCards));

popupImageZoomCloseIcon.addEventListener("click", () =>
  popupClose(popupImageZoom)
);

popupProfile.addEventListener("submit", formSubmitHandler);

popupCards.addEventListener("submit", integrationCard);
