import React from 'react';
import { View, Pressable } from 'react-native';
import { StyledText } from '..';
import { FormInput } from '../FormControls/FormInput.component';
import { getStyles } from './AddAdressForm.styles';

type Props = {
  handleSubmit: any;
  handleOnSubmitUpdateAddress: any;
  errors: any;
  control: any;
};

export const AddAdressForm: React.FC<Props> = ({
  handleSubmit,
  handleOnSubmitUpdateAddress,
  errors,
  control,
}) => {
  const styles = getStyles();

  return (
    <View style={styles.buttonsWrapper}>
      <FormInput
        name="firstname"
        control={control}
        errors={errors}
        rules={{
          required: 'Firstname is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'Firstname must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Firstname"
      />
      <FormInput
        name="lastname"
        control={control}
        errors={errors}
        rules={{
          required: 'Lastname is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'Lastname must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Lastname"
      />
      <FormInput
        name="region"
        control={control}
        errors={errors}
        rules={{
          required: 'City is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'City must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="City"
      />
      <FormInput
        name="postcode"
        control={control}
        errors={errors}
        rules={{
          required: 'Postcode is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'Postcode must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Postcode"
      />
      <FormInput
        name="street"
        control={control}
        errors={errors}
        rules={{
          required: 'Street is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,30}$/,
            message:
              'Street must be between 3 and 30 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Street"
      />
      <FormInput
        name="telephone"
        control={control}
        errors={errors}
        rules={{
          required: 'Telephone is required',
          pattern: {
            value: /^\d{8}$/,
            message: 'Telephone must consist of exactly 8 numeric digits.',
          },
        }}
        style={styles.input}
        placeholder="Telephone"
      />
      <Pressable onPress={handleSubmit(handleOnSubmitUpdateAddress)} style={styles.updateBtn}>
        <StyledText color="white" weight="bold">
          Update
        </StyledText>
      </Pressable>
    </View>
  );
};
