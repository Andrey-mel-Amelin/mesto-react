export const selectorsNamesForValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

export const popupForEditAuthor = document.querySelector('.popup_for_edit-author');
export const popupForAddCard = document.querySelector('.popup_for_add-card');
export const popupForScaleImage = document.querySelector('.popup_for_scale-image');
export const popupForRemoveCard = document.querySelector('.popup_for_remove-card');
export const popupForEditAvatar = document.querySelector('.popup_for_edit-avatar');
export const profileEditOpenBtn = document.querySelector('.profile__edit-btn');
export const profileAvatarEdit = document.querySelector('.profile__avatar-container');
export const cardAddOpenBtn = document.querySelector('.profile__add-card-btn');

export const formForEditAuthor = popupForEditAuthor.querySelector('.form_for_edit-author');
export const formForAddCard = popupForAddCard.querySelector('.form_for_add-card');
export const formForEditAvatar = popupForEditAvatar.querySelector('.form_for_edit-avatar');

export const authorProfileInput = document.querySelector('.form__input_info_name-author');
export const authorJobProfileInput = document.querySelector('.form__input_info_name-author-job');