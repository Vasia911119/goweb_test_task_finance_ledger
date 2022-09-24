import {
  Header,
  Text,
    Wrapper,
  ButtonText
} from './Hero.styled';
import Button from '../Button/Button';

function Hero() {
  return (
      <Wrapper>
          <Header>The Sky Is The Limit</Header>
          <Text>We provide world class financial assistance</Text>
          <Button text={<ButtonText>Read More</ButtonText>} />
        </Wrapper>
  );
}

export default Hero;