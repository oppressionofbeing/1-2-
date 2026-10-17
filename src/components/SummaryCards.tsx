import type { Book } from '../types/book';
import { getSummary } from '../utils/bookStats';

interface SummaryCardsProps {
  books: Book[];
}

function SummaryCards({ books }: SummaryCardsProps) {
  const summary = getSummary(books);

  return (
    <section className="summary" aria-label="Сводка по библиотеке">
      <div className="card">
        <span className="card__value">{summary.totalBooks}</span>
        <span className="card__label">книг в библиотеке</span>
      </div>
      <div className="card">
        <span className="card__value">{summary.reading}</span>
        <span className="card__label">читаю сейчас</span>
      </div>
      <div className="card">
        <span className="card__value">{summary.finished}</span>
        <span className="card__label">прочитано</span>
      </div>
      <div className="card">
        <span className="card__value">{summary.pagesRead}</span>
        <span className="card__label">страниц прочитано</span>
      </div>
    </section>
  );
}

export default SummaryCards;