const STORAGE_KEY = 'favoritesExercises';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveFavorites(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addToFavorites(exercise) {
  const favorites = getFavorites();

  const exists = favorites.some(item => item.id === exercise.id);
  if (exists) return;

  favorites.push(exercise);
  saveFavorites(favorites);
}

export function removeFromFavorites(id) {
  const favorites = getFavorites().filter(item => item.id !== id);
  saveFavorites(favorites);
}
