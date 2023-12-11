import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { StyledText } from '../StyledText/StyledText';
import { theme } from '../../../theme';
import { styles } from './StyledInput.styles';

interface StyledTextInputProp extends TextInputProps {
  error?: any;
  field: any;
  label?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

export const StyledInput: React.FC<StyledTextInputProp> = ({
  field,
  label,
  placeholder,
  secureTextEntry,
  style,
  error,
  keyboardType = 'default',
  rightIcon,
}) => {
  return (
    <View>
      {label && (
        <StyledText size="default" style={{ color: theme.colors.white }}>
          {label}
        </StyledText>
      )}
      <View style={[styles.input, style, { borderColor: error ? 'red' : '#8696BB' }]}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={field?.value}
          onChangeText={field?.onChange}
          placeholderTextColor={theme.colors.gray30}
        />
        {rightIcon && rightIcon}
      </View>
      {error && (
        <StyledText size="default" style={{ color: theme.colors.error }}>
          {error}
        </StyledText>
      )}
    </View>
  );
};
