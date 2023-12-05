import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { styles } from './Button.style';

type ButtonVariants = 'primary' | 'secondary' | 'transparent' | 'tapbar' | 'rounded';

interface Props extends TouchableOpacityProps {
  big?: boolean;
  variant?: ButtonVariants;
  text: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  selected?: boolean;
}

export const Button: React.FC<Props> = ({
  big,
  variant = 'primary',
  text,
  iconLeft,
  iconRight,
  disabled,
  selected,
  style = {},
  ...props
}) => {
  const buttonStyles = [
    styles.default,
    disabled && styles.greyBackground,
    variant && styles[variant],
    variant === 'rounded' && selected && styles.roundedSelected,
    big && styles.big,
    style,
  ];

  const wrapperStyles = [
    variant === 'tapbar' && styles.tapbarWrapper,
    (!!iconLeft || !!iconRight) && { paddingHorizontal: 15 },
  ];

  const textStyles = [
    variant === 'tapbar' && styles.tapbarText,
    variant === 'primary' && { color: 'white' },
    variant === 'rounded' && selected && { color: 'white' },
  ];

  const selectedStyles = [styles.selected, variant === 'tapbar' && selected && styles.visible];

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} style={buttonStyles} {...props}>
      {iconLeft && iconLeft}
      <View style={wrapperStyles}>
        <StyledText style={textStyles}>{text}</StyledText>
        <View style={selectedStyles} />
      </View>
      {iconRight && iconRight}
    </TouchableOpacity>
  );
};
