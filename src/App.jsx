import { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import CalculatorBody from './components/Calculator/CalculatorBody';

function App() {

  const [final, setFinal] = useState('');
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');

  return (

      <Container maxWidth={false} sx={{ height: "max-content", pb: '2rem', backgroundColor: "veryDarkDesaturatedBlue"}} >
        <Header />
        <Display final={final} currentNumbers={currentNumbers} currentOperator={currentOperator} prevNumbers={prevNumbers} />
        <CalculatorBody final={final} setFinal={setFinal} currentNumbers={currentNumbers} setCurrentNumbers={setCurrentNumbers} currentOperator={currentOperator} setCurrentOperator={setCurrentOperator} prevNumbers={prevNumbers} setPrevNumbers={setPrevNumbers} />
      </Container>
  );
}

export default App;
