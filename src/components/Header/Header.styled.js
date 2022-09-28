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
  padding: 22px 22px 0 22px;
  margin-bottom: 62px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 16px 32px 0 32px;
    justify-content: space-between;
    margin-bottom: 314px;
  }
`;
