import '../index.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={() => setIsEditProfilePopupOpen(true)}
        onAddPlace={() => setIsAddPlacePopupOpen(true)}
        onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
        onCard={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        popupName="edit-author"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="form__input form__input_info_name-author"
          name="name"
          id="name-author-input"
          placeholder="Имя автора"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error name-author-input-error"></span>
        <input
          className="form__input form__input_info_name-author-job"
          name="about"
          id="name-author-job-input"
          placeholder="Профессия автора"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error name-author-job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        popupName="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          name="name"
          className="form__input form__input_info_name-card"
          id="name-card-input"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error name-card-input-error"></span>
        <input
          name="link"
          className="form__input form__input_info_link-img"
          id="link-img-input"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="form__input-error link-img-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        popupName="edit-avatar"
        title="Обновить ватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          className="form__input"
          name="link"
          placeholder="Ссылка на аватар"
          id="link-avatar-input"
          type="url"
          required
        />
        <span className="form__input-error link-avatar-input-error"></span>
      </PopupWithForm>
      <PopupWithForm popupName="remove-card" title="Вы уверены?" buttonText='Да'></PopupWithForm>
      <ImagePopup popupName="scale-image" selectedCard={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
    </div>
  );
}

export default App;
