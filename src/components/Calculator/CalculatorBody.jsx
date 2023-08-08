import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';

const CalculatorBody = () => {
    const [currentNumbers, setCurrentNumbers] = useState('');
    const [prevNumbers, setPrevNumbers] = useState('');

    const addToCurrent = e => {
        let  num = e.target.value
        if (num === '0' && currentNumbers.length === 0) return;
        setCurrentNumbers((prev) => (prev.concat(num)))
    }

    const deleteHandler = () => {
        setCurrentNumbers(prev => prev.slice(0, prev.length - 1))
    }

    const resetHandler = () => {
        setCurrentNumbers('')
        setPrevNumbers('')
    }
    
    useEffect(() => {
        
        console.log(currentNumbers)
    }, [currentNumbers])
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
          <Button variant="number">+</Button>
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
