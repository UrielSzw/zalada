import React from 'react';
import { View, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import { FormikTextInput, StyledText } from '../';
import { theme } from '../../theme';
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
        <StyledText white style={{ fontSize: 51 }}>
          Register
        </StyledText>
      </View>
      <View style={styles.contentWrapper}>
        <FormikTextInput name="firstName" placeholder="First Name" marginBottomError={0} />
        <FormikTextInput name="lastName" placeholder="Last Name" marginBottomError={0} />
        <FormikTextInput
          name="email"
          placeholder="E-mail"
          inputMode="email"
          marginBottomError={0}
        />
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
          marginBottomError={0}
        />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FormikTextInput name="region" placeholder="City" marginBottomError={0} />
          <View style={{ width: 20 }} />
          <FormikTextInput name="postCode" placeholder="Postal Code" marginBottomError={0} />
        </View>
        <FormikTextInput name="street" placeholder="Street" marginBottomError={0} />
        <FormikTextInput name="telephone" placeholder="Telephone" marginBottomError={0} />
        <View style={styles.buttonsWrapper}>
          <View style={styles.signupLink}>
            <StyledText white>Already registered? </StyledText>
            <TouchableOpacity>
              <StyledText
                style={{ color: theme.colors.green }}
                onPress={() => navigation.navigate(PATHS.LOGIN)}
              >
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
            <StyledText white bold>
              Log In
            </StyledText>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
