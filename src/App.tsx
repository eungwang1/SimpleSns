import Router from '@pages/Router';
import { store } from '@store/configureStore';
import Globalstyles from './GlobalStyles';
import { Provider } from 'react-redux';
import theme from './theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Globalstyles />
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
