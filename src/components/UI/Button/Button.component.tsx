import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { ArrowIcon, BannerIcon, FilterIcon } from '../../../assets';
import { theme } from '../../../theme';
import { styles } from './Button.style';

interface Props extends TouchableOpacityProps {
  text: string;
  primary?: boolean;
  secondary?: boolean;
  big?: boolean;
  rounded?: boolean;
  arrowIcon?: boolean;
  filterIcon?: boolean;
  bannerIcon?: boolean;
  tapbar?: boolean;
  underline?: boolean;
  red?: boolean;
  disabled?: boolean;
  green?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  primary,
  secondary,
  big,
  rounded,
  arrowIcon,
  filterIcon,
  bannerIcon,
  tapbar,
  underline,
  red,
  disabled,
  green,
  style = {},
  ...props
}) => {
  const buttonStyles = [
    styles.default,
    primary && styles.primary,
    secondary && styles.secondary,
    big && styles.big,
    rounded && styles.rounded,
    arrowIcon && styles.icon,
    filterIcon && styles.icon,
    bannerIcon && styles.rounded,
    red && { ...styles.primary, ...styles.redBackground },
    disabled && styles.greyBackground,
    green && { ...styles.primary, ...styles.greenBackground },
    !primary && !rounded && !bannerIcon && !tapbar && styles.secondary,
    style,
  ];

  const textStyles = [
    rounded && { color: theme.colors.gray30 },
    (big || bannerIcon) && { fontSize: theme.fontSize.md },
    (primary || red) && { color: theme.colors.white },
    bannerIcon && { color: theme.colors.green },
  ];

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} style={buttonStyles} {...props}>
      {filterIcon && <FilterIcon />}
      <View style={tapbar && styles.tapbar}>
        <StyledText tapbar={tapbar} lineHeightPrimary style={textStyles} children={text} />
        {underline && <View style={styles.underline} />}
      </View>
      {arrowIcon && <ArrowIcon secondary={secondary} />}
      {bannerIcon && <BannerIcon />}
    </TouchableOpacity>
  );
};
