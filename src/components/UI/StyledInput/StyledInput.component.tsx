import React, { ReactNode } from 'react';
import { DimensionValue, TextInput, TextInputProps, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { theme } from '../../../theme';
import { styles } from './StyledInput.styles';

export interface StyledTextInputProp extends TextInputProps {
  error?: any;
  field?: any;
  label?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  width?: DimensionValue;
}

export const StyledInput: React.FC<StyledTextInputProp> = ({
  field,
  value,
  label,
  style,
  error,
  rightIcon,
  width,
  ...rest
}) => {
  return (
    <View style={{ width: width }}>
      {label && (
        <StyledText size="default" style={{ color: theme.colors.white }}>
          {label}
        </StyledText>
      )}
      <View style={{ marginBottom: 10 }}>
        <View style={[styles.input, style, { borderColor: error ? 'red' : '#8696BB' }]}>
          <TextInput
            value={field?.value}
            onChangeText={field?.onChange}
            placeholderTextColor={theme.colors.gray30}
            style={{ flex: 1 }}
            {...rest}
          />
          {rightIcon && rightIcon}
        </View>
        <StyledText size="default" style={{ color: theme.colors.error }}>
          {error}
        </StyledText>
      </View>
    </View>
  );
};
