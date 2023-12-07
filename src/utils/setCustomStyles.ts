import { Dimensions } from 'react-native';

const MIN_WIDTH = 484;
const MIN_HEIGHT = 800;
const { width, height } = Dimensions.get('window');

export const STYLES = {
  calcWidth: (dpi: number) => {
    if (width >= MIN_WIDTH) {
      return dpi;
    }
    return dpi / (MIN_WIDTH / width);
  },
  calcWidthPerc: (percentage: number) => {
    return (percentage / 100) * width;
  },
  calcHeight: (percentage: number) => {
    if (height >= MIN_HEIGHT) {
      return percentage;
    }

    return percentage / (MIN_HEIGHT / height);
  },
  calcHeightPerc: (percentage: number) => {
    return (percentage / 100) * height;
  },
};
