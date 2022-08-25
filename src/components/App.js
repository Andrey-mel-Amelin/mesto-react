import '../index.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setImagePopupOpen(true)
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
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
        name="edit-author"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
            <button className="form__submit form__submit_inactive" type="submit">
              Сохранить
            </button>
          </>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
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
            <button className="form__submit form__submit_inactive" type="submit">
              Создать
            </button>
          </>
        }
      />
      <PopupWithForm
        name="edit-avatar"
        title="Обновить ватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              className="form__input"
              name="link"
              placeholder="Ссылка на аватар"
              id="link-avatar-input"
              type="url"
              required
            />
            <span className="form__input-error link-avatar-input-error"></span>
            <button className="form__submit form__submit_inactive" type="submit">
              Сохранить
            </button>
          </>
        }
      />
      <PopupWithForm
        name="remove-card"
        title="Вы уверены?"
        children={
          <button className="form__submit" type="submit">
            Да
          </button>
        }
      />
      <ImagePopup
        name="scale-image"
        selectedCard={selectedCard}
        onClose={closeAllPopups}
        isOpen={isImagePopupOpen} />
    </div>
  );
}

export default App;
