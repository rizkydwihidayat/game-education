const STORAGE_KEY = 'mydaily_player_profile';

export function getPlayerProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to read player profile from localStorage:', err);
    return null;
  }
}

export function savePlayerProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.warn('Failed to save player profile to localStorage:', err);
  }
}

export function clearPlayerProfile() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Failed to clear player profile:', err);
  }
}
