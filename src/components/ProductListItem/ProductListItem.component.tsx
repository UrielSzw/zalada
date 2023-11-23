import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { StyledText } from '../UI/StyledText/StyledText';
import { MoreVertical, StarFilledIcon } from '../../assets';
import { Product } from '../../types/Product.types';
import { styles } from '../../common/styles/Product.styles';
import { PATHS } from '../../routes/paths';

type Props = {
  product: Product;
  navigation: any;
};

const ProductListItem: React.FC<Props> = ({ product, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(PATHS.PDP, { productId: product.productId });
        }}
        activeOpacity={0.9}
        style={styles.imageContainer}
      >
        <Image style={styles.image} source={{ uri: product?.overview[0] }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <StyledText h4 numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {product?.name}
        </StyledText>
        <StyledText style={styles.priceNumber}>{`USD ${product?.price}`}</StyledText>

        <View style={styles.bottomContainer}>
          <StarFilledIcon readOnly />
          <StyledText style={{ marginRight: 10, marginLeft: 3 }}>4.5</StyledText>
          <StyledText>232 Reviews</StyledText>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(PATHS.PDP, { productId: product.productId });
              }}
            >
              <MoreVertical />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductListItem;
