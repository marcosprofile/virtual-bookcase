import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Menu />
      </ThemeProvider>
    </div>
  );
}

export default App;
