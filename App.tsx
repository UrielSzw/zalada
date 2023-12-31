import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Routes from './src/routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './src/theme';

const App = (): JSX.Element => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Provider store={store}>
          <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.primary }}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Routes />
          </SafeAreaView>
        </Provider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
