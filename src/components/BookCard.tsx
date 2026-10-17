import type { Book } from '../types/book';
import { getDaysToFinish, getPagesPerDay, getProgress } from '../utils/bookStats';
import ProgressBar from './ProgressBar';

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const progress = getProgress(book);
  const pace = getPagesPerDay(book);
  const daysLeft = getDaysToFinish(book);

  return (
    <article className="card">
      <h3>{book.title}</h3>
      <p className="muted">{book.author}</p>
      <ProgressBar value={progress} />
      <p>{book.pagesRead} из {book.totalPages} стр. · {progress}%</p>
      <p className="muted">
        {pace > 0 ? `≈ ${Math.round(pace)} стр./день` : 'Скорость пока неизвестна'}
        {daysLeft !== null && ` · до конца ≈ ${daysLeft} дн.`}
      </p>
    </article>
  );
}

export default BookCard;