import { getRandomPrice } from '../helpers/getRandomPrice';
import { getRandomPhoto } from '../helpers/getRandomPhoto';

export const loadProductList = async () => {
  let result = null;
  try {
    const res = await fetch(
      'https://random-data-api.com/api/food/random_food?size=30'
    );
    const list = await res.json();
    //сделаем вид, что в ответе сервера сразу есть цена и фото
    result = list.map((el) => ({
      ...el,
      price: getRandomPrice(),
      img: getRandomPhoto(),
    }));
  } catch {
    result = [];
  }
  return result;
};
