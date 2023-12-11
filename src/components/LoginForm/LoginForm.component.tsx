import React from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { StyledText } from '../';
import { theme } from '../../theme';
import { PATHS } from '../../routes/paths';
import { DipCoreLogo } from '../../assets';
import { FormInput } from '../FormControls/FormInput.component';
import { getStyles } from './LoginForm.styles';

type Props = {
  handleSubmit: any;
  errors: any;
  control: any;
  navigation: any;
};

export const LoginForm: React.FC<Props> = ({ handleSubmit, errors, control, navigation }) => {
  const styles = getStyles();

  return (
    <>
      <View style={styles.titleWrapper}>
        <DipCoreLogo />
        <StyledText
          numberOfLines={1}
          adjustsFontSizeToFit
          color="white"
          style={{ textAlign: 'center' }}
        >
          Your e-commerce platform
        </StyledText>
      </View>
      <View style={styles.buttonsWrapper}>
        <FormInput
          name="username"
          control={control}
          errors={errors}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email must be a valid format',
            },
          }}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <FormInput
          name="password"
          placeholder="Password"
          control={control}
          errors={errors}
          rules={{
            required: 'Password is required',
          }}
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.signupLink}>
          <StyledText style={{ marginRight: 5 }} color="white">
            Don't have an account?
          </StyledText>
          <TouchableOpacity>
            <StyledText
              style={{ color: theme.colors.green }}
              onPress={() => navigation.navigate(PATHS.REGISTER)}
            >
              Sign Up here
            </StyledText>
          </TouchableOpacity>
        </View>
        <Pressable onPress={handleSubmit} style={styles.logInBtn}>
          <StyledText color="white" weight="bold">
            Log In
          </StyledText>
        </Pressable>
      </View>
    </>
  );
};
