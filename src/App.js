import Nav from 'react-bootstrap/Nav';
import Menu from './Menu';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Slider from './Slider';
import Branding from './Branding';
import Cards from './Cards';
import Launch from './Launch';
function App() {
  return (
   <>
   <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
 <Menu/>
<Slider/>
<Branding
title="Somos  XT NEGOCIO"
/>
<Cards
/>
<Launch/>
</ThemeProvider>
   </>
  );
}

export default App;