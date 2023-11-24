import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './StyledText.styles';
import { theme } from '../../../theme';

interface Props extends TextProps {
  size?: 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  color?:
    | 'primary'
    | 'default'
    | 'gray40'
    | 'gray30'
    | 'gray20'
    | 'gray10'
    | 'white'
    | 'error'
    | 'green'
    | 'yellow';
  weight?: 'default' | 'bold' | 'thin';
  fontFamily?: 'primary' | 'secondary';
  underline?: boolean;
  lineHeightPrimary?: boolean;
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
  lineHeightPrimary,
  tapbar,
  children,
  style = {},
  ...props
}) => {
  const textStyles = [
    { color: theme.colors[color] },
    { fontSize: theme.fontSize[size] },
    { fontWeight: theme.fontWeight[weight] },
    { fontFamily: theme.fontFamily[fontFamily] },
    underline && { textDecorationLine: theme.textDecoration.underline },
    variant && styles[variant],
    lineHeightPrimary && styles.lineHeightPrimary,
    tapbar && styles.tapbar,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
