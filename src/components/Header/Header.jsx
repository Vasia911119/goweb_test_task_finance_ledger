import {
  // Text,
  // TextStyled,
  // Wrapper,
  LogoStyled,
  Container
} from './Header.styled';
import Navigation from '../Navigation/Navigation';


function Header() {
  return (
    <Container>
        {/* <Wrapper> */}
          <LogoStyled />
          {/* <Text><TextStyled>Finance<TextStyled /></TextStyled> Ledger</Text> */}
        {/* </Wrapper> */}
          <Navigation />
    </Container>
  );
}

export default Header;