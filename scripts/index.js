const page = document.querySelector(".page");

const popupUser = page.querySelector(".user-popup");
const popupAddCard = page.querySelector(".card-popup");

const editButton = page.querySelector(".profile__edit-button");
const addCardButton = page.querySelector(".profile__add-button");

const closeUserButton = popupUser.querySelector(".popup__close-button");
const closeAddCardButton = popupAddCard.querySelector(".popup__close-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openEditUserPopup(evt) {
  evt.preventDefault();
  openPopup(popupUser);
}

function openAddCardPopup(evt) {
  evt.preventDefault();
  openPopup(popupAddCard);
}

function closeEditUserPopup(evt) {
  evt.preventDefault();
  closePopup(popupUser);
}

function closeAddCardPopup(evt) {
  evt.preventDefault();
  closePopup(popupAddCard);
}

editButton.addEventListener("click", openEditUserPopup);
addCardButton.addEventListener("click", openAddCardPopup);
closeUserButton.addEventListener("click", closeEditUserPopup);
closeAddCardButton.addEventListener("click", closeAddCardPopup);

const userFormElement = popupUser.querySelector('.popup__form')
const formInputs = userFormElement.querySelectorAll('input');
const nameInput = userFormElement.querySelector('.popup__input_type_name');
const jobInput = userFormElement.querySelector('.popup__input_type_about');

function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    page.querySelector('.profile__title').textContent = nameInput.value;
    page.querySelector('.profile__subtitle').textContent = jobInput.value;
    closeEditUserPopup(evt);
}

userFormElement.addEventListener('submit', handleProfileFormSubmit);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 
