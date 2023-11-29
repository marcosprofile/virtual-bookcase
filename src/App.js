import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';

import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import { FlexContainer } from './styles/Global.styled';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FlexContainer displayFlex height="100vh">
          <Menu />
          <Outlet />
        </FlexContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
