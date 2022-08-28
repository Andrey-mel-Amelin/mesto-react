function Card({ name, link, likesAmount, onCardClick, card }) {
  return (
    <article className="element">
      <img className="element__image" onClick={() => onCardClick(card)} src={link} alt={name} />
      <button className="element__delete" aria-label="Удалить картинку" type="button"></button>
      <h2 className="element__title">{name}</h2>
      <button className="element__like" aria-label="Мне нравится" type="button"></button>
      <span className="element__like-amount">{likesAmount}</span>
    </article>
  );
}

export default Card;