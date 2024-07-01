// функция для получения данных из хранилища под ключем cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
// функуция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};
//функция totalPrice для вывода общей суммы
// export const calcTotalPrice = (products) => {
//   const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
//   const totalPricePrice = products.reduce(
//     (acc, curr) => acc + curr.item.price,
//     0
//   );
//   return totalPrice == 0 ? totalPricePrice : totalPrice + totalPricePrice;
// };
export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => {
    if (curr.subPrice === 0) {
      return acc + curr.item.price;
    } else {
      return acc + curr.subPrice;
    }
  }, 0);
  return totalPrice;
};
//функция для вывода кол-ва товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.lenght : 0;
};
