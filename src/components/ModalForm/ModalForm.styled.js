import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  cursor: pointer;
  overflow-y: scroll;
`;
export const Box = styled.div`
  max-width: calc(100vw);
  max-height: calc(100vh - 40px);
  cursor: auto;
  border: 4px solid white;
  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 40px);
  }
`;
