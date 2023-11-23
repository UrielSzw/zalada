import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { StyledText } from '../UI/StyledText/StyledText';
import { MinusIcon, PlusIcon, TrashIcon } from '../../assets';
import { useAppDispatch } from '../../redux/hook';
import {
  CartItem,
  decrementItemQty,
  incrementItemQty,
  removeItemFromCart,
  setItemMaxQty,
} from '../../redux/cart.slice';
import { styles } from '../../common/styles/Product.styles';

type Props = {
  cartItem: CartItem;
  readOnly?: boolean;
};

const ProductCartItem: React.FC<Props> = ({ cartItem, readOnly }) => {
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    if (cartItem.quantity <= 1) {
      dispatch(removeItemFromCart(cartItem));
    }
    dispatch(decrementItemQty(cartItem));
  };

  const handleIncrement = () => {
    if (cartItem.quantity >= cartItem.stock) return;
    dispatch(incrementItemQty(cartItem));
  };

  useEffect(() => {
    if (cartItem.quantity > cartItem.stock) {
      dispatch(setItemMaxQty(cartItem));
    }
  }, [cartItem.quantity]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: cartItem?.img }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText h4 numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {cartItem?.name}
        </StyledText>
        <StyledText style={styles.priceNumber}>{`USD ${cartItem?.price}`}</StyledText>

        <View style={styles.bottomContainer}>
          {!readOnly ? (
            <>
              <TouchableOpacity style={styles.amountButton} onPress={handleDecrement}>
                <MinusIcon />
              </TouchableOpacity>
              <StyledText h4 style={styles.amountNumber}>
                {cartItem.quantity}
              </StyledText>
              <TouchableOpacity
                style={{
                  ...styles.amountButton,
                  opacity: cartItem.quantity === cartItem.stock ? 0.5 : 1,
                }}
                onPress={handleIncrement}
                disabled={cartItem.quantity === cartItem.stock}
              >
                <PlusIcon />
              </TouchableOpacity>
            </>
          ) : (
            <StyledText h4>{cartItem.quantity}</StyledText>
          )}
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => dispatch(removeItemFromCart(cartItem))}>
              <TrashIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCartItem;
