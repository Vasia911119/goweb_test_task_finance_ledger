import styled from 'styled-components';
import imgv from '../../images/Vector.png';
import img from '../../images/home/showcase.jpg';
import webp from '../../images/home/showcase.webp';
import img2x from '../../images/home/showcase@2x.jpg';
import webp2x from '../../images/home/showcase@2x.webp';

export const HeaderText = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  color: #ffffff;
  padding: 0 40px;
  margin: 0 0 16px;

  @media (min-width: 768px) {
    font-size: 55px;
    line-height: 1.36;
  }
`;

export const Text = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 1.23;
  text-align: center;
  color: #ffffff;
  margin: 0 0 24px;

  @media (min-width: 768px) {
    width: 523px;
    font-size: 40px;
    line-height: 1.2;
  }

  @media (min-width: 1360px) {
    width: 800px;
  }
`;

export const ButtonText = styled.p`
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 400;
  line-height: 1.39;
  text-align: center;
  color: #ffffff;
  margin: 0;
  padding: 16px 24px 16px 45px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 12px;
    left: 28px;
    bottom: 23px;
    background: url(${imgv}) no-repeat center/cover;
  }
`;

export const ButtonStyled = styled.button`
  background: #28a745;
  border: 1px solid #28a745;
  border-radius: 5px;
  cursor: pointer;
  width: 175px;
  height: 57px;
  transition: all 0.2s ease-in-out;
  :active,
  &:hover {
    opacity: 0.8;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160px;
  padding-bottom: 104px;

  @media (min-width: 768px) {
    padding-top: 378px;
    padding-bottom: 378px;
  }

  @media (min-width: 1360px) {
    padding-top: 247px;
    padding-bottom: 270px;
  }
`;

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${img}) no-repeat center/cover;
  @supports (
    background:
      linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${webp})
  ) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${webp}) no-repeat center/cover;
  }
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${img2x}) no-repeat center/cover;
    @supports (
      background:
        linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${webp2x})
    ) {
      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${webp2x}) no-repeat center/cover;
    }
  }
  @media (min-width: 768px) {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${img2x}) no-repeat center/cover;
    @supports (
      background:
        linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${webp2x})
    ) {
      background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${webp2x}) no-repeat center/cover;
    }
  }
`;
