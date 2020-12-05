import styled from 'styled-components/macro'
import Header from './components/Header';
import Logo from './components/Logo';
import Headline from './components/Headline';
import Navigation from './components/Navigation';
import Brands from './components/Brands';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Grid>
        <Logo />
        <Header />
        <Headline />
        <Navigation />
        <Brands />
        <Footer />
      </Grid>
    </>
  );
}

export default App;

const Grid = styled.div`
  display: grid;
    grid-template-columns: 0.4fr 1.6fr;
    grid-template-rows: 0.1fr 0.1fr 11fr;
    gap: 0px 0px;
    grid-template-areas:
      "logo header"
      "nav headline"
      "nav brands";
`