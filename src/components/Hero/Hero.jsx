import {
  HeaderText,
  Text,
    Wrapper,
    ButtonText,
    ButtonStyled,
  Container,
} from './Hero.styled';
import Header from '../Header/Header';
// import Button from '../Button/Button';

function Hero() {
    return (
    <Container>
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