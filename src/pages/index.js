import "./index.css";
import "../index.html";
import { integrationCard } from "../components/card";

import { popupOpen, popupClose } from "../components/modal";
import { formSubmitHandler,showInputError, hideInputError} from "../components/validate";

import {
  editProfileIcon,
  addCardIcon,
  popupProfileCloseIcon,
  popupCardsCloseIcon,
  popupImageZoomCloseIcon,
  popupProfile,
  popupCards, 
  popupImageZoom,
  initialCards
} from "../components/constants";

editProfileIcon.addEventListener("click", () => popupOpen(popupProfile));

addCardIcon.addEventListener("click", () => popupOpen(popupCards));

popupProfileCloseIcon.addEventListener("click", () => popupClose(popupProfile));

popupCardsCloseIcon.addEventListener("click", () => popupClose(popupCards));

popupImageZoomCloseIcon.addEventListener("click", () =>
  popupClose(popupImageZoom)
);

popupProfile.addEventListener("submit", formSubmitHandler);

popupCards.addEventListener("submit", integrationCard);


