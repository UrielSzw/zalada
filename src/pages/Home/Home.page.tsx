import React from 'react';
import { View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { RootState } from '../../redux';
import { Banner, FormikTextInput, StyledText } from '../../components';
import { PATHS } from '../../routes/paths';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem.component';
import { useProducts } from '../../hooks/useProducts';
import SearchIcon from '../../assets/base/icons/search_icon';
import { useShowSpinner } from '../../recoil/spinner/spinner.atom';
import { getStyles } from './HomePage.styles';

export const Home = ({ navigation }: any) => {
  const { width } = Dimensions.get('window');
  const styles = getStyles({ width });

  const showSpinner = useShowSpinner();
  const { firstname, lastname } = useSelector((state: RootState) => state.appReducer.user);

  const { productsList } = useProducts();

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
        >{`Hi, ${firstname} ${lastname}`}</StyledText>
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
          {!showSpinner ? (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              >
                {productsList &&
                  productsList?.map((item, index) => (
                    <Banner
                      key={index}
                      product={item}
                      style={styles.sliderItem}
                      navigation={navigation}
                    />
                  ))}
              </ScrollView>
              <View style={styles.row}>
                <StyledText variant="h4">Featured Products</StyledText>
                <TouchableOpacity>
                  <StyledText color="gray40" onPress={() => navigation.navigate(PATHS.PLP)}>
                    See All
                  </StyledText>
                </TouchableOpacity>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
              >
                {productsList &&
                  productsList.reverse().map((product, index) => (
                    <View style={{ padding: 10, paddingLeft: 5 }} key={index}>
                      <ProductCardItem product={product} navigation={navigation} />
                    </View>
                  ))}
              </ScrollView>
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </>
  );
};
