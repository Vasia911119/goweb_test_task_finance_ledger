import {
    Header,
    Text,
    DescText,
    Wrapper,
    ImgWrp,
    ButtonStyled,
    ButtonText
} from './Solutions.styled';
import Image from './Image/Image';

function Solutions() {
  return (
<>
    <ImgWrp>
        <Image />
    </ImgWrp>
    <Wrapper>
        <Text>What you are looking for</Text>
        <Header>We provide bespoke solutions</Header>
        <DescText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</DescText>
        <ButtonStyled>
            <ButtonText>Read More</ButtonText>
        </ButtonStyled>
    </Wrapper>
</> 
  );
}

export default Solutions;