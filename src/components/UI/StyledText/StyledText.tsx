import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { theme } from '../../../theme';
import * as StyleTypes from '../../../types/Text.types';
import { styles } from './StyledText.styles';

interface Props extends TextProps {
  size?: StyleTypes.Sizes;
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  color?: StyleTypes.Colors;
  weight?: StyleTypes.FontWeight;
  fontFamily?: StyleTypes.FontFamily;
  underline?: boolean;
  tapbar?: boolean;
  children: string | number;
}

export const StyledText: React.FC<Props> = ({
  size = 'default',
  variant,
  color = 'default',
  weight = 'default',
  fontFamily = 'primary',
  underline,
  tapbar,
  children,
  style = {},
  ...props
}) => {
  const textStyles: StyleProp<TextStyle> = [
    { color: theme.colors[color] },
    { fontSize: theme.fontSize[size] },
    { fontWeight: theme.fontWeight[weight] },
    { fontFamily: theme.fontFamily[fontFamily] },
    { textDecorationLine: underline ? 'underline' : 'none' },
    variant && styles[variant],
    tapbar && styles.tapbar,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
