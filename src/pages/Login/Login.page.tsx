import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import * as yup from 'yup';
import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LoginForm } from '../../components';
import { PATHS } from '../../routes/paths';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { FormData } from '../../utils/commonLogin';
import { login } from '../../service/api.service';
import { queryKeys } from '../../common/constants/queryKeys';
import { setAppError, setLoading } from '../../utils';
import { setUserData } from '../../redux/user.slice';
import { useAppDispatch } from '../../redux/hook';
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
  const dispatch = useAppDispatch();
  const [triggerValidation, settriggerValidation] = useState(false);
  const [showSuccesModal, setshowSuccessModal] = useState(false);
  const { height } = Dimensions.get('window');
  const styles = getStyles({ height });

  const { mutate } = useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: login,
    onMutate: () => {
      setLoading(true);
    },
    onError: (error) => {
      setAppError(error.name, error.message);
    },
    onSuccess: (result) => {
      handleUserLogin(result);
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  const handleUserLogin = async (apiResponse: AxiosResponse<any, any>) => {
    try {
      if (apiResponse) {
        const loggedUser = apiResponse?.data?.data?.user;
        await AsyncStorage.setItem('userData', JSON.stringify(loggedUser));
        dispatch(setUserData(loggedUser));
        navigation.navigate(PATHS.HOME);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleOnSubmitLogin = (values: FormData) => {
    mutate({ body: values });
  };

  useEffect(() => {
    if (route.params?.success) setshowSuccessModal(true);
  }, [route.params]);

  return (
    <View style={styles.loginWrapper}>
      <Formik
        validationSchema={loginValidationSchena}
        initialValues={initialValues}
        onSubmit={handleOnSubmitLogin}
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
  );
};
