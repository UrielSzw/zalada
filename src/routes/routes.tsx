import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  DemoComponents,
  Home,
  Login,
  ProductDetail,
  Cart,
  ProductList,
  Profile,
  Register,
} from '../pages';
import { PATHS } from './paths';
import Header from '../components/Header/Header';
import StatusErrorModal from '../components/UI/Modal/StatusErrorModal.component';
import Spinner from '../components/UI/Spinner/Spinner.component';

const Routes = (): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={PATHS.LOGIN}
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Stack.Screen name={PATHS.HOME} component={Home} />
        <Stack.Screen name={PATHS.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={PATHS.DEMO} component={DemoComponents} />
        <Stack.Screen name={PATHS.CART} component={Cart} initialParams={{ isCart: true }} />
        <Stack.Screen name={PATHS.CHECKOUT} component={Cart} initialParams={{ isCart: false }} />
        <Stack.Screen name={PATHS.PDP} component={ProductDetail} />
        <Stack.Screen name={PATHS.PLP} component={ProductList} />
        <Stack.Screen name={PATHS.PROFILE} component={Profile} />
        <Stack.Screen name={PATHS.REGISTER} component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
      <Spinner />
      <StatusErrorModal />
    </NavigationContainer>
  );
};

export default Routes;
