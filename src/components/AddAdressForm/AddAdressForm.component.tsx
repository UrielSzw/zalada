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
  navigation: any;
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
          required: 'firstname is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'firstname must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Firstname"
        autoCapitalize="none"
      />
      <FormInput
        name="lastname"
        control={control}
        errors={errors}
        rules={{
          required: 'lastname is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'lastname must be between 3 and 20 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Lastname"
        autoCapitalize="none"
      />
      <FormInput
        name="region"
        control={control}
        errors={errors}
        rules={{
          required: 'city is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'city must be between 3 and 8 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="City"
        autoCapitalize="none"
      />
      <FormInput
        name="postcode"
        control={control}
        errors={errors}
        rules={{
          required: 'postcode is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,20}$/,
            message:
              'postcode must be between 3 and 8 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Postcode"
        autoCapitalize="none"
      />
      <FormInput
        name="street"
        control={control}
        errors={errors}
        rules={{
          required: 'street is required',
          pattern: {
            value: /^[a-zA-Z0-9]{3,30}$/,
            message:
              'postcode must be between 3 and 30 characters long and can only contain letters and numbers.',
          },
        }}
        style={styles.input}
        placeholder="Street"
        autoCapitalize="none"
      />
      <FormInput
        name="telephone"
        control={control}
        errors={errors}
        rules={{
          required: 'telephone is required',
          pattern: {
            value: /^\d{8}$/,
            message: 'telephone must consist of exactly 8 numeric digits.',
          },
        }}
        style={styles.input}
        placeholder="Telephone"
        autoCapitalize="none"
      />
      <Pressable onPress={handleSubmit(handleOnSubmitUpdateAddress)} style={styles.updateBtn}>
        <StyledText color="white" weight="bold">
          Update
        </StyledText>
      </Pressable>
    </View>
  );
};
