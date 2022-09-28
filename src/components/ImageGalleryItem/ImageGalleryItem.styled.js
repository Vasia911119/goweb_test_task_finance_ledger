import styled from 'styled-components';

export const GalleryItem = styled.li`
  width: 280px;
  height: 176px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    width: 223px;
    height: 148px;
  }
`;

export const GalleryItemImage = styled.picture`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: zoom-in;
    opacity: 0.8;
  }
`;
