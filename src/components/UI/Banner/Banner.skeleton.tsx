import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';
import React from 'react';

export const BannerSkeleton = () => {
  return (
    <MotiView
      transition={{
        type: 'timing',
      }}
      animate={{ backgroundColor: '#ffffff' }}
    >
      <Skeleton colorMode="light" width={250} />
    </MotiView>
  );
};
