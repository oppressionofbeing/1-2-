import type { Book } from '../types/book';

export const TODAY = '2026-10-17';
export const STALLED_AFTER_DAYS = 7;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

export function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(to) - Date.parse(from)) / MS_PER_DAY);
}
export function getProgress(book: Book): number {
  if (book.totalPages <= 0) return 0;
  return Math.min(100, Math.round((book.pagesRead / book.totalPages) * 100));
}
export function getPagesPerDay(book: Book, today: string = TODAY): number {
  if (!book.startedAt || book.pagesRead <= 0) return 0;
  const days = Math.max(1, daysBetween(book.startedAt, today) + 1);
  return book.pagesRead / days;
}
export function getDaysToFinish(book: Book, today: string = TODAY): number | null {
  if (book.status !== 'reading') return null;
  const pace = getPagesPerDay(book, today);
  if (pace <= 0) return null;
  return Math.ceil((book.totalPages - book.pagesRead) / pace);
}
export function getDaysSinceLastRead(book: Book, today: string = TODAY): number | null {
  if (!book.lastReadAt) return null;
  return daysBetween(book.lastReadAt, today);
}
export function isStalled(book: Book, today: string = TODAY): boolean {
  if (book.status !== 'reading') return false;
  const days = getDaysSinceLastRead(book, today);
  return days !== null && days >= STALLED_AFTER_DAYS;
}
export function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  });
}

export interface LibrarySummary {
  totalBooks: number; reading: number; finished: number; pagesRead: number;
}
export function getSummary(books: Book[]): LibrarySummary {
  return books.reduce<LibrarySummary>(
    (acc, book) => ({
      totalBooks: acc.totalBooks + 1,
      reading: acc.reading + (book.status === 'reading' ? 1 : 0),
      finished: acc.finished + (book.status === 'finished' ? 1 : 0),
      pagesRead: acc.pagesRead + book.pagesRead,
    }),
    { totalBooks: 0, reading: 0, finished: 0, pagesRead: 0 },
  );
}