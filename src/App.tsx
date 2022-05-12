import Router from '@pages/Router';
import { store } from '@store/configureStore';
import Globalstyles from './GlobalStyles';
import { Provider } from 'react-redux';
import theme from './theme';
import 'react-dropdown/style.css';
import styled, { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Globalstyles />
        <AppLayout>
          <Router />
        </AppLayout>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

const AppLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
