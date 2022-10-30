export const locallyStore = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const localStorageGet = (key: string) => localStorage.getItem(key);

export const getToken = () => localStorageGet("token");