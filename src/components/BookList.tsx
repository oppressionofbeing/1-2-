import { useState } from 'react';
import type { Book, BookStatus } from '../types/book';
import { GENRE_LABELS, STATUS_LABELS } from '../types/book';
import { getProgress } from '../utils/bookStats';

type StatusFilter = BookStatus | 'all';
const FILTERS: StatusFilter[] = ['all', 'reading', 'planned', 'paused', 'finished'];

function filterLabel(filter: StatusFilter): string {
  return filter === 'all' ? 'Все' : STATUS_LABELS[filter];
}

interface BookListProps {
  books: Book[];
}

function BookList({ books }: BookListProps) {
  const [filter, setFilter] = useState<StatusFilter>('all');

  const visibleBooks =
    filter === 'all' ? books : books.filter((book) => book.status === filter);

  return (
    <>
      <div className="filters">
        {FILTERS.map((item) => (
          <button key={item} type="button"
                  className={item === filter ? 'chip chip--active' : 'chip'}
                  onClick={() => setFilter(item)}>
            {filterLabel(item)}
          </button>
        ))}
      </div>

      <ul className="book-list">
        {visibleBooks.map((book) => (
          <li className="book" key={book.id}>
            <div className="book__main">
              <h3>{book.isFavorite && '★ '}{book.title}</h3>
              <p className="muted">{book.author} · {GENRE_LABELS[book.genre]}</p>
            </div>
            <div className="book__side">
              <span className={`badge badge--${book.status}`}>{STATUS_LABELS[book.status]}</span>
              <span className="muted">{getProgress(book)}%</span>
              {book.rating !== null && <span>{'★'.repeat(book.rating)}</span>}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;