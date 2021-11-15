export const getRandomPhoto = (min = 1, max = 12) => {
  return `${Math.floor(min + (max + 1 - min) * Math.random())}.webp`;
};
