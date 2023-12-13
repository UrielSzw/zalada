import React, { useEffect, useState } from 'react';
import { Dimensions, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { AddAdressForm } from '../../components';
import { apiDispatch } from '../../service/api.middleware';
import ConfirmModal from '../../components/UI/Modal/ConfirmModal.component';
import { queryKeys } from '../../common/constants/queryKeys';
import { BodyAddAddress, FormAddAddress } from '../../types';
import { getStyles } from './AddAddress.styles';

export const AddAddress = ({ route }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showSuccesModal, setshowSuccessModal] = useState(false);
  const styles = getStyles();

  const { mutate } = useMutation({
    mutationKey: [queryKeys.address],
    mutationFn: (args: BodyAddAddress) => apiDispatch(() => console.log(args), args),
  });

  const handleOnSubmitUpdateAddress = (values: FormAddAddress) => {
    const bodyFormatted = {
      body: {
        defaultShipping: false,
        defaultBilling: false,
        firstname: values.firstname,
        lastname: values.lastname,
        region: {
          regionCode: 'NY',
          region: values.region,
          regionId: '43',
        },
        postcode: values.postcode,
        street: [values.street],
        city: 'Purchase',
        telephone: values.telephone,
        countryId: 'US',
      },
    };
    mutate(bodyFormatted);
  };

  useEffect(() => {
    if (route.params?.success) setshowSuccessModal(true);
  }, [route.params]);

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView behavior="height" style={styles.form} keyboardVerticalOffset={-200}>
        <ScrollView automaticallyAdjustKeyboardInsets contentContainerStyle={styles.form}>
          <AddAdressForm
            handleSubmit={handleSubmit}
            control={control}
            errors={errors}
            handleOnSubmitUpdateAddress={handleOnSubmitUpdateAddress}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <ConfirmModal
        show={showSuccesModal}
        onPressPositive={() => setshowSuccessModal(false)}
        title="Success!"
        message="Address updated successfully."
      />
    </View>
  );
};
