import styled from "styled-components";
import img from "../images/home/showcase.jpg";
import webp from "../images/home/showcase.webp";
import img2x from "../images/home/showcase@2x.jpg";
import webp2x from "../images/home/showcase@2x.webp";

export const Wrapper = styled.div`
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
