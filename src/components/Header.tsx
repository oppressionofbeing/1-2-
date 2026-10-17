function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#top">📚 Книжная полка</a>
        <nav className="site-header__nav" aria-label="Основная навигация">
          <a href="#reading">Читаю сейчас</a>
          <a href="#reminders">Напоминания</a>
          <a href="#all-books">Все книги</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;