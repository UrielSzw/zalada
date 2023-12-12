import React from 'react';
import { Dimensions, KeyboardAvoidingView, View } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
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

export const Register = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = Dimensions.get('window');
  const styles = getStyles({ height });

  const { mutate } = useMutation({
    mutationKey: [queryKeys.register],
    mutationFn: (args: BodyType) => apiDispatch(register, args),

    onSuccess: () => navigation.navigate(PATHS.LOGIN, { success: true }),
  });

  const handleOnSubmitRegister = (formData: any) => {
    const body: BodyType = {
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
      <KeyboardAvoidingView behavior="padding" style={styles.form} keyboardVerticalOffset={-220}>
        <RegisterForm
          handleSubmit={handleSubmit(handleOnSubmitRegister)}
          control={control}
          errors={errors}
          navigation={navigation}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
