const IS_LOGGED = 'isLogged';

export const getIsLogged = () => {
  return localStorage.getItem(IS_LOGGED);
};

export const setIsLogged = (isLogged) => {
  localStorage.setItem(IS_LOGGED, isLogged);
};
