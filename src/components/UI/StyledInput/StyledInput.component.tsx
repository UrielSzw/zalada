import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { StyledText } from '../StyledText/StyledText';
import { theme } from '../../../theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './StyledInput.styles';

interface StyledTextInputProp extends TextInputProps {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  field: any;
  label?: string;
}

export const StyledInput: React.FC<StyledTextInputProp> = ({
  field,
  label,
  placeholder,
  secureTextEntry,
  style,
  error,
  keyboardType = 'default',
}) => {
  return (
    <View>
      {label && (
        <StyledText size="default" style={{ color: theme.colors.white }}>
          {label}
        </StyledText>
      )}
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, style, { borderColor: error ? 'red' : '#8696BB' }]}
        placeholder={placeholder}
        value={field?.value}
        onChangeText={field?.onChange}
        placeholderTextColor={theme.colors.gray30}
      />
      {error && (
        <StyledText size="sm" style={{ color: theme.colors.error }}>
          {error.toString()}
        </StyledText>
      )}
    </View>
  );
};
