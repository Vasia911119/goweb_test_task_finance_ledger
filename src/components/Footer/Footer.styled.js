import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const Container = styled.div`
  width: 320px;
  background: #333333;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;

export const List = styled.ul`
  width: 216px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto 8px;
  list-style: none;
`;

export const Text = styled.p`
  width: 256px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled(HandySvg)`
  fill: #ffffff;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: #28a745;
  }
`;

// @media screen and (min-width: 768px) {
//     .container {
//         width: 768px;
//     }

//     .list {
//         margin-bottom: 6px;
//     }

//     .text {
//         width: 287px;
//         font-size: 18px;
//         line-height: 1.56;
//     }
// }

// @media screen and (min-width: 1360px) {
//     .container {
//         width: 1360px;
//     }
// }
