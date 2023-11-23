import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './StyledTextInput.styles';
import { theme } from '../../../theme';

interface StyledTextInputProp extends TextInputProps {
  error?: string;
  errorMessage?: string;
  leftIcon?: React.ReactElement;
}

export const StyledTextInput: React.FC<StyledTextInputProp> = ({
  error,
  leftIcon,
  style = {},
  ...props
}) => {
  const inputStyle = [styles.textInput, style, !!error && styles.error];

  return (
    <View style={styles.inputWrapper}>
      {leftIcon ? leftIcon : <></>}
      <TextInput style={inputStyle} {...props} placeholderTextColor={theme.colors.grey} />
    </View>
  );
};
