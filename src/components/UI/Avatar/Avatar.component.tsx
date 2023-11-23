import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { defaultUser } from '../../../assets';
import { getStyles } from './Avatar.styles';

type Props = {
  img?: ImageSourcePropType;
  big?: boolean;
};

export const Avatar: React.FC<Props> = ({ img = defaultUser, big }) => {
  const styles = getStyles({ big });

  return <Image style={styles.avatar} source={img} />;
};
