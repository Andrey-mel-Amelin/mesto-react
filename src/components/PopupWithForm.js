function PopupWithForm(props) {
  const { name, title, children, isOpen, onClose } = props;

  return (
    <div
      className={`popup popup_for_${name} ${isOpen ? "popup_visible" : ""}`}
      onClick={(evt) => {
        if (evt.target.classList.contains('popup_visible')) {
          onClose();
        }        
      }}>
      <div className="popup__container">
        <button className="popup__close-btn" onClick={onClose} aria-label="Закрытие формы" type="button"></button>
        <form className="form form_for_edit-author" onSubmit={onClose} name={name} noValidate>
          <h2 className="form__title">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
