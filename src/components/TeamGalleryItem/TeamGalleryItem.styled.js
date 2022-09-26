import styled from 'styled-components';
import fb from '../../images/fb.png';
import tw from '../../images/tw.png';

export const GalleryItem = styled.li`
  margin-bottom: 103px;
  width: 280px;
  height: 176px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryItemImage = styled.picture`
  position: relative;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* filter: brightness(90%); */
    opacity: 0.6;
    /* transform: scale(1.03); */
    /* transform: scale(1.2); */
    /* cursor: zoom-in; */
    /* &:after {
      content: '';
      position: absolute;
      width: 35px;
      height: 35px;
      left: calc(50%);
      bottom: calc(50%);
      background: url(${fb}) no-repeat center/cover;
    } */
  }
`;

export const Header = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  /* padding: 0 40px; */
  /* margin: 0 0 24px; */
`;

export const SubHeader = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #000000;
  /* padding: 0 40px; */
  /* margin: 0 0 24px; */
`;

export const ImgWrp = styled.div`
  font-size: 0;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* z-index: 5; */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    );
    transform: scale(1.03);
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.2),
      5px 5px 5px -5px rgba(0, 0, 0, 0.2), 5px 5px 5px -5px rgba(0, 0, 0, 0.2);
    &:before {
      content: '';
      position: absolute;
      /* z-index: 2; */
      width: 30px;
      height: 30px;
      left: calc(50% - 80px);
      bottom: calc(50% - 15px);
      background: url(${fb}) no-repeat center/cover;
      /* background: #28a745;
    border-radius: 2px; */
    }
    &:after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      left: calc(50% - 50px);
      bottom: calc(50% - 15px);
      background: url(${tw}) no-repeat center/cover;
    }
    /* cursor: zoom-in; */
  }
`;
