import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";

// export const Text = styled.h1`
//   font-family: "Open Sans";
//   font-size: 28px;
//   font-weight: 400;
//   line-height: 38px;
//   text-align: left;
//   color: #ffffff;
//   margin: 0 0 0 8px;
// `;

// export const TextStyled = styled.span`
//   color: #28a745;
// `;

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
  /* @media (min-width: 768px) {
    justify-content: space-between;
  } */
`;

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 16px;
//   &:focus,
//   &:hover {
//   }
//   /* @media (min-width: 768px) {
//     justify-content: space-between;
//   } */
// `;

export const Container = styled.div`
  padding: 22px 22px 0 22px;
  margin-bottom: 62px;
  /* display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin: 22px 0 16px 0; */
  /* @media (min-width: 768px) {
    justify-content: space-between;
  } */
`;
