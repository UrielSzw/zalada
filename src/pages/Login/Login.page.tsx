import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import * as yup from 'yup';
import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginForm } from '../../components';
import { PATHS } from '../../routes/paths';
import { apiDispatch } from '../../service/api.middleware';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { FormDataLogin } from '../../types';
import { login } from '../../service/api.service';
import { queryKeys } from '../../common/constants/queryKeys';
import { setUserData } from '../../redux/user.slice';
import { useAppDispatch } from '../../redux/hook';
import { getStyles } from './Login.styles';
import { Controller, useForm } from 'react-hook-form';
import { StyledInput } from '../../components/UI/StyledInput/StyledInput.component';

export const loginValidationSchena = yup.object().shape({
  username: yup
    .string()
    .email()
    .min(5, 'Too short!')
    .max(320, 'Too long!')
    .required('Email is required'),
  password: yup.string().min(5, 'Too short!').max(30, 'Too long!').required('Password is required'),
});

const initialValues: FormDataLogin = {
  username: '',
  password: '',
};

interface BodyType {
  body: FormDataLogin;
}

export const Login = ({ navigation, route }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();
  const [triggerValidation, settriggerValidation] = useState(false);
  const [showSuccesModal, setshowSuccessModal] = useState(false);
  const { height } = Dimensions.get('window');
  const styles = getStyles({ height });

  const { mutate } = useMutation({
    mutationKey: [queryKeys.login],
    mutationFn: (args: BodyType) => apiDispatch(login, args),
    onSuccess: (result) => {
      apiDispatch(handleUserLogin, result);
    },
  });

  const handleUserLogin = async (apiResponse: AxiosResponse<any, any>) => {
    if (apiResponse) {
      const loggedUser = apiResponse?.data?.user;
      await AsyncStorage.setItem('userData', JSON.stringify(loggedUser));
      dispatch(setUserData(loggedUser));
      navigation.navigate(PATHS.HOME);
    }
  };

  const handleOnSubmitLogin = (values: FormDataLogin) => {
    mutate({ body: values });
  };

  useEffect(() => {
    if (route.params?.success) setshowSuccessModal(true);
  }, [route.params]);

  return (
    <View style={styles.loginWrapper}>
      <KeyboardAvoidingView behavior="height" style={styles.form} keyboardVerticalOffset={-200}>
        <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.form}>
          <LoginForm
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            settriggerValidation={settriggerValidation}
            navigation={navigation}
            handleOnSubmitLogin={handleOnSubmitLogin}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <ConfirmModal
        show={showSuccesModal}
        onPressPositive={() => setshowSuccessModal(false)}
        title="Success!"
        message="User created successfully."
      />
    </View>
  );
};
