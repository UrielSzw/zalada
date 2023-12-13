import React from 'react';
import { View, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { StyledText } from '../';
import { PATHS } from '../../routes/paths';
import { FormInput } from '../FormControls/FormInput.component';
import { STYLES } from '../../utils';
import { getStyles } from './RegisterForm.styles';

type Props = {
  navigation: any;
  handleSubmit: () => void;
  errors: any;
  control: any;
};

export const RegisterForm: React.FC<Props> = ({ handleSubmit, navigation, errors, control }) => {
  const styles = getStyles();

  return (
    <ScrollView>
      <View style={styles.titleWrapper}>
        <StyledText color="white" style={{ fontSize: 51 }}>
          Register
        </StyledText>
      </View>
      <View style={styles.contentWrapper}>
        <FormInput
          name="firstName"
          placeholder="First Name"
          control={control}
          errors={errors}
          rules={{
            required: 'First Name is required',
          }}
          style={styles.spacer}
        />
        <FormInput
          name="lastName"
          placeholder="Last Name"
          control={control}
          errors={errors}
          rules={{
            required: 'Last Name is required',
          }}
          style={styles.spacer}
        />
        <FormInput
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          control={control}
          errors={errors}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email must be a valid format',
            },
          }}
          style={styles.spacer}
        />
        <FormInput
          name="password"
          placeholder="Password"
          control={control}
          errors={errors}
          rules={{
            required: 'Password is required',
          }}
          secureTextEntry
          style={styles.spacer}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <FormInput
            name="region"
            placeholder="City"
            control={control}
            errors={errors}
            rules={{
              required: 'City is required',
            }}
            style={styles.spacer}
            width={'68%'}
          />
          <FormInput
            name="postCode"
            placeholder="Zip Code"
            control={control}
            errors={errors}
            rules={{
              required: 'Zip Code is required',
            }}
            style={styles.spacer}
            width={'28%'}
          />
        </View>
        <FormInput
          name="street"
          placeholder="Street"
          control={control}
          errors={errors}
          rules={{
            required: 'Street is required',
          }}
          style={styles.spacer}
        />
        <FormInput
          name="telephone"
          placeholder="Telephone"
          control={control}
          errors={errors}
          rules={{
            required: 'Telephone is required',
          }}
          style={styles.spacer}
        />
        <View>
          <View style={styles.signupLink}>
            <StyledText color="white">Already registered? </StyledText>
            <TouchableOpacity>
              <StyledText color="green" onPress={() => navigation.navigate(PATHS.LOGIN)}>
                Sign in here
              </StyledText>
            </TouchableOpacity>
          </View>
          <Pressable style={styles.logInBtn} onPress={handleSubmit}>
            <StyledText color="white" weight="bold">
              Register
            </StyledText>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
