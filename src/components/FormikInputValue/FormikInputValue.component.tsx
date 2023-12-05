import React from 'react';
import { StyledText, StyledTextInput } from '..';
import { useField } from 'formik';
import { TextInputProps, View } from 'react-native';

interface FormikInputProps extends TextInputProps {
  name: string;
  leftIcon?: React.ReactElement;
  marginBottomError?: number;
}

export const FormikTextInput: React.FC<FormikInputProps> = ({
  name,
  leftIcon,
  marginBottomError = 15,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={{ flex: 1 }}>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        leftIcon={leftIcon ? leftIcon : <></>}
        {...props}
      />

      <StyledText color="error" style={{ marginBottom: marginBottomError }}>
        {meta.error ? meta.error : ''}
      </StyledText>
    </View>
  );
};
