import type { Book } from '../types/book';

const mockBooks: Book[] = [
  { id: 'dune-01', title: 'Дюна', author: 'Фрэнк Герберт',
    description: 'Читаю по вечерам.\nОчень нравится мир и политика.',
    totalPages: 688, pagesRead: 412, startedAt: '2026-09-20', lastReadAt: '2026-10-16',
    status: 'reading', genre: 'fantasy', isFavorite: true, rating: null },
  { id: 'clean-code-01', title: 'Чистый код', author: 'Роберт Мартин',
    description: 'Читаю главами, делаю заметки по рефакторингу.',
    totalPages: 464, pagesRead: 150, startedAt: '2026-09-01', lastReadAt: '2026-10-03',
    status: 'reading', genre: 'tech', isFavorite: false, rating: null },
  { id: 'thinking-01', title: 'Думай медленно... решай быстро', author: 'Даниэль Канеман',
    description: 'Про когнитивные искажения. Хорошо читается по 20 страниц.',
    totalPages: 656, pagesRead: 160, startedAt: '2026-10-05', lastReadAt: '2026-10-15',
    status: 'reading', genre: 'business', isFavorite: false, rating: null },
  { id: 'sapiens-01', title: 'Sapiens. Краткая история человечества', author: 'Юваль Ной Харари',
    description: 'Отличный обзор истории. Стоит перечитать главу про аграрную революцию.',
    totalPages: 512, pagesRead: 512, startedAt: '2026-08-01', lastReadAt: '2026-09-05',
    status: 'finished', genre: 'history', isFavorite: true, rating: 5 },
  { id: 'atomic-habits-01', title: 'Атомные привычки', author: 'Джеймс Клир',
    description: 'Практичная книга. Понравилась идея «правила двух минут».',
    totalPages: 320, pagesRead: 320, startedAt: '2026-07-01', lastReadAt: '2026-07-20',
    status: 'finished', genre: 'business', isFavorite: false, rating: 4 },
  { id: 'master-01', title: 'Мастер и Маргарита', author: 'Михаил Булгаков',
    description: 'Отложила из-за учёбы, хочу вернуться.',
    totalPages: 480, pagesRead: 210, startedAt: '2026-07-10', lastReadAt: '2026-08-20',
    status: 'paused', genre: 'fiction', isFavorite: true, rating: null },
  { id: 'cosmos-01', title: 'Космос', author: 'Карл Саган',
    description: 'Купила недавно, планирую начать на выходных.',
    totalPages: 432, pagesRead: 0, startedAt: null, lastReadAt: null,
    status: 'planned', genre: 'science', isFavorite: false, rating: null },
];

export function getBooksMock(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockBooks]), 800);
  });
}