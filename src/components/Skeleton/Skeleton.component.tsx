import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export const Skeleton = () => {
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

  useEffect(() => {
    startShimmerAnimation();
  }, []);

  const interpolateShimmer = shimmerAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [-100, 200, -100],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.shimmer, { marginLeft: interpolateShimmer }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 150,
    backgroundColor: '#E4E3E3',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginLeft: 20,
  },
  shimmer: {
    backgroundColor: 'rgba(237, 237, 237, 0.2)',
    width: '50%',
    height: '100%',
  },
});
