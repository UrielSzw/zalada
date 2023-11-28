import React, { useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, ImageBackground, ScrollView, View } from 'react-native';
import * as yup from 'yup';
import { loginBackground } from '../../assets';
import { PATHS } from '../../routes/paths';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm.component';
import { commonRegister } from '../../utils/commonRegister';
import { getStyles } from './Register.styles';

export const registerValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(5, 'Too short!')
    .max(360, 'Too long!')
    .required('First Name is required'),
  lastName: yup
    .string()
    .min(5, 'Too short!')
    .max(360, 'Too long!')
    .required('Last Name is required'),
  email: yup.string().email().required('E-mail is required!'),
  password: yup
    .string()
    .min(3, 'Too short!')
    .max(360, 'Too long!')
    .required('Password is required'),
  region: yup.string().min(5, 'Too short!').max(360, 'Too long!').required('City is required'),
  postCode: yup.string().max(360, 'Too long!').required('Postal Code is required'),
  street: yup.string().max(360, 'Too long!').required('Postal Code is required'),
  telephone: yup
    .number()
    .min(10, 'Telephone needs at least 10 characters')
    .required('Telephone is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  region: '',
  postCode: '',
  street: '',
  telephone: '',
};

export const Register = ({ navigation }: any) => {
  const [triggerValidation, settriggerValidation] = useState(true);

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
              keyboardVerticalOffset={-220}
            >
              <RegisterForm
                handleSubmit={handleSubmit}
                isValid={isValid}
                settriggerValidation={settriggerValidation}
                navigation={navigation}
              />
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </View>
  );
};
