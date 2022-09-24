import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  /* @media (min-width: 768px) {
    justify-content: space-between;
  } */
`;

export const Item = styled.li`
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  padding-bottom: 8px;
  &:focus,
  &:hover {
    transition: all 0.2s ease-in-out;
    &:after {
      content: "";
      position: absolute;
      width: calc(100% + 20px);
      height: 2px;
      left: -10px;
      bottom: 0;
      background: #28a745;
      border-radius: 2px;
    }
  }
`;
