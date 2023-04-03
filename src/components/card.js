import {
  cardsArea,
  picture,
  cardSubmit,
  imageDescription,
  profileName,
  linkAvatarInput,
  profileAvatar,
  popupCards,
  submitAvatarButton,
  popupImageZoom,
  popupProfile,
  profileStatus,
  nameInput,
  descriptionInput,
  nameCardInput,
  linkCardInput,
  profileSubmit,
  cardForm,
  cardItem,

} from "./constants";
import { openPopup, closePopup } from "./modal";

import { renderLoading } from "./utils";

import {
  addNewCard,
  deleteCard,
  addLike,
  deleteLike,
  editAvatar,
  editProfile,
} from "./api";

const placeForm = document.getElementById("cards-popup");

export function createCard(card, openImagePopup) {
  const cardElement = document
    .querySelector("#cards")
    .content.querySelector(".card")
    .cloneNode(true);
  cardElement.id = card._id;
  const elementImage = cardElement.querySelector(".card__photo");
  const likeElement = cardElement.querySelector(".card__button-like");
  const elementTrash = cardElement.querySelector(".card__delete");
  cardElement.querySelector(".card__name").textContent = card.name;
  elementImage.src = card.link;
  elementImage.alt = card.name;
  cardElement.querySelector(".card__like-counter").textContent =
    card.likes.length;
  elementTrash.addEventListener("click", deleteCard);
  likeElement.addEventListener("click", handleLike);
  card.likes.forEach((like) => checkLike(like._id, likeElement));
  elementImage.addEventListener("click", () => openImagePopup(elementImage));
  deleteCardUser(card, elementTrash);
  deleteCardServer(cardElement, elementTrash)
  return cardElement;
}

export function renderCard(card) {
  const cardElement = createCard(card, openImagePopup);
  cardsArea.prepend(cardElement);
}

export function openImagePopup(elementImage) {
  picture.src = elementImage.src;
  picture.alt = elementImage.alt;
  imageDescription.textContent = elementImage.alt;
  openPopup(popupImageZoom);
}

export function handleSubmitCard(evt) {
  evt.preventDefault();
  renderLoading(true, cardSubmit);
  addNewCard({
    name: nameCardInput.value,
    link: linkCardInput.value,
  })
    .then((res) => {
      renderCard(res);
      closePopup(popupCards);
      cardForm.reset();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, cardSubmit);
    });
}




function deleteCardUser(item, trash) {
  if (item.owner._id === profileName.id) {
    trash.classList.remove("card__delete_disable");
  } else {
    trash.classList.remove("card__delete");
    
  }
}

function deleteCardServer(cardElement, trash) {
  trash.addEventListener('click', () => {
    deleteCard(cardElement.id)
    .then(() => {
      cardElement.closest('.card').remove();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
  });
}

function handleLike(evt) {
  const cardEl = evt.target.closest(".card");
  const cardLikeCount = cardEl.querySelector(".card__like-counter");
  if (evt.target.classList.contains("card__button-like_active")) {
    deleteLike(cardEl.id)
      .then((res) => {
        checkLikesAmount(res._id, res.likes.length, cardLikeCount, cardEl.id);
        evt.target.classList.remove("card__button-like_active");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  } else {
    addLike(cardEl.id)
      .then((res) => {
        checkLikesAmount(res._id, res.likes.length, cardLikeCount, cardEl.id);
        evt.target.classList.add("card__button-like_active");
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
}

function checkLike(like, likeButton) {
  if (like === profileName.id) {
    likeButton.classList.add("card__button-like_active");
  }
}
function checkLikesAmount(id, numbers, counter, cardId) {
  if (cardId === id) {
    counter.textContent = numbers;
  }
}


