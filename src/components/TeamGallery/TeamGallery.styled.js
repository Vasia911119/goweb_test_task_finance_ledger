import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 8px;
  margin: 0;
  padding: 0 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(222px, 1fr));
    grid-gap: 18px;
    padding: 0 32px;
  }

  @media (min-width: 1360px) {
    grid-template-columns: repeat(auto-fill, minmax(418px, 1fr));
    grid-gap: 20px;
    padding: 0 28px;
  }
`;
