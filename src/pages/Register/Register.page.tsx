import React, { useState } from 'react';
import { Formik } from 'formik';
import { Dimensions, KeyboardAvoidingView, View } from 'react-native';
import * as yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { FormDataRegister } from '../../types';
import { PATHS } from '../../routes/paths';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm.component';
import { queryKeys } from '../../common/constants/queryKeys';
import { register } from '../../service/api.service';
import { apiDispatch } from '../../service/api.middleware';
import { getStyles } from './Register.styles';

type BodyType = {
  customer: {
    email: string;
    firstname: string;
    lastname: string;
    addresses: {
      defaultShipping: boolean;
      defaultBilling: boolean;
      firstname: string;
      lastname: string;
      region: {
        regionCode: string;
        region: string;
        regionId: string;
      };
      postcode: string;
      street: string[];
      city: string;
      telephone: string;
      countryId: string;
    }[];
  };
  password: string;
};

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

  const { mutate } = useMutation({
    mutationKey: [queryKeys.register],
    mutationFn: (args: BodyType) => apiDispatch(register, args),

    onSuccess: () => navigation.navigate(PATHS.LOGIN, { success: true }),
  });

  const handleRegister = (formData: FormDataRegister) => {
    const body = {
      customer: {
        email: formData.email,
        firstname: formData.firstName,
        lastname: formData.lastName,
        addresses: [
          {
            defaultShipping: true,
            defaultBilling: true,
            firstname: formData.firstName,
            lastname: formData.lastName,
            region: {
              regionCode: 'NY',
              region: formData.region,
              regionId: '43',
            },
            postcode: formData.postCode,
            street: [formData.street],
            city: 'Purchase',
            telephone: formData.telephone,
            countryId: 'US',
          },
        ],
      },
      password: formData.password,
    };

    mutate(body);
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
