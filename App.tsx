import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes';
import { theme } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
