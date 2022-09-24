import styled from "styled-components";
import img from "../../images/Vector.png";

export const Header = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
  padding: 0 40px;
  margin: 0 0 16px;
`;

export const Text = styled.h2`
  font-family: Open Sans;
  font-size: 26px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin: 0 0 24px;
`;

export const ButtonText = styled.p`
  margin: 0;
  padding: 16px 32px 16px 49px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 12px;
    left: 33px;
    bottom: 23px;
    /* background: #28a745; */
    background: url(${img}) no-repeat center/cover;
    /* border-radius: 2px; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-bottom: 104px;
  /* width: 100%; */
  /* margin: 22px 0 16px 0; */
  /* @media (min-width: 768px) {
    justify-content: space-between;
  } */
`;
