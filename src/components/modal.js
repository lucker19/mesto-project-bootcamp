import {
  popups,
  profileName,
  profileStatus,
  nameInput,
  descriptionInput,
  popupProfile,
} from "./constants";

export const popupOpen = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

export const popupClose = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    popupClose(openedPopup);
  }
}

popups.forEach((popups) =>
  popups.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__button-close")
    ) {
      popupClose(popups);
    }
  })
);

export const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = descriptionInput.value;
  popupClose(popupProfile);
};
