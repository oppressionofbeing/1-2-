import { useEffect, useState } from 'react';
import type { Book } from '../types/book';
import { getBooksMock } from '../mocks/mockBooks';
import { formatDate, getDaysSinceLastRead, isStalled } from '../utils/bookStats';
import Header from '../components/Header';
import SummaryCards from '../components/SummaryCards';
import BookCard from '../components/BookCard';
import BookList from '../components/BookList';

function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    getBooksMock()
      .then((data) => {
        if (ignore) return;
        setBooks(data);
        setIsLoading(false);
      })
      .catch(() => {
        if (ignore) return;
        setError('Не удалось загрузить книги. Попробуйте обновить страницу.');
        setIsLoading(false);
      });

    return () => { ignore = true; };
  }, []);

  const readingBooks = books.filter((book) => book.status === 'reading');
  const stalledBooks = books.filter((book) => isStalled(book));

  return (
    <div id="top">
      <Header />
      <main className="main">
        <section className="hero">
          <h1>Ваш читательский дневник</h1>
          <p>Следите за прогрессом чтения, скоростью и книгами, к которым пора вернуться. Все книги в одном месте.</p>
        </section>

        {isLoading && <p className="status-message">Загрузка...</p>}
        {error && <p className="status-message status-message--error">{error}</p>}

        {!isLoading && !error && (
          <>
            <SummaryCards books={books} />

            <section id="reading">
              <h2>Читаю сейчас</h2>
              {readingBooks.length === 0 ? (
                <p className="muted">Сейчас вы ничего не читаете.</p>
              ) : (
                <div className="reading-grid">
                  {readingBooks.map((book) => <BookCard key={book.id} book={book} />)}
                </div>
              )}
            </section>

            <section id="reminders">
              <h2>Пора вернуться к чтению</h2>
              {stalledBooks.length === 0 ? (
                <p className="muted">Все книги в процессе читаются регулярно 🎉</p>
              ) : (
                <ul className="alert-list">
                  {stalledBooks.map((book) => (
                    <li key={book.id}>
                      <strong>{book.title}</strong> — не открывали {getDaysSinceLastRead(book)} дн.
                      (последний раз: {formatDate(book.lastReadAt)})
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section id="all-books">
              <h2>Все книги</h2>
              <BookList books={books} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default HomePage;