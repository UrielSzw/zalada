import React from 'react';
import { View } from 'react-native';
import { getStyles } from './AddCreditForm.styles';
import { FormInput } from '../FormControls/FormInput.component';
import { StyledText } from '../UI/StyledText/StyledText';
import { Button } from '../UI/Button/Button.component';
import { ArrowIcon } from '../../assets';

type Props = {
  handleSubmit: any;
  errors: any;
  control: any;
};

export const AddCreditCardForm: React.FC<Props> = ({ handleSubmit, errors, control }) => {
  const styles = getStyles();

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <StyledText children="Card Number" />
      <FormInput
        name="cardNumber"
        control={control}
        errors={errors}
        rules={{
          required: 'Card Number is required',
        }}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="number-pad"
      />

      <StyledText style={styles.label} children="Full Name" />
      <FormInput
        name="fullName"
        control={control}
        errors={errors}
        rules={{
          required: 'Full Name is required',
        }}
        style={styles.input}
        autoCapitalize="none"
      />
      <StyledText
        size="sm"
        color="gray40"
        style={{ marginTop: 3 }}
        children="As printed on the card."
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 24,
        }}
      >
        <View style={{ width: '48%' }}>
          <StyledText children="Expiration date" />
          <FormInput
            name="expirationDate"
            control={control}
            errors={errors}
            rules={{
              required: 'Expiration Date is required',
            }}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="number-pad"
          />
          <StyledText size="sm" color="gray40" style={{ marginTop: 3 }} children="Month / Year" />
        </View>
        <View style={{ width: '48%' }}>
          <StyledText children="Security code" />
          <FormInput
            name="securityCode"
            control={control}
            errors={errors}
            rules={{
              required: 'Security Code is required',
            }}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="number-pad"
          />
          <StyledText size="sm" color="gray40" style={{ marginTop: 3 }} children="CVV" />
        </View>
      </View>
      <StyledText children="Social Security Number" style={styles.label} />
      <FormInput
        name="socialSecurity"
        control={control}
        errors={errors}
        rules={{
          required: 'Social Security Number is required',
        }}
        style={styles.input}
        autoCapitalize="none"
        keyboardType="number-pad"
      />
      <Button
        style={{ marginTop: 32 }}
        onPress={handleSubmit}
        text="Confirm Credit Card"
        big
        iconRight={<ArrowIcon />}
      />
    </View>
  );
};
