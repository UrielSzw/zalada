import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { Button, DropdownModal, StyledText } from '../../components';
import { useDispatch } from 'react-redux';
import { PATHS } from '../../routes/paths';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import { CartItem, addItemToCart } from '../../redux/cart.slice';
import { ArrowIcon } from '../../assets';
import { queryKeys } from '../../common/constants/queryKeys';
import { getProductById, getProducts } from '../../service/api.service';
import { Product } from '../../types';
import { apiDispatch } from '../../service/api.middleware';
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

  const { data: currentProductFetched } = useQuery({
    queryKey: [queryKeys.product, productId],
    queryFn: () => apiDispatch(getProductById, productId),
  });

  const { data: suggestedProductsFetched } = useQuery({
    queryKey: [queryKeys.product],
    queryFn: () => apiDispatch(getProducts),
  });

  const currentProduct: Product = currentProductFetched?.data;
  const suggestedProducts: Product[] = suggestedProductsFetched?.data;

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
        <FlatList
          data={currentProduct.overview}
          renderItem={({ item, index }) => (
            <View style={styles.card} key={index}>
              <Image source={{ uri: item }} style={styles.image} />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.anotherProductContainer}>
          <View style={styles.textBox}>
            <StyledText variant="h4">Recommended Products</StyledText>
            <TouchableOpacity onPress={() => navigation.navigate(PATHS.PLP)}>
              <StyledText>See All</StyledText>
            </TouchableOpacity>
          </View>
          <FlatList
            data={suggestedProducts}
            renderItem={({ item, index }) => (
              <View style={{ padding: 10 }} key={index}>
                <ProductCardItem product={item} navigation={navigation} />
              </View>
            )}
            style={styles.scrollBox}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
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
