import "./index.css";
import "../index.html";
import {
  renderLoading,
  renderCard,
  handleSubmitCard,
  handleSubmitProfile,
  deleteCardServer
} from "../components/card";

import { popupOpen, popupClose, formSubmitHandler } from "../components/modal";
import { enableValidation, settings } from "../components/validate";

import {
  editProfileIcon,
  addCardIcon,
  popupProfile,
  popupCards,
  buttonAvatarEdit,
  popupEditAvatar,
  popupFormAvatar,
  submitPopupButton,
  profileName,
  profileStatus,
  nameInput,
  descriptionInput,
  linkAvatarInput,
  cardDeleteButton
} from "../components/constants";

import { getUser, getCards, editAvatar, deleteCard } from "../components/api";

editProfileIcon.addEventListener("click", () => popupOpen(popupProfile));

addCardIcon.addEventListener("click", () => popupOpen(popupCards));

popupProfile.addEventListener("submit", formSubmitHandler);

buttonAvatarEdit.addEventListener("click", () => popupOpen(popupEditAvatar));

document
  .getElementById("card_submit")
  .addEventListener("click", handleSubmitCard);

document
  .getElementById("popup_profile-form")
  .addEventListener("submit", handleSubmitProfile);
  


  
  
  
  

window.onload = function () {
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




