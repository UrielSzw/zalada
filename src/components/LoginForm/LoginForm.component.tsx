import React from 'react';
import { View, TouchableOpacity, Pressable } from 'react-native';
import { Button, FormikTextInput, StyledText } from '../';
import { theme } from '../../theme';
import { PATHS } from '../../routes/paths';
import { getStyles } from './LoginForm.styles';
import { DipCoreLogo } from '../../assets';

type Props = {
  handleSubmit: () => void;
  isValid: boolean;
  settriggerValidation: (flag: boolean) => void;
  navigation: any;
};

export const LoginForm: React.FC<Props> = ({
  handleSubmit,
  isValid,
  settriggerValidation,
  navigation,
}) => {
  const styles = getStyles();

  return (
    <>
      <View style={styles.titleWrapper}>
        <DipCoreLogo style={styles.dipCore} />
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
        <FormikTextInput name="username" placeholder="Email" />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
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
        <Pressable
          onPress={() => {
            console.log(isValid, 'isValid');
            settriggerValidation(true);
            handleSubmit();
          }}
          style={styles.logInBtn}
        >
          <StyledText color="white" weight="bold">
            Log In
          </StyledText>
        </Pressable>
      </View>
    </>
  );
};
