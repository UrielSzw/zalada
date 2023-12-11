import React from 'react';
import { Controller } from 'react-hook-form';
import { StyledInput, StyledTextInputProp } from '../UI/StyledInput/StyledInput.component';

type Props = StyledTextInputProp & {
  control: any;
  errors: any;
  name: string;
  rules?: any;
};

export const FormInput: React.FC<Props> = ({ control, errors, name, rules, style, ...rest }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => <StyledInput field={field} error={errors[name]?.message} {...rest} />}
    />
  );
};
