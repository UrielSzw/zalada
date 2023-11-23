import React from 'react';
import { Text, View, TextProps } from 'react-native';
import { styles } from './StyledText.styles';

interface Props extends TextProps {
  primary?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  white?: boolean;
  lineHeightPrimary?: boolean;
  grey?: boolean;
  green?: boolean;
  tapbar?: boolean;
  children: string | number;
  bold?: boolean;
}

export const StyledText: React.FC<Props> = ({
  primary,
  h1,
  h2,
  h3,
  h4,
  white,
  lineHeightPrimary,
  grey,
  green,
  tapbar,
  children,
  bold,
  style = {},
  ...props
}) => {
  const textStyles = [
    styles.default,
    primary && styles.primary,
    bold && styles.bold,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    h4 && styles.h4,
    lineHeightPrimary && styles.lineHeightPrimary,
    grey && styles.grey,
    white && styles.white,
    green && styles.green,
    tapbar && styles.tapbar,
    style,
  ];

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};
