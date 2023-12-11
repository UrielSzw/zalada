import React from 'react';
import { View } from 'react-native';
import { Skeleton } from '../../Skeleton/Skeleton.component';
import { STYLES } from '../../../utils';

export const BannerSkeleton = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Skeleton width={STYLES.calcWidthPerc(70)} height={165} borderRadius={5} />
      <Skeleton width={STYLES.calcHeightPerc(70)} height={165} borderRadius={5} />
    </View>
  );
};
