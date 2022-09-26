import {
    Header,
    Text,
    DescText,
    Wrapper,
    ImgWrp,
    ButtonStyled,
    ButtonText
} from './Blog.styled';
import Image from './Image/Image';

function Solutions() {
  return (
<>
    <ImgWrp>
        <Image />
    </ImgWrp>
    <Wrapper>
        <Text>April 16 2020</Text>
        <Header>Blog Post One</Header>
        <DescText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</DescText>
        <ButtonStyled>
            <ButtonText>Read Our Blog</ButtonText>
        </ButtonStyled>
    </Wrapper>
</> 
  );
}

export default Solutions;