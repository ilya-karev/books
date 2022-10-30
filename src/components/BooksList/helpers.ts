export const saveSearch = (search: string) => {
  sessionStorage.setItem('search', search);
}

export const getSearch = (): string => {
  return sessionStorage.getItem('search') || '';
}