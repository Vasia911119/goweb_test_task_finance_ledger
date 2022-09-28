import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const GalleryItem = styled.li`
  margin-bottom: 108px;
  width: 280px;
  height: 176px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    margin-bottom: 128px;
    width: 223px;
    height: 148px;
  }

  @media (min-width: 1360px) {
    margin-bottom: 168px;
    width: 420px;
    height: 281px;
  }
`;

export const GalleryItemImage = styled.picture`
  position: relative;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #333333;
  margin: 16px 0 8px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const SubHeader = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #333333;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  display: none;
  transition: 0.5s ease;
  background-color: rgb(0, 0, 0, 0.6);
`;

export const OverlayText = styled.ul`
  color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  grid-auto-rows: minmax(100px, auto);

  position: absolute;
  top: calc(50% + 35px);
  left: calc(50% - 20px);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const SvgIcon = styled(HandySvg)`
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 0.8;
  }
`;

export const ImgWrp = styled.div`
  font-size: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transition: 0.5s ease;
    transform: scale(1.1);
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
  }

  &:hover ${Overlay} {
    display: block;
    opacity: 1;
  }
`;
