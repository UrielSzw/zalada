import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { StyledText } from '../UI/StyledText/StyledText';
import { MoreVertical, StarFilledIcon } from '../../assets';
import { Product } from '../../types/Product.types';
import { PATHS } from '../../routes/paths';
import { getStyles } from './ProductCardItem.styles';

type Props = {
  navigation?: any;
  product: Product;
  customStyles?: any;
};

const ProductCardItem: React.FC<Props> = ({ product, navigation, customStyles }) => {
  const styles = getStyles();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PATHS.PDP, { productId: product.productId });
      }}
      activeOpacity={1}
      style={[styles.container, customStyles]}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: product.overview[0] }} />
      </View>

      <StyledText numberOfLines={2} ellipsizeMode="tail" style={styles.productTitle}>
        {product.name}
      </StyledText>

      <StyledText h4 style={styles.price}>{`USD ${product.price}`}</StyledText>

      <View style={styles.bottomContainer}>
        <StarFilledIcon readOnly />
        <StyledText style={styles.ratingNumber}>4.2</StyledText>
        <StyledText style={styles.qtyReviewsStyle}>342 Reviews</StyledText>

        <View style={styles.iconWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(PATHS.PDP, { productId: product.productId });
            }}
          >
            <MoreVertical />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardItem;
