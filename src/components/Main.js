import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCard } = props;

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((info) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCards()
      .then((item) => {
        setCards(...cards, item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div className="profile__author-container">
            <h1 className="profile__author">{userName}</h1>
            <button
              className="profile__edit-btn"
              onClick={onEditProfile}
              aria-label="Редактирование профиля"
              type="button"
            ></button>
          </div>
          <p className="profile__author-job">{userDescription}</p>
        </div>
        <button
          className="profile__add-card-btn"
          onClick={onAddPlace}
          aria-label="Добавление карточки"
          type="button"
        ></button>
      </section>
      <section className="elements" aria-label="Карточки с изображениями">
        {cards.map((card) => (
          <Card key={card._id} name={card.name} link={card.link} likesAmount={card.likes.length} onCardClick={onCard} />
        ))}
      </section>
    </main>
  );
}

export default Main;
