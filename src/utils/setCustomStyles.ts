import { Dimensions } from 'react-native';

const MIN_WIDTH = 484;
const MIN_HEIGHT = 800;

export const useStyles = () => {
  const { width, height } = Dimensions.get('window');

  const setWidth = (dpi: number) => {
    if (width >= MIN_WIDTH) {
      return dpi;
    }

    return dpi / (MIN_WIDTH / width);
  };

  const setWidthPercentage = (percentage: number) => {
    return (percentage / 100) * width;
  };

  const setHeight = (percentage: number) => {
    if (height >= MIN_HEIGHT) {
      return percentage;
    }

    return percentage / (MIN_HEIGHT / height);
  };

  const setHeightPercentage = (percentage: number) => {
    return (percentage / 100) * height;
  };

  return {
    setWidth,
    setWidthPercentage,
    setHeight,
    setHeightPercentage,
  };
};
