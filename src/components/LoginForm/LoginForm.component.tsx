import React from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { Controller } from 'react-hook-form';
import { StyledText } from '../';
import { theme } from '../../theme';
import { PATHS } from '../../routes/paths';
import { DipCoreLogo } from '../../assets';
import { StyledInput } from '../UI/StyledInput/StyledInput.component';
import { getStyles } from './LoginForm.styles';

type Props = {
  handleSubmit: any;
  handleOnSubmitLogin: any;
  errors: any;
  control: any;
  navigation: any;
};

export const LoginForm: React.FC<Props> = ({
  handleSubmit,
  handleOnSubmitLogin,
  errors,
  control,
  navigation,
}) => {
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
        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email must be a valid format',
            },
          }}
          render={({ field }) => (
            <StyledInput
              field={field}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              error={errors.username?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
          }}
          render={({ field }) => (
            <StyledInput
              field={field}
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              error={errors.password?.message}
            />
          )}
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
        <Pressable onPress={handleSubmit(handleOnSubmitLogin)} style={styles.logInBtn}>
          <StyledText color="white" weight="bold">
            Log In
          </StyledText>
        </Pressable>
      </View>
    </>
  );
};
