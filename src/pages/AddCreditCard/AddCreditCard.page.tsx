import React from 'react';
import { View } from 'react-native';
import { AddCreditCardForm } from '../../components/AddCreditCardForm/AddCreditCardForm.component';
import { useForm } from 'react-hook-form';
import { PATHS } from '../../routes/paths';

type Props = {
  navigation: any;
};

export const AddCreditCard: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
    navigation.navigate(PATHS.CHECKOUT);
  };

  return (
    <View style={{ flex: 1 }}>
      <AddCreditCardForm handleSubmit={handleSubmit(onSubmit)} control={control} errors={errors} />
    </View>
  );
};
