import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const Container = styled.div`
  background: #333333;
  padding: 20px 0;
`;

export const List = styled.ul`
  width: 216px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto 12px;
  list-style: none;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Icon = styled(HandySvg)`
  fill: #ffffff;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #28a745;
  }
`;
