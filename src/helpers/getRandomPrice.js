export const getRandomPrice = (min = 1, max = 500) => {
  return Math.floor(min + (max + 1 - min) * Math.random());
};
