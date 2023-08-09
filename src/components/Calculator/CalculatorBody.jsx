import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

const CalculatorBody = () => {
    const [final, setFinal] = useState();
    const [currentNumbers, setCurrentNumbers] = useState('');
    const [prevNumbers, setPrevNumbers] = useState('');
    const [currentOperator, setCurrentOperator] = useState('');
    // Flag symbolizing if there are two numbers in state to perform an operation on
    const [solvable, setSolvable] = useState(false);

    useEffect(() => {
        let secondNumber = prevNumbers.length > 0 ? true : false;

        if(secondNumber) {
            setSolvable(true);
        }
    }, [prevNumbers])

    const addToCurrent = e => {
        let  num = e.target.value
        // stops 0 from becomming the first number of a string
        if (num === '0' && currentNumbers.length === 0) return;
        // adds the clicked number to the number being used in  the equation 
        setCurrentNumbers((prev) => (prev.concat(num)))
        // if another number is stored in the calculator, then we now have two number inputs
        prevNumbers.length !== 0 ? setSolvable(true) : setSolvable(false)
    }

    const solveEquation = () => {
        let total;
        //  TODO parse numbers
        let operand1 = parseInt(prevNumbers);
        let operand2 = parseInt(currentNumbers)
        console.log(operand1)
        console.log(operand2)

        console.log(currentOperator)
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
                // TODO remainders
                break;
        }
        console.log(total)
        setFinal(total);
        
    }

    // Handler for operator keys
    const operatorHandler = e => {
        let operator = e.target.value
        console.log(operator)
        setCurrentOperator(operator)
        // check if there are two numbers saved in state
        if(!solvable) {
            // first number is done, save to state and reset
            setPrevNumbers(currentNumbers);
            setCurrentNumbers('');
        }

        else 
            solveEquation();
      
    }

    // Handler for delete button
    const deleteHandler = () => {
        setCurrentNumbers(prev => prev.slice(0, prev.length - 1))
    }

    // Handler for reset button
    const resetHandler = () => {
        setCurrentNumbers('')
        setPrevNumbers('')
    }
    
    useEffect(() => {
        
        console.log(currentNumbers)
    }, [currentNumbers])
    
    useEffect(() => {
        
        console.log(prevNumbers)
    }, [prevNumbers])
    
    useEffect(() => {
        
        console.log('final:' + final)
    }, [final])

  return (
    <Container
      sx={{ mt: '2rem', p: '2rem', borderRadius: '10px', backgroundColor: 'veryDarkDesaturatedBlue2', height: '72%' }}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button variant="number" value='7' onClick={addToCurrent}>
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='8' onClick={addToCurrent}>8</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='9' onClick={addToCurrent}>9</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="remove" onClick={deleteHandler} sx={{ minHeight: '100%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px' } }}>
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='4' onClick={addToCurrent}>4</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='5' onClick={addToCurrent}>5</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='6' onClick={addToCurrent}>6</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='+' onClick={operatorHandler}>+</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='1' onClick={addToCurrent}>1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='2' onClick={addToCurrent}>2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='3' onClick={addToCurrent}>3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">-</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" value='0' onClick={addToCurrent}>0</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">/</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">x</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="remove" onClick={resetHandler} sx={{ minHeight: '125%', minWidth: '105%', fontSize: { xs: '20px', lg: '28px' } }}>
            RESET
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="equal" sx={{ minHeight: '125%', minWidth: '105%', fontSize: { xs: '20px', lg: '28px' } }}>
            =
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalculatorBody;
