import styled from 'styled-components';
// import iconClose from '../../images/gallery/close.png';
// import { ReactComponent as Prev } from "../../images/gallery/prev.png";
// import { ReactComponent as Next } from "../../images/gallery/next.png";

export const PrevImg = styled.img`
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  left: calc(50% - 140px);
  bottom: calc(50% - 20px);
`;

export const NextImg = styled.img`
  cursor: pointer;
  position: absolute;
  width: 25px;
  height: 25px;
  right: calc(50% - 140px);
  bottom: calc(50% - 20px);
`;

export const Close = styled.img`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  right: calc(50% - 140px);
  bottom: calc(50% - 120px);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -9px;
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
`;
