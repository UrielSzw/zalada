import React, { useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, ImageBackground, ScrollView, View } from 'react-native';
import * as yup from 'yup';
import { loginBackground } from '../../assets';
import { PATHS } from '../../routes/paths';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm.component';
import { commonRegister } from '../../utils/commonRegister';
import { getStyles } from '../Login/Login.styles';

export const registerValidationSchema = yup.object().shape({
  userName: yup.string().min(5, 'Too short!').max(1000, 'Too long!').required('Name is required'),
  email: yup.string().email().required('E-mail is required!'),
  password: yup
    .string()
    .min(3, 'Too short!')
    .max(1000, 'Too long!')
    .required('Password is required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const Register = ({ navigation }: any) => {
  const [triggerValidation, settriggerValidation] = useState(false);

  const { height } = Dimensions.get('window');
  const styles = getStyles({ height });

  const handleRegister = (values: any) => {
    commonRegister(values, () => navigation.navigate(PATHS.LOGIN, { success: true }));
  };

  return (
    <View style={styles.registerWrapper}>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={initialValues}
        onSubmit={handleRegister}
        validateOnChange={triggerValidation}
        validateOnBlur={false}
      >
        {({ handleSubmit, isValid }) => {
          return (
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.form}
              keyboardVerticalOffset={-200}
            >
              <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.form}>
                <RegisterForm
                  handleSubmit={handleSubmit}
                  isValid={isValid}
                  settriggerValidation={settriggerValidation}
                  navigation={navigation}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </View>
  );
};
