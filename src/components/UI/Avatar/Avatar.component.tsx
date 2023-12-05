import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { getStyles } from './Avatar.styles';
import { avatarImage } from '../../../assets';

type Props = {
  img?: ImageSourcePropType;
  big?: boolean;
};

export const Avatar: React.FC<Props> = ({ img = avatarImage, big }) => {
  const styles = getStyles({ big });

  return <Image style={styles.avatar} source={img} />;
};
