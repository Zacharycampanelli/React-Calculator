import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

const CalculatorBody = () => {
  const [final, setFinal] = useState(0);
  const [currentNumbers, setCurrentNumbers] = useState('');
  const [prevNumbers, setPrevNumbers] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');

  const addToCurrent = (e) => {
    let num = e.target.value;

    // if after htting equal the first key you hit is a number, old input is not needed
    if (final && !currentOperator) {
      setPrevNumbers(null);
      setFinal(null);
    }

    // stops 0 from becomming the first number of a string
    if (num === '0' && currentNumbers.length === 0) return;

    // start new number
    setCurrentNumbers((prev) => prev?.concat(num));
  };

  const parseNumbers = () => {
    let op1 = parseInt(prevNumbers);
    let op2 = parseInt(currentNumbers);
    console.log(op1, op2);
    solveEquation(op1, op2);
  };

  const solveEquation = (operand1, operand2) => {
    if (currentNumbers && !prevNumbers) return;

    let total;

    console.log(currentOperator);
    switch (currentOperator) {
      case '+':
        total = operand1 + operand2;
        break;
      case '-':
        total = operand1 - operand2;
        break;
      case 'x':
        total = operand1 * operand2;
        break;
      case '/':
        total = operand1 / operand2;
        break;
    }
    console.log(total);
    setFinal(total);
    // setPrevNumbers(total);
    setCurrentNumbers('');
  };

  // Handler for operator keys
  const operatorHandler = (e) => {
    let operator = e.target.value;

    // does nothing if no numbers entered
    if (final) {
      setPrevNumbers(final);
      setCurrentOperator(operator);
    }

    if (!currentNumbers && !prevNumbers) return;

    if (prevNumbers && currentNumbers) {
      setCurrentOperator(operator);
      parseNumbers();
    }

    if (!final && !currentOperator && currentNumbers) {
      setPrevNumbers(currentNumbers);
      setCurrentNumbers('');
      setCurrentOperator(operator);
    }
  };

  // Handler for delete button
  const deleteHandler = () => {
    setCurrentNumbers((prev) => prev.slice(0, prev.length - 1));
  };

  // Handler for reset button
  const resetHandler = () => {
    setCurrentNumbers('');
    setPrevNumbers('');
  };

  useEffect(() => {
    console.log(
      'operator: ' + currentOperator,
      '   previous: ' + prevNumbers,
      '   current: ' + currentNumbers,
      '   final: ' + final
    );
  }, [currentNumbers, prevNumbers, final]);

  return (
    <Container
      sx={{ mt: '2rem', p: '2rem', borderRadius: '10px', backgroundColor: 'veryDarkDesaturatedBlue2', height: '72%' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button variant="number" value="7" onClick={addToCurrent}>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="8" onClick={addToCurrent}>
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="9" onClick={addToCurrent}>
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="remove"
            onClick={deleteHandler}
            sx={{ minHeight: '100%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px' } }}
          >
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="4" onClick={addToCurrent}>
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="5" onClick={addToCurrent}>
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="6" onClick={addToCurrent}>
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="+" onClick={operatorHandler}>
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="1" onClick={addToCurrent}>
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="2" onClick={addToCurrent}>
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="3" onClick={addToCurrent}>
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="-" onClick={operatorHandler}>
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="0" onClick={addToCurrent}>
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="/" onClick={operatorHandler}>
            /
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value="x" onClick={operatorHandler}>
            x
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="remove"
            onClick={resetHandler}
            sx={{ minHeight: '125%', minWidth: '105%', fontSize: { xs: '20px', lg: '28px' } }}
          >
            RESET
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="equal"
            onClick={parseNumbers}
            sx={{ minHeight: '125%', minWidth: '105%', fontSize: { xs: '20px', lg: '28px' } }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalculatorBody;
