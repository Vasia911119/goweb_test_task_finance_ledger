import {
  HeaderText,
  Text,
    Wrapper,
    ButtonText,
    ButtonStyled,
  Container,
} from './Hero.styled';
import Header from '../Header/Header';

function Hero() {
    return (
    <Container id="home">
      <Header/>
      <Wrapper>
          <HeaderText>The Sky Is The Limit</HeaderText>
          <Text>We provide world class financial assistance</Text>
        <ButtonStyled>
            <ButtonText>Read More</ButtonText>
        </ButtonStyled>
      </Wrapper>
    </Container>
  );
}

export default Hero;