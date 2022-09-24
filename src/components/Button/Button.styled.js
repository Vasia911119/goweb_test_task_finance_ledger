import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  background: #28a745;
  border: 1px solid #28a745;
  border-radius: 5px;
  cursor: pointer;
  height: "57px";
  /* align-self: center; */
  transition: all 0.2s ease-in-out;
  :active,
  &:hover {
    /* transition: all 1s ease-in-out; */
    /* transition: 500ms; */
    opacity: 0.8;
  }
  /* @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;
  } */
`;
