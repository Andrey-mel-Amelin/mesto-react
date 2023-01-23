function Header({ loggedIn, history }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <button className="header__button" type="button">
        {loggedIn ? 'Выйти' : history.location.pathname === '/login' ? 'Регистрация' : 'Войти'}
      </button>
    </header>
  );
}

export default Header;
