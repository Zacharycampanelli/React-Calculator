import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import CalculatorBody from './components/Calculator/CalculatorBody';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { colorTheme1 } from './assets/themes/theme1.js';
import { colorTheme2 } from './assets/themes/theme2.js';
import { colorTheme3 } from './assets/themes/theme3.js';
import { useLocalStorage } from './useLocalStorage';
// const getInitialThemeChoice = () => {
  
//   let usersThemeChoice = localStorage.getItem('prefers-color-scheme')
//   usersThemeChoice = JSON.parse(usersThemeChoice);
// return usersThemeChoice;
// }
// let initialTheme = getInitialThemeChoice();

function App() {
  const [theme, setTheme] = useLocalStorage("prefers-color-scheme", 'colorTheme1');
  const [final, setFinal] = useState('');
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');
  
 
  // console.log(initialTheme)


  return (
    <ThemeProvider theme={eval(theme)}>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth={false}
        sx={{ height: 'max-content', pb: '2rem', backgroundColor: 'mainBackgroundColor' }}
      >
        <Header theme={theme} setTheme={setTheme} />
        <Display
          final={final}
          currentNumbers={currentNumbers}
          currentOperator={currentOperator}
          prevNumbers={prevNumbers}
        />
        <CalculatorBody
          final={final}
          setFinal={setFinal}
          currentNumbers={currentNumbers}
          setCurrentNumbers={setCurrentNumbers}
          currentOperator={currentOperator}
          setCurrentOperator={setCurrentOperator}
          prevNumbers={prevNumbers}
          setPrevNumbers={setPrevNumbers}
        />
      </Container>{' '}
    </ThemeProvider>
  );
}


export default App;