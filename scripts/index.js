const page = document.querySelector(".page");

const popupProfile = page.querySelector(".user-popup");
const popupAddCard = page.querySelector(".card-popup");
const popupImage = page.querySelector(".img-popup");

const galleryContainer = page.querySelector(".gallery");

const editButton = page.querySelector(".profile__edit-button");
const addCardButton = page.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close-button");

const profileName = page.querySelector(".profile__title");
const profileAbout = page.querySelector(".profile__subtitle");
const profileForm = document.forms["profile-form"];
const nameInput = profileForm.elements["name"];
const jobInput = profileForm.elements["about"];

const cardFormElement = document.forms["card-form"];
const cardNameInput = cardFormElement.elements["name"];
const cardLinkInput = cardFormElement.elements["about_link"];

const popupImageItem = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");

const cardTemplate = page.querySelector("#template_card");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openEditUserPopup(evt) {
  evt.preventDefault();
  openPopup(popupProfile);
}

function openAddCardPopup(evt) {
  evt.preventDefault();
  openPopup(popupAddCard);
}

editButton.addEventListener("click", openEditUserPopup);
addCardButton.addEventListener("click", openAddCardPopup);

function handleCloseButtons() {
  closeButtons.forEach((button) => {
    const popup = button.closest(".popup");
    button.addEventListener("click", (evt) => {
      evt.preventDefault();
      closePopup(popup);
    });
  });
}

handleCloseButtons();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupProfile);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

const initialCards = [
  {
    name: "??????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "?????????????????????? ??????????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "??????????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "????????????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "???????????????????????? ??????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "????????????",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function deleteCard(event) {
  event.target.closest(".gallery__item").remove();
}

function likeCard(event) {
  const like = event.target.closest(".gallery__like");
  like.classList.toggle("gallery__like_active");
}

function handleCardClick(name, link) {
  popupImageItem.src = link;
  popupImageItem.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupImage);
}

function createCardElement(name, link) {
  const card = cardTemplate.content.cloneNode(true);

  const cardTitle = card.querySelector(".gallery__title");
  const cardImage = card.querySelector(".gallery__img");

  cardTitle.textContent = name;
  cardImage.alt = name;
  cardImage.src = link;

  const deleteButton = card.querySelector(".gallery__delete");
  deleteButton.addEventListener("click", deleteCard);

  const likeButton = card.querySelector(".gallery__like");
  likeButton.addEventListener("click", likeCard);

  const cardClick = card.querySelector(".gallery__img");
  cardClick.addEventListener("click", () => handleCardClick(name, link));

  return card;
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;
  const card = createCardElement(name, link);
  galleryContainer.prepend(card);
  closePopup(popupAddCard);
  evt.target.reset();
}

cardFormElement.addEventListener("submit", handleAddCardFormSubmit);

function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = createCardElement(item.name, item.link);
    galleryContainer.prepend(card);
  });
}

renderInitialCards();
