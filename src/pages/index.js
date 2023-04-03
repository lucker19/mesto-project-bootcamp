import "./index.css";
import "../index.html";
import { renderCard, handleSubmitCard } from "../components/card";
import { renderLoading } from "../components/utils";

import { openPopup, closePopup } from "../components/modal";
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
  cardForm,
  profileForm,
  avatar,
  profileSubmit,
} from "../components/constants";

import { getUser, getCards, editAvatar, editProfile } from "../components/api";

editProfileIcon.addEventListener("click", function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileStatus.textContent;
});

addCardIcon.addEventListener("click", () => openPopup(popupCards));

buttonAvatarEdit.addEventListener("click", () => openPopup(popupEditAvatar));

cardForm.addEventListener("submit", handleSubmitCard);

profileForm.addEventListener("submit", handleSubmitProfile);

window.onload = function () {
  popupFormAvatar.addEventListener("submit", function (evt) {
    evt.preventDefault();
    renderLoading(true, submitPopupButton);
    editAvatar(linkAvatarInput.value)
      .then((res) => {
        avatar.src = res.avatar;
        evt.target.reset();
        closePopup(popupEditAvatar);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        renderLoading(false, submitPopupButton);
      });
  });
};

export function handleSubmitProfile(evt) {
  evt.preventDefault();
  renderLoading(true, profileSubmit);

  const name = nameInput.value;
  const about = descriptionInput.value;

  editProfile(name, about)
    .then((res) => {
      profileName.textContent = res.name;
      profileStatus.textContent = res.about;
      closePopup(popupProfile);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profileSubmit);
    });
}

export function submitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, submitAvatarButton);
  editAvatar(linkAvatarInput.value)
    .then((res) => {
      profileAvatar.link = res.avatarImage;
      closePopup(popupEditAvatar);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => renderLoading(false, submitAvatarButton));
}

Promise.all([getUser(), getCards()])
  .then(([userData, cardsData]) => {
    profileName.id = userData._id;
    profileName.textContent = userData.name;
    profileStatus.textContent = userData.about;
    avatar.src = userData.avatar;
    nameInput.value = userData.name;
    descriptionInput.value = userData.about;
    cardsData.reverse().forEach(renderCard);
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(settings);
