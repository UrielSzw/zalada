import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button, DropdownModal, StyledText } from '../../components';
import { useDispatch } from 'react-redux';
import { PATHS } from '../../routes/paths';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import { CartItem, addItemToCart } from '../../redux/cart.slice';
import { useProduct } from '../../hooks/useProduct';
import { ArrowIcon } from '../../assets';
import { getStyles } from './ProductDetail.styles';

type Props = {
  route: any;
  navigation: any;
};

export const ProductDetail: React.FC<Props> = ({ route, navigation }) => {
  const styles = getStyles();
  const [section, setSection] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const [dropdownValue, setDropdownValue] = useState<string>('1 unit');
  const scrollRef = useRef<any>();

  const dispatch = useDispatch();

  const { productId } = route.params;

  const { currentProduct, suggestedProducts } = useProduct(productId);

  const addToCart = () => {
    const productUnit = Number(dropdownValue.slice(0, 1));

    if (currentProduct && dropdownValue) {
      const productToCart: CartItem = {
        productId: currentProduct.productId,
        name: currentProduct?.name,
        price: currentProduct?.price,
        quantity: productUnit,
        img: currentProduct?.overview[0],
        stock: currentProduct?.stock,
      };
      dispatch(addItemToCart(productToCart));
      navigation.navigate(PATHS.CART);
    }
  };

  useEffect(() => {
    setDropdownValue('1 unit');
  }, [currentProduct]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }, [productId]);

  const overviewSection = () => {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {currentProduct
            ? currentProduct.overview.map((image, index) => (
                <View style={styles.card} key={index}>
                  <Image source={{ uri: image }} style={styles.image} />
                </View>
              ))
            : null}
        </ScrollView>

        <View style={styles.anotherProductContainer}>
          <View style={styles.textBox}>
            <StyledText variant="h4">Recommended Products</StyledText>
            <TouchableOpacity onPress={() => navigation.navigate(PATHS.PLP)}>
              <StyledText>See All</StyledText>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.scrollBox} horizontal showsHorizontalScrollIndicator={false}>
            {suggestedProducts &&
              suggestedProducts.map((product, index) => {
                return (
                  <View style={{ padding: 10 }} key={index}>
                    <ProductCardItem product={product} navigation={navigation} />
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  };

  const featuresSection = () => {
    return (
      <View>
        {currentProduct ? (
          <>
            <StyledText variant="h4" style={{ marginBottom: 13 }}>
              {currentProduct.name}
            </StyledText>
            <StyledText style={{ textAlign: 'justify' }}>{currentProduct.description}</StyledText>
          </>
        ) : (
          <></>
        )}
      </View>
    );
  };

  return currentProduct && suggestedProducts ? (
    <View style={styles.container}>
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <View style={styles.titleTextContainer}>
          <StyledText color="primary" size="md">
            {`USD ${currentProduct?.price}`}
          </StyledText>
          <StyledText variant="h1">{`${currentProduct?.name}`}</StyledText>
        </View>

        <View style={styles.navbar}>
          <Button
            text="Overview"
            variant="tapbar"
            selected={section === 1}
            onPress={() => setSection(1)}
          />
          <Button
            text="Features"
            variant="tapbar"
            selected={section === 2}
            onPress={() => setSection(2)}
          />
          <Button
            text="Specification"
            variant="tapbar"
            selected={section === 3}
            onPress={() => setSection(3)}
          />
        </View>

        {section === 1 ? overviewSection() : featuresSection()}
      </ScrollView>
      <Button
        onPress={() => setVisible(true)}
        text={`Quantity: ${dropdownValue} (${currentProduct.stock} available)`}
        iconRight={<ArrowIcon />}
        variant="secondary"
        style={{ marginTop: 20 }}
      />

      <DropdownModal
        title="Quantity"
        stock={currentProduct.stock}
        visible={visible}
        setVisible={setVisible}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
      />
      <Button onPress={addToCart} text="Add To Cart" big style={styles.btn} />
    </View>
  ) : (
    <></>
  );
};
