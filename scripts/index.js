let page = document.querySelector(".page");
let popup = page.querySelector(".popup");
let editButton = page.querySelector(".profile__edit-button");
let closeButton = page.querySelector(".popup__close-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openEditProfilePopup(evt) {
  evt.preventDefault();
  openPopup(popup);
}

function closeEditProfilePopup(evt) {
  evt.preventDefault();
  closePopup(popup);
}

editButton.addEventListener("click", openEditProfilePopup);
closeButton.addEventListener("click", closeEditProfilePopup);

let formElement = page.querySelector('.popup__form')
let formInputs = formElement.querySelectorAll('input');
let nameInput = formInputs[0];
let jobInput = formInputs[1];

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    page.querySelector('.profile__title').textContent = nameInput.value;
    page.querySelector('.profile__subtitle').textContent = jobInput.value;
    closeEditProfilePopup(evt);
}

formElement.addEventListener('submit', handleFormSubmit);
