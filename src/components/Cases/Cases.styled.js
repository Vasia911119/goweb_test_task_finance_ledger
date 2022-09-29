import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  color: #333333;
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
  line-height: 1.38;
  text-align: center;
  color: #333333;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.35;
  }
`;

export const DescText = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  color: #333333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.39;
  }
`;

export const Wrapper = styled.div`
  padding: 60px 56px 31px;

  @media (min-width: 768px) {
    padding: 48px 60px 30px;
  }

  @media (min-width: 1360px) {
    padding: 80px 28px 25px;
  }
`;
