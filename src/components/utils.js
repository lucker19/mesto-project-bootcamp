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