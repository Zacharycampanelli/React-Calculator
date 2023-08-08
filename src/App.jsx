import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Display from './components/Calculator/Display';
import { useState } from 'react';
import CalculatorBody from './components/Calculator/CalculatorBody';

function App() {

  const [inputDisplay, setInputDisplay] = useState(1156);
  console.log(inputDisplay)
  return (

      <Container maxWidth={false} sx={{ height: "max-content", pb: '2rem', backgroundColor: "veryDarkDesaturatedBlue"}} >
        <Header />
        <Display inputDisplay={inputDisplay}/>
        <CalculatorBody />
      </Container>
  );
}

export default App;
