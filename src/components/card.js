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
  profileSubmit
} from "./constants";
import { popupOpen, popupClose } from "./modal";

import {

  addNewCard,
  deleteCard,
  addLike,
  deleteLike,
  editAvatar,

  editProfile
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
  likeElement.addEventListener("click", giveLike);
  card.likes.forEach((like) => checkLike(like._id, likeElement));
  elementImage.addEventListener("click", () => openImagePopup(elementImage));
  deleteCardUser(card, elementTrash);
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
  popupOpen(popupImageZoom);
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
      popupClose(popupCards);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      renderLoading(false, cardSubmit);
    });
}

export function handleSubmitProfile(evt) {
  evt.preventDefault();
  renderLoading(true, profileSubmit);

  const name = nameInput.value;
  const about = descriptionInput.value;

  editProfile(name, about)
      .then(res => {
        profileName.textContent = res.name;
        profileStatus.textContent = res.about;
          popupClose(popupProfile);
      })
      .catch((err) => {
          console.log(err); 
      })
      .finally(() => {
          renderLoading(false, profileSubmit);

      })

}



export function renderLoading(
  condition,
  button,
  buttonText = "Сохранить",
  loadingText = "Сохранение..."
) {
  if (condition) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  }
}

function deleteCardUser(item, trash) {
  if (item.owner._id === profileName.id) {
    trash.classList.remove("card__delete_disable");
  } else {
    trash.classList.remove("card__delete");
  }
}



function giveLike(evt) {
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

export function submitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, submitAvatarButton);
  editAvatar(linkAvatarInput.value)
    .then((res) => {
      profileAvatar.link = res.avatarImage;
      popupClose(popupEditAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => renderLoading(false, submitAvatarButton));
}
