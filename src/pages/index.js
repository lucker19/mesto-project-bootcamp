import "./index.css";
import "../index.html";
import {
  createCard,
  renderLoading,
  renderCard,
  openImagePopup,
  submitAvatar,
  handleSubmitCard,
  handleSubmitProfile
} from "../components/card";

import { popupOpen, popupClose, formSubmitHandler } from "../components/modal";
import {
  showInputError,
  hideInputError,
  enableValidation,
  settings
} from "../components/validate";

import {
  editProfileIcon,
  addCardIcon,
  popupProfileCloseIcon,
  popupCardsCloseIcon,
  popupImageZoomCloseIcon,
  popupProfile,
  popupCards,
  popupImageZoom,
  popupAvatar,
  popupAvatarEdit,
  inputAvatar,
  profile__avatar,
  buttonAvatarEdit,
  popupEditAvatar,
  popupFormAvatar,
  submitPopupButton,
  linkInputAvatar,
  profileName,
  profileStatus,
  avatarImage,
  nameInput,
  descriptionInput,
  submitAvatarButton,
  profileAvatar,
  linkAvatarInput
} from "../components/constants";

import {
  getUser,
  getCards,
  editProfileInfo,
  addNewCard,
  editAvatar,
  deleteCard,
  addLike,
  deleteLike,
} from "../components/api";

editProfileIcon.addEventListener("click", () => popupOpen(popupProfile));

addCardIcon.addEventListener("click", () => popupOpen(popupCards));

popupProfile.addEventListener("submit", formSubmitHandler);

buttonAvatarEdit.addEventListener("click", () => popupOpen(popupEditAvatar));

document.getElementById("card_form").addEventListener("click", handleSubmitCard)

document.getElementById("popup_profile-form").addEventListener('submit', handleSubmitProfile);

window.onload = function(){
    popupFormAvatar.addEventListener("submit", function (evt) {
      evt.preventDefault();
      renderLoading(true, submitPopupButton);
      editAvatar(linkAvatarInput.value)
        .then((res) => {
          document.getElementById("avatar").src = res.avatar;
          evt.target.reset();
          popupClose(popupEditAvatar);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          renderLoading(false, submitPopupButton);
        });
    });
    
  };


Promise.all([getUser(), getCards()])
  .then(([userData, cardsData]) => {
    profileName.id = userData._id;
    profileName.textContent = userData.name;
    profileStatus.textContent = userData.about;
    document.getElementById("avatar").src = userData.avatar;
    nameInput.value = userData.name;
    descriptionInput.value = userData.about;
    cardsData.reverse().forEach(renderCard);
  })
  .catch((err) => {
    console.log(err);
  });


enableValidation(settings);
