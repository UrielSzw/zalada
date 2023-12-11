import React from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { Button, FormikTextInput, StyledText } from '../';
import { theme } from '../../theme';
import { PATHS } from '../../routes/paths';
import { getStyles } from './LoginForm.styles';
import { DipCoreLogo } from '../../assets';
import { Controller, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import { StyledInput } from '../UI/StyledInput/StyledInput.component';
import { FormDataLogin } from '../../types';

type Props = {
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  handleOnSubmitLogin: any;
  errors: any;
  control: any;
  settriggerValidation: (flag: boolean) => void;
  navigation: any;
};

export const LoginForm: React.FC<Props> = ({
  handleSubmit,
  handleOnSubmitLogin,
  errors,
  control,
  settriggerValidation,
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
            required: 'El correo electrónico es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo electrónico inválido',
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
            required: 'La contraseña es obligatoria',
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
        <Pressable onPress={() => handleSubmit(handleOnSubmitLogin)} style={styles.logInBtn}>
          <StyledText color="white" weight="bold">
            Log In
          </StyledText>
        </Pressable>
      </View>
    </>
  );
};
