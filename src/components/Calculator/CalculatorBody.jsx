import { Button, Container, Grid } from '@mui/material';

const CalculatorBody = () => {
  return (
    <Container sx={{ mt: '2rem',  p: '2rem', borderRadius: '10px', backgroundColor: 'veryDarkDesaturatedBlue2', height: '72%'}}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button variant="number" sx={{}}>7</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">8</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >9</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='remove' sx={{ minHeight: '100%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px'}}}>DEL</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >4</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >5</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >6</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number">2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >-</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >0</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >/</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="number" >x</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="remove" sx={{ minHeight: '125%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px'}}} >RESET</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="equal" sx={{ minHeight: '125%', minWidth: '100%', fontSize: { xs: '20px', lg: '28px'}}} >=</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CalculatorBody;
