function PopupWithForm({ popupName, title, children, isOpen, onClose, buttonText }) {
  return (
    <div
      className={`popup popup_for_${popupName} ${isOpen && 'popup_visible'}`}
      onClick={(evt) => {
        if (evt.target.classList.contains('popup_visible')) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <button className="popup__close-btn" onClick={onClose} aria-label="Закрытие формы" type="button"></button>
        <form className="form form_for_edit-author" onSubmit={onClose} name={popupName} noValidate>
          <h2 className="form__title">{title}</h2>
          {children}
          <button className="form__submit form__submit_inactive" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
