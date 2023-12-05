import React, { useEffect, useRef, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import { useProducts } from '../../hooks/useProducts';
import { FormikTextInput, StyledText } from '../../components';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import SearchIcon from '../../assets/base/icons/search_icon';
import { Product } from '../../types/Product.types';
import { useStyles } from '../../utils';
import { getStyles } from './ProductList.styles';

export const ProductList = ({ navigation, route }: any) => {
  const { setWidth } = useStyles();
  const styles = getStyles();
  const { productsList } = useProducts();
  const [products, setProducts] = useState<Product[]>([]);
  const search = route?.params?.values?.search;
  const isFirstLoad = useRef<boolean>(true);

  const handleNewSearch = (text: any) => {
    // Keyboard.dismiss();
    if (text.search === '') {
      return setProducts(productsList);
    }
    setProducts(productsList.filter((product) => product.name.includes(text.search)));
  };

  useEffect(() => {
    if (search && isFirstLoad) {
      isFirstLoad.current = false;
      setProducts(productsList.filter((product) => product.name.includes(search)));
    } else if (isFirstLoad) {
      setProducts(productsList);
    }
  }, [productsList]);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <StyledText color="white" variant="h4" children="Products" />
        <StyledText
          color="white"
          variant="h2"
          children="Featured Products"
          style={{ marginBottom: 25 }}
        />
        <Formik
          initialValues={{ search: search }}
          onSubmit={(values: any) => handleNewSearch(values)}
        >
          {({ handleSubmit }) => {
            return (
              <FormikTextInput
                leftIcon={
                  <TouchableOpacity onPress={() => handleSubmit()}>
                    <SearchIcon />
                  </TouchableOpacity>
                }
                name="search"
                placeholder="Search"
                onChange={() => handleSubmit()}
              />
            );
          }}
        </Formik>
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={products}
          contentContainerStyle={styles.list}
          numColumns={2}
          renderItem={({ item, index }) => (
            <ProductCardItem key={index} product={item} navigation={navigation} />
          )}
          ListEmptyComponent={
            <StyledText variant="h4" style={{ paddingLeft: 10 }}>
              No products available
            </StyledText>
          }
          columnWrapperStyle={{
            gap: setWidth(15),
          }}
        />
      </View>
    </View>
  );
};
