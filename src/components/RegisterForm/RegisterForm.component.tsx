import React from 'react';
import { View, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { FormikTextInput, StyledText } from '../';
import { PATHS } from '../../routes/paths';
import { getStyles } from './RegisterForm.styles';

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
    <ScrollView>
      <View style={styles.titleWrapper}>
        <StyledText color="white" style={{ fontSize: 51 }}>
          Register
        </StyledText>
      </View>
      <View style={styles.contentWrapper}>
        <FormikTextInput name="firstName" placeholder="First Name" marginBottomError={5} />
        <FormikTextInput name="lastName" placeholder="Last Name" marginBottomError={5} />
        <FormikTextInput
          name="email"
          placeholder="E-mail"
          inputMode="email"
          marginBottomError={5}
        />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
          marginBottomError={5}
        />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FormikTextInput name="region" placeholder="City" marginBottomError={5} />
          <View style={{ width: 20 }} />
          <FormikTextInput name="postCode" placeholder="Postal Code" marginBottomError={5} />
        </View>
        <FormikTextInput name="street" placeholder="Street" marginBottomError={5} />
        <FormikTextInput name="telephone" placeholder="Telephone" marginBottomError={5} />
        <View style={styles.buttonsWrapper}>
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
      </View>
    </ScrollView>
  );
};
