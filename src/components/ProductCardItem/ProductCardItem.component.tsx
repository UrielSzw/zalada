import React from 'react';
import { Image, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { StyledText } from '../UI/StyledText/StyledText';
import { MoreVertical, StarFilledIcon } from '../../assets';
import { Product } from '../../types/Product.types';
import { PATHS } from '../../routes/paths';
import { getStyles } from './ProductCardItem.styles';

interface Props extends TouchableOpacityProps {
  navigation?: any;
  product: Product;
}

const ProductCardItem: React.FC<Props> = ({ product, navigation, style, ...rest }) => {
  const styles = getStyles();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PATHS.PDP, { productId: product.productId });
      }}
      activeOpacity={1}
      style={[styles.container, style]}
      {...rest}
    >
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: product.overview[0] }} />
      </View>

      <StyledText numberOfLines={2} ellipsizeMode="tail" style={styles.productTitle}>
        {product.name}
      </StyledText>

      <StyledText size="xs">{`USD ${product.price}`}</StyledText>

      <View style={styles.bottomContainer}>
        <StarFilledIcon readOnly />
        <StyledText size="xs" style={{ marginLeft: 4, marginRight: 8 }}>
          4.2
        </StyledText>
        <StyledText size="xs">342 Reviews</StyledText>

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
