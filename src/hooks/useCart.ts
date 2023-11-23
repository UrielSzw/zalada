import { useState, useEffect } from 'react';
import { useAppSelector } from '../redux/hook';

export const useCart = () => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPrice, setPriceItems] = useState<number>(0);

  const { cartItems } = useAppSelector((state) => state.appReducer.cart);

  const getTotalValues = () => {
    let total = 0;
    let price = 0;

    cartItems.forEach((cartItem) => {
      total += cartItem.quantity || 1;
      price += Number(cartItem.price) * (cartItem.quantity || 1);
    });

    setTotalItems(total);
    setPriceItems(price);
  };

  useEffect(() => {
    getTotalValues();
  }, [cartItems]);

  return {
    totalItems,
    totalPrice,
    cartItems,
  };
};
