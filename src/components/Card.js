import React from "react";

function Card(props) {
  const { name, link, likesAmount, onCardClick } = props;

  return (
    <article className="element">
      <img className="element__image" onClick={() => onCardClick(props)} src={link} alt="" />
      <button className="element__delete" aria-label="Удалить картинку" type="button"></button>
      <h2 className="element__title">{name}</h2>
      <button className="element__like" aria-label="Мне нравится" type="button"></button>
      <span className="element__like-amount">{likesAmount}</span>
    </article>
  );
}

export default Card;