import { popups } from "./constants";





export const popupOpen = function (popupName) {
  popupName.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileStatus.textContent;
  document.addEventListener("keydown", popupEscClose);
};

export const popupClose = function (popupName) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", popupEscClose);
};

export function popupEscClose(evt) {
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