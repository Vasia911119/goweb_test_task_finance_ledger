import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 8px;
  margin: 0;
  padding: 0 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(auto-fill, minmax(222px, 1fr));
    grid-gap: 18px;
    padding: 0 32px;
  }
`;
