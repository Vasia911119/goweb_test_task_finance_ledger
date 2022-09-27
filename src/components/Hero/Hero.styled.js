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
  text-align: center;
  color: #ffffff;
  margin: 0 0 24px;
`;

export const ButtonText = styled.p`
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  margin: 0;
  padding: 16px 32px 16px 49px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 12px;
    left: 33px;
    bottom: 23px;
    background: url(${imgv}) no-repeat center/cover;
  }
`;

export const ButtonStyled = styled.button`
  background: #28a745;
  border: 1px solid #28a745;
  border-radius: 5px;
  cursor: pointer;
  height: '57px';
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
  padding-bottom: 104px;
`;

export const Container = styled.div`
  /* z-index: 2; */
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
