export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};

export const getMoviesCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.movies.length : 0;
};
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};

export const calcTotalPrice = (movies) => {
  const totalPrice = movies.reduce((acc, curr) => {
    if (curr.subPrice === 0) {
      return acc + curr.item.price;
    } else {
      return acc + curr.subPrice;
    }
  }, 0);
  return totalPrice;
};
