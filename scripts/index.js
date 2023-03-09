const initialCards = [
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

const editProfileIcon = document.querySelector(".profile__edit-button");

const addCardIcon = document.querySelector(".profile__button-add");

const profileName = document.querySelector(".profile__name");

const profileStatus = document.querySelector(".profile__status");

const popupProfile = document.querySelector("#profile-popup");

const popupCards = document.querySelector("#cards-popup");

const popupImageZoom = document.querySelector("#image-popup");

const popupProfileCloseIcon = popupProfile.querySelector(
  ".popup__button-close"
);

const popupCardsCloseIcon = popupCards.querySelector(".popup__button-close");

const popupImageZoomCloseIcon = popupImageZoom.querySelector(
  ".popup__button-close"
);

const nameInput = popupProfile.querySelector(".popup__name");

const nameCardInput = popupCards.querySelector(".popup__name");

const descriptionInput = popupProfile.querySelector(".popup__status");

const linkCardInput = popupCards.querySelector(".popup__status");

const cardsArea = document.querySelector(".pictures");

const popupOpen = function (popupName) {
  popupName.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileStatus.textContent;
};

const popupClose = function (popupName) {
  popupName.classList.remove("popup_opened");
};

const addCards = function (name, link) {
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

const integrationCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(nameCardInput.value, linkCardInput.value));
  popupClose(popupCards);
};

const integrationInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(addCards(card.name, card.link));
  });
};

integrationInitialCards();

const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = descriptionInput.value;
  popupClose(popupProfile);
};

editProfileIcon.addEventListener("click", () => popupOpen(popupProfile));

addCardIcon.addEventListener("click", () => popupOpen(popupCards));

popupProfileCloseIcon.addEventListener("click", () => popupClose(popupProfile));

popupCardsCloseIcon.addEventListener("click", () => popupClose(popupCards));

popupImageZoomCloseIcon.addEventListener("click", () =>
  popupClose(popupImageZoom)
);

popupProfile.addEventListener("submit", formSubmitHandler);

popupCards.addEventListener("submit", integrationCard);
