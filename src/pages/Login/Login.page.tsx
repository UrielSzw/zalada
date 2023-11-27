import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, ImageBackground, ScrollView, View } from 'react-native';
import * as yup from 'yup';
import { LoginForm } from '../../components';
import { PATHS } from '../../routes/paths';
import { commonLogin } from '../../utils/commonLogin';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { FormData } from '../../utils/commonLogin';
import { getStyles } from './Login.styles';

export const loginValidationSchena = yup.object().shape({
  username: yup
    .string()
    .email()
    .min(5, 'Too short!')
    .max(320, 'Too long!')
    .required('Email is required'),
  password: yup.string().min(5, 'Too short!').max(30, 'Too long!').required('Password is required'),
});

const initialValues: FormData = {
  username: '',
  password: '',
};

export const Login = ({ navigation, route }: any) => {
  const [triggerValidation, settriggerValidation] = useState(false);
  const [showSuccesModal, setshowSuccessModal] = useState(false);
  const { height } = Dimensions.get('window');
  const styles = getStyles({ height });

  const handleLogin = (values: FormData) => {
    commonLogin(values, () => navigation.navigate(PATHS.HOME));
  };

  useEffect(() => {
    if (route.params?.success) setshowSuccessModal(true);
  }, [route.params]);

  return (
    // <ImageBackground source={loginBackground} resizeMode="cover" style={styles.image}>
    <View style={styles.loginWrapper}>
      <Formik
        validationSchema={loginValidationSchena}
        initialValues={initialValues}
        onSubmit={handleLogin}
        validateOnChange={triggerValidation}
        validateOnBlur={false}
      >
        {({ handleSubmit, isValid }) => {
          return (
            <KeyboardAvoidingView
              behavior="height"
              style={styles.form}
              keyboardVerticalOffset={-200}
            >
              <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.form}>
                <LoginForm
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
      <ConfirmModal
        show={showSuccesModal}
        onPressPositive={() => setshowSuccessModal(false)}
        title="Success!"
        message="User created successfully."
      />
    </View>
    // </ImageBackground>
  );
};
