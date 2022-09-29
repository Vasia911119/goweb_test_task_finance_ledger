import styled from 'styled-components';

export const Container = styled.div`
  background: #f4f4f4;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 40px;
  }

  @media (min-width: 1360px) {
    margin-bottom: 0;
  }
`;

export const ImgWrp = styled.div`
  width: 320px;
  height: 220px;

  @media (min-width: 768px) {
    width: 368px;
    height: 354px;
  }

  @media (min-width: 1360px) {
    width: 670px;
    height: 454px;
  }
`;
