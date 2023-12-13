import React from 'react';
import { View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useQuery } from '@tanstack/react-query';
import { RootState } from '../../redux';
import {
  Banner,
  BannerSkeleton,
  FormikTextInput,
  Loader,
  ProductCardItemSkeleton,
  StyledText,
} from '../../components';
import { PATHS } from '../../routes/paths';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import SearchIcon from '../../assets/base/icons/search_icon';
import { queryKeys } from '../../common/constants/queryKeys';
import { apiDispatch } from '../../service/api.middleware';
import { getProducts } from '../../service/api.service';
import { Product } from '../../types';
import { getStyles } from './HomePage.styles';

export const Home = ({ navigation }: any) => {
  const styles = getStyles();
  const { firstname } = useSelector((state: RootState) => state.appReducer.user);

  const { data: productsListFetched, isLoading } = useQuery({
    queryKey: [queryKeys.product],
    queryFn: () => apiDispatch(getProducts),
  });

  const productsList: Product[] = productsListFetched?.data;

  const handleSearch = (values: any) => {
    navigation.navigate(PATHS.PLP, { values });
  };

  return (
    <>
      <View style={styles.welcomeBox}>
        <StyledText
          color="white"
          variant="h4"
          style={{ marginTop: 20, marginBottom: 4 }}
        >{`Hi, ${firstname}`}</StyledText>
        <StyledText color="white" variant="h2" style={{ marginBottom: 25 }}>
          What are you looking for today?
        </StyledText>
        <Formik initialValues={{ search: '' }} onSubmit={handleSearch}>
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
                style={{ marginBottom: 0 }}
              />
            );
          }}
        </Formik>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Loader isLoading={isLoading} skeleton={<BannerSkeleton />}>
            <FlatList
              horizontal
              style={styles.horizontalScroll}
              showsHorizontalScrollIndicator={false}
              data={productsList}
              renderItem={({ item, index }) => (
                <Banner
                  key={index}
                  product={item}
                  style={styles.sliderItem}
                  navigation={navigation}
                />
              )}
            />
          </Loader>
          <View style={styles.row}>
            <StyledText variant="h4">Featured Products</StyledText>
            <TouchableOpacity>
              <StyledText color="gray40" onPress={() => navigation.navigate(PATHS.PLP)}>
                See All
              </StyledText>
            </TouchableOpacity>
          </View>
          <Loader isLoading={isLoading} skeleton={<ProductCardItemSkeleton.home />}>
            <FlatList
              horizontal
              style={styles.horizontalScroll}
              showsHorizontalScrollIndicator={false}
              data={productsList?.reverse()}
              renderItem={({ item, index }) => (
                <View style={{ padding: 10, paddingLeft: 5 }} key={index}>
                  <ProductCardItem product={item} navigation={navigation} />
                </View>
              )}
            />
          </Loader>
        </View>
      </ScrollView>
    </>
  );
};
