import { initialCards } from "../pages/index";
import { popupOpen, popupClose } from "./modal";
import {
  cardsArea,
  popupImageZoom,
  popupProfile,
  popupCards,
  profileName,
  profileStatus,
  nameInput,
  nameCardInput,
  descriptionInput,
  linkCardInput,
} from "../pages/index";

export const addCards = function (name, link) {
  const contentCardTemplate = document.querySelector("#cards").content;
  const copyCardTemplate = contentCardTemplate
    .querySelector(".card")
    .cloneNode(true);

  copyCardTemplate.querySelector(".card__name").textContent = name;
  copyCardTemplate.querySelector(".card__photo").src = link;

  copyCardTemplate
    .querySelector(".card__button-like")
    .addEventListener("click", function (evt) {
      console.log(123);
      evt.target.classList.toggle("card__button-like_active");
    });

  copyCardTemplate
    .querySelector(".card__delete")
    .addEventListener("click", function (evt) {
      evt.target.closest(".card").remove();
    });

  const getZoomImages = function () {
    popupImageZoom.querySelector(".popup__description").textContent = name;
    popupImageZoom.querySelector(".popup__image").src = link;
    popupOpen(popupImageZoom);
  };

  copyCardTemplate
    .querySelector(".card__photo")
    .addEventListener("click", getZoomImages);

  return copyCardTemplate;
};

export const integrationCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(nameCardInput.value, linkCardInput.value));
  popupClose(popupCards);
};

export const integrationInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(addCards(card.name, card.link));
  });
};

integrationInitialCards();

export const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = descriptionInput.value;
  popupClose(popupProfile);
};
