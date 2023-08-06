import { Container } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  return (

      <Container maxWidth={false} sx={{ height: "100vh", backgroundColor: "veryDarkDesaturatedBlue"}} >
        <Header />
      </Container>
  );
}

export default App;
