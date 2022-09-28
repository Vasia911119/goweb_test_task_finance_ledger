import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: #ffffff;
  margin: 0 0 16px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Header = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: left;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const DescText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const ButtonStyled = styled.button`
  color: #ffffff;
  background: #0284d0;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  width: 146px;
  height: 54px;
  align-self: center;
  transition: all 0.2s ease-in-out;
  :active,
  &:hover {
    color: #0284d0;
    background: #ffffff;
  }

  @media (min-width: 768px) {
    width: 156px;
    height: 57px;
  }
`;

export const ButtonText = styled.p`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Wrapper = styled.div`
  padding: 48px 20px 58px;
  background: #0284d0;
  @media (min-width: 768px) {
    padding: 59px 32px;
    width: 336px;
  }
`;

export const ImgWrp = styled.div`
  width: 320px;
  height: 220px;

  @media (min-width: 768px) {
    width: 368px;
    height: 493px;
  }
`;

export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;
