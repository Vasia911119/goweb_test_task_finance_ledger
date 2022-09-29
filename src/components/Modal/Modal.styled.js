import styled from 'styled-components';

export const PrevImg = styled.img`
  box-sizing: content-box;
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 20px 35px;
  top: calc(50%);
  left: calc(50% - 130px);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    left: calc(50% - 330px);
  }

  @media (min-width: 1360px) {
    width: 45px;
    height: 45px;
    left: calc(50% - 490px);
  }
`;

export const NextImg = styled.img`
  box-sizing: content-box;
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 20px 35px;
  top: calc(50%);
  left: calc(50% + 130px);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 35px;
    height: 35px;
    left: calc(50% + 330px);
  }

  @media (min-width: 1360px) {
    width: 45px;
    height: 45px;
    left: calc(50% + 490px);
  }
`;

export const Close = styled.img`
  box-sizing: content-box;
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 20px;
  top: calc(50% + 110px);
  left: calc(50% + 130px);
  transform: translate(-50%, -50%);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    width: 22px;
    height: 22px;
    top: calc(50% + 255px);
    left: calc(50% + 340px);
  }

  @media (min-width: 1360px) {
    width: 30px;
    height: 30px;
    top: calc(50% + 373px);
    left: calc(50% + 510px);
  }
`;

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
`;

export const ModalStyle = styled.div`
  border: 2px solid #ffffff;
  border-radius: 2px;
  width: 280px;
  height: 176px;

  @media (min-width: 768px) {
    border: 3px solid #ffffff;
    border-radius: 3px;
    width: 700px;
    height: 467px;
  }

  @media (min-width: 1360px) {
    border: 4px solid #ffffff;
    border-radius: 4px;
    width: 1050px;
    height: 700px;
  }
`;
