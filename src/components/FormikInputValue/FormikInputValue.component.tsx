import React from 'react';
import { StyledText, StyledTextInput } from '..';
import { useField } from 'formik';
import { TextInputProps } from 'react-native';

interface FormikInputProps extends TextInputProps {
  name: string;
  leftIcon?: React.ReactElement;
}

export const FormikTextInput: React.FC<FormikInputProps> = ({ name, leftIcon, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        leftIcon={leftIcon ? leftIcon : <></>}
        {...props}
      />

      <StyledText color="error" style={{ marginBottom: 15 }}>
        {meta.error ? meta.error : ''}
      </StyledText>
    </>
  );
};
