function ImagePopup(props) {
  const { name, selectedCard, onClose, isOpen } = props;

  return (
    <div
      className={`popup popup_for_${name} ${isOpen ? 'popup_visible' : ''}`}
      onClick={(evt) => {
        if (evt.target.classList.contains('popup_visible')) {
          onClose();
        }
      }}
    >
      <div className="popup__container">
        <button className="popup__close-btn" onClick={onClose} aria-label="Закрытие формы" type="button"></button>
        <figure className="popup__image-container">
          <img className="popup__image" src={selectedCard.link} alt={selectedCard.name} />
          <figcaption className="popup__image-title">{selectedCard.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
