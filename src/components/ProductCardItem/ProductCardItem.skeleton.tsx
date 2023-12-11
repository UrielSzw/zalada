import React from 'react';
import { Skeleton } from '../Skeleton/Skeleton.component';
import { View } from 'react-native';
import { STYLES } from '../../utils';

export const ProductCardItemSkeleton = {
  home: () => (
    <View style={{ flexDirection: 'row' }}>
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
    </View>
  ),
  list: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
      <Skeleton width={STYLES.calcWidthPerc(45)} height={220} borderRadius={5} />
    </View>
  ),
};
