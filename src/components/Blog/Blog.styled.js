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
`;

export const Header = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: left;
  color: #ffffff;
  /* padding: 0 40px; */
  margin: 0 0 24px;
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
`;

export const ButtonStyled = styled.button`
  color: #ffffff;
  background: #0284d0;
  border: 1px solid #ffffff;
  border-radius: 5px;
  cursor: pointer;
  height: '54px';
  align-self: center;
  transition: all 0.2s ease-in-out;
  :active,
  &:hover {
    color: #0284d0;
    background: #ffffff;
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
  padding: 16px 32px;
`;

export const Wrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: left; */
  padding: 79px 20px;
  background: #0284d0;
  /* width: 100%; */
  /* margin: 22px 0 16px 0; */
  /* @media (min-width: 768px) {
    justify-content: space-between;
  } */
`;

export const ImgWrp = styled.div`
  width: 320px;
  height: 220px;
`;
