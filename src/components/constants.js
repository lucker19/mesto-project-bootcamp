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

  export const imageDescription = popupImageZoom.querySelector(".popup__description")
  export const picture = popupImageZoom.querySelector(".popup__image")

    export const submitAvatarButton = document.querySelector(".popup__button-submit")

  export const profileAvatar = document.querySelector("profile__avatar")
  export const buttonAvatarEdit = document.querySelector(".profile__avatar-button");
  export const popupEditAvatar = document.querySelector(".popup__avatar");
  export const popupFormAvatar = document.getElementById("avatar_form");
  export const submitPopupButton = popupEditAvatar.querySelector(
    ".popup__button-submit"
  );
  export const linkAvatarInput = document.querySelector(
    ".popup__status"
  );

  export const avatarImage = document.querySelector(".profile__avatar");

  export const cardDeleteButton = document.querySelector("card__delete")

  