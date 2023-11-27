import React from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { FormikTextInput, StyledText } from '../';
import { PATHS } from '../../routes/paths';
import { getStyles } from '../LoginForm/LoginForm.styles';

type Props = {
  handleSubmit: () => void;
  isValid: boolean;
  settriggerValidation: (flag: boolean) => void;
  navigation: any;
};

export const RegisterForm: React.FC<Props> = ({
  handleSubmit,
  isValid,
  settriggerValidation,
  navigation,
}) => {
  const styles = getStyles();

  return (
    <>
      <View style={styles.titleWrapper}>
        <StyledText color="white" style={{ fontSize: 51 }}>
          Register
        </StyledText>
      </View>
      <View style={styles.buttonsWrapper}>
        <FormikTextInput name="userName" placeholder="Name" />
        <FormikTextInput name="email" placeholder="E-mail" inputMode="email" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
        <View style={styles.signupLink}>
          <StyledText color="white">Already registered? </StyledText>
          <TouchableOpacity>
            <StyledText color="green" onPress={() => navigation.navigate(PATHS.LOGIN)}>
              Sign in here
            </StyledText>
          </TouchableOpacity>
        </View>
        <Pressable
          style={styles.logInBtn}
          onPress={() => {
            console.log(isValid, 'isValid');
            settriggerValidation(true);
            handleSubmit();
          }}
        >
          <StyledText color="white" weight="bold">
            Log In
          </StyledText>
        </Pressable>
      </View>
    </>
  );
};
