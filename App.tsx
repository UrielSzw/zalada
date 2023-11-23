import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes';
import { theme } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { RecoilRoot } from 'recoil';

const App = (): JSX.Element => {
  return (
    <RecoilRoot>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
          <Routes />
        </SafeAreaView>
      </Provider>
    </RecoilRoot>
  );
};

export default App;
