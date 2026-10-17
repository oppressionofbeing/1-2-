export type BookStatus = 'planned' | 'reading' | 'paused' | 'finished';
export type BookGenre = 'fiction' | 'fantasy' | 'science' | 'history' | 'business' | 'tech';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;          
  totalPages: number;
  pagesRead: number;
  startedAt: string | null;     
  lastReadAt: string | null;
  status: BookStatus;
  genre: BookGenre;
  isFavorite: boolean;
  rating: number | null;
}

export const STATUS_LABELS: Record<BookStatus, string> = {
  planned: 'В планах', reading: 'Читаю', paused: 'На паузе', finished: 'Прочитана',
};
export const GENRE_LABELS: Record<BookGenre, string> = {
  fiction: 'Проза', fantasy: 'Фантастика и фэнтези', science: 'Научпоп',
  history: 'История', business: 'Бизнес и психология', tech: 'Технологии',
};