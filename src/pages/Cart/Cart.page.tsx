import React, { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, StyledText } from '../../components';
import { resetCart } from '../../redux/cart.slice';
import { useCart } from '../../hooks/useCart';
import ProductCartItem from '../../components/CartItem/ProductCartItem.component';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { PATHS } from '../../routes/paths';
import { ArrowIcon } from '../../assets';
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
      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <ProductCartItem cartItem={item} readOnly={!isCart} />}
          keyExtractor={(item) => item.productId}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 30 }}
          style={styles.productList}
          ListEmptyComponent={<StyledText children="There are no products yet" />}
        />
      </View>
      {!isCart && underlineButton !== undefined ? (
        <View style={styles.payment}>
          <StyledText variant="h4" children="Payment method" style={{ marginBottom: 18 }} />
          <View style={styles.paymentData}>
            <FlatList
              numColumns={2}
              data={['Cash', 'Agree with the seller']}
              renderItem={({ item }) => (
                <Button
                  selected={underlineButton === item}
                  variant="tapbar"
                  onPress={() => setUnderlineButton(item)}
                  text={item}
                  key={item}
                />
              )}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 18 }}
            />
          </View>
        </View>
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
            big
            iconRight={<ArrowIcon />}
            {...(!cartItems.length && { disabled: true })}
          />
        ) : (
          <Button
            onPress={() => setshowSuccessModal(!showSuccesModal)}
            text="BUY"
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
