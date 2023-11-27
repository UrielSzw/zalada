import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, StyledText } from '../../components';
import { resetCart } from '../../redux/cart.slice';
import { useCart } from '../../hooks/useCart';
import ProductCartItem from '../../components/CartItem/ProductCartItem.component';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { PATHS } from '../../routes/paths';
import { styles } from './Cart.styles';

export const Cart = ({ route, navigation }: any) => {
  const [underlineButton, setUnderlineButton] = useState<string>('Cash');
  const [showSuccesModal, setshowSuccessModal] = useState<boolean>(false);

  const { isCart } = route.params;
  const { cartItems, totalItems, totalPrice } = useCart();

  const dispatch = useDispatch();

  const closeModal = () => {
    setshowSuccessModal(!showSuccesModal);
    // dispatch order here
    dispatch(resetCart());
    navigation.navigate(PATHS.HOME);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.productList}
        contentContainerStyle={{ gap: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {cartItems.length ? (
          cartItems.map((cartItem, index) => (
            <ProductCartItem key={index} cartItem={cartItem} readOnly={!isCart} />
          ))
        ) : (
          <StyledText children="There are no products yet" />
        )}
      </ScrollView>
      {!isCart && underlineButton !== undefined ? (
        <ScrollView style={styles.payment}>
          <StyledText variant="h4" children="Payment method" style={{ marginBottom: 18 }} />
          <View style={styles.paymentData}>
            {['Cash', 'Agree with the seller'].map((text, index) => (
              <Button
                tapbar
                underline={underlineButton === text}
                onPress={() => setUnderlineButton(text)}
                text={text}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <></>
      )}
      <View style={styles.info}>
        <StyledText color="gray30" weight="bold" children={`Total ${totalItems} items`} />
        <StyledText variant="h4" children={`USD ${totalPrice}`} />
      </View>

      <View style={styles.button}>
        {isCart ? (
          <Button
            onPress={() => navigation.navigate(PATHS.CHECKOUT)}
            text="Proceed to Checkout"
            primary
            big
            arrowIcon
            {...(!cartItems.length && { disabled: true })}
          />
        ) : (
          <Button
            onPress={() => setshowSuccessModal(!showSuccesModal)}
            text="BUY"
            primary
            big
            {...(!cartItems.length && { disabled: true })}
          />
        )}
      </View>
      <ConfirmModal
        show={showSuccesModal}
        onPressPositive={closeModal}
        title="Success!"
        message="Your order has been placed successfully."
      />
    </View>
  );
};
