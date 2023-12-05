import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes';
import { theme } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
          <Routes />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
