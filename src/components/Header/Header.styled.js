import styled from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo.svg';

export const LogoStyled = styled(Logo)`
  width: 247px;
  height: 38px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:focus,
  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }
  @media (min-width: 768px) {
    width: 297px;
    height: 48px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  padding: 22px 22px 0 22px;
  height: 108px;
  width: 320px;
  z-index: 999;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 16px 32px 0;
    justify-content: space-between;
    height: 64px;
    width: 768px;
  }

  @media (min-width: 1360px) {
    padding: 32px 28px 0;
    height: 64px;
    width: 1360px;
  }
`;

export const ContainerFixed = styled(Container)`
  background-color: rgb(40, 39, 39);
  opacity: 0.8;
`;
