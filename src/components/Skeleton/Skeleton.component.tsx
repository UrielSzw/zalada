import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  DimensionValue,
  AnimatableNumericValue,
} from 'react-native';

type Props = {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius: AnimatableNumericValue;
};

export const Skeleton: React.FC<Props> = ({ width, height, borderRadius }) => {
  const styles = getStyles({ width, height, borderRadius });
  const shimmerAnimation = new Animated.Value(0);

  const startShimmerAnimation = () => {
    shimmerAnimation.setValue(0);
    Animated.timing(shimmerAnimation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => startShimmerAnimation());
  };

  startShimmerAnimation();
  useEffect(() => {
    startShimmerAnimation();
  }, []);

  const interpolateShimmer = shimmerAnimation.interpolate({
    inputRange: [0, 1, 1.5],
    outputRange: [-250, 200, 0],
  });
  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.shimmer, { marginLeft: interpolateShimmer }]} />
    </View>
  );
};

const getStyles = ({ width, height, borderRadius }: Props) =>
  StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: '#ECEBEB',
      borderRadius,
      overflow: 'hidden',
      marginVertical: 10,
      marginLeft: 20,
    },
    shimmer: {
      backgroundColor: 'rgba(240, 240, 240, 0.45)',
      width: '300%',
      height: '80%',
      transform: [{ rotate: '-60deg' }],
    },
  });
