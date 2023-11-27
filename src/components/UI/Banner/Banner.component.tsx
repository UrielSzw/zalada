import React from 'react';
import { Image, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { Button } from '../Button/Button.component';
import { Product } from '../../../types/Product.types';
import { PATHS } from '../../../routes/paths';
import { getStyles } from './Banner.styles';

type Props = {
  product: Product;
  small?: boolean;
  navigation: any;
  style?: any;
};

export const Banner: React.FC<Props> = ({ product, small, navigation, style }) => {
  const styles = getStyles();
  return (
    <View style={{ ...styles.cardContainer, ...style }}>
      <View style={styles.productWrapper}>
        <View style={styles.detailsWrapper}>
          <StyledText
            style={{ lineHeight: small ? 22 : 28 }}
            size={small ? 'md' : 'lg'}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {product.name}
          </StyledText>
          <Button
            onPress={() => {
              navigation.navigate(PATHS.PDP, { productId: product.productId });
            }}
            text="Shop Now"
            bannerIcon
          />
        </View>
        <Image
          style={{ resizeMode: 'contain', width: '55%' }}
          source={{
            uri: product.overview[0],
          }}
        />
      </View>
    </View>
  );
};
