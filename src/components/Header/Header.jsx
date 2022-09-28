import {
  LogoStyled,
  Container
} from './Header.styled';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <Container>
          <LogoStyled />
          <Navigation />
    </Container>
  );
}

export default Header;