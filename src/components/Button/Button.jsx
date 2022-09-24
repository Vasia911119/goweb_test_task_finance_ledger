import { ButtonStyled } from './Button.styled';

function Button({ text }) {
  return (
      <ButtonStyled type="submit">
      {text}
    </ButtonStyled>
  );
}

export default Button;