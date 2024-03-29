import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

const CalculatorBody = ({
  final,
  setFinal,
  currentNumbers,
  setCurrentNumbers,
  currentOperator,
  setCurrentOperator,
  prevNumbers,
  setPrevNumbers,
}) => {
  const [hitEqual, setHitEqual] = useState(false);

  const addDecimal = () => {
    if (!currentNumbers.includes('.')) {
      setCurrentNumbers((prev) => prev.concat('.'));
    }
  };

  // When a user selects a number
  const addToCurrent = (e) => {
    let num = e.target.value;

    // The user starts blank after getting an answer
    if (hitEqual) {
      resetHandler();
      setHitEqual(false);
    }

    // If after htting equal the first key you hit is a number, old input is not needed
    if (!currentOperator) {
      setPrevNumbers(final);
      setFinal('');
    }

    // stops 0 from becomming the first number of a string
    if (num === '0' && currentNumbers.length === 0) return;

    // start new number
    setCurrentNumbers((prev) => prev?.concat(num));
  };

  // User hits equal
  const hitEqualKey = () => {
    setHitEqual(true);
    parseNumbers();
  };

  const parseNumbers = () => {
    let op1 = parseFloat(prevNumbers);
    let op2 = parseFloat(currentNumbers);
    console.log(op1, op2);
    solveEquation(op1, op2);
  };

  const solveEquation = (operand1, operand2) => {
    if (!currentNumbers || !prevNumbers) return;

    let total;

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
    setFinal(total.toFixed(5));
    setPrevNumbers(total);
    setCurrentNumbers('');
  };

  // Handler for operator keys
  const operatorHandler = (e) => {
    let operator = e.target.value;

    setHitEqual(false);

    // Does nothing if no numbers entered
    if (!currentNumbers && !prevNumbers) return;

    if (prevNumbers && !currentNumbers) {
      setPrevNumbers(final);
      setCurrentOperator(operator);
    }

    if (!currentOperator && currentNumbers) {
      setPrevNumbers(currentNumbers);
      setCurrentNumbers('');
      setCurrentOperator(operator);
    }

    if (prevNumbers && currentNumbers) {
      setCurrentOperator(operator);
      parseNumbers();
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
    setCurrentOperator('');
    setFinal(0);
  };

  return (
    <Container
      sx={{
        mt: '2rem',
        p: '2rem',
        borderRadius: '10px',
        backgroundColor: 'toggleKeypadBackground',
        minHeight: { xs: '62vh', md: '68vh' },
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mx: '19px', my: '12px' }}>
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
            sx={{
              minHeight: '100%',
              minWidth: '-moz-available',
              minWidth: '-webkit-fill-available',
              minWidth: 'fill-available',
              fontSize: { xs: '20px', lg: '28px' },
              px: '11px',
            }}
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
          <Button variant="number" value="." onClick={addDecimal}>
            .
          </Button>
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
            sx={{ minHeight: '125%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px' } }}
          >
            RESET
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="equal"
            onClick={hitEqualKey}
            sx={{ minHeight: '125%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px' } }}
          >
            =
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalculatorBody;
