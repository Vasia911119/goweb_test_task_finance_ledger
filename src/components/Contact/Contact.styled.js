import styled from 'styled-components';

export const Container = styled.div`
  background: #f4f4f4;

  @media (min-width: 768px) {
    display: flex;
    margin-bottom: 40px;
  }

  @media (min-width: 1360px) {
    margin-bottom: 0;
  }
`;

export const ImgWrp = styled.div`
  width: 320px;
  height: 220px;

  @media (min-width: 768px) {
    width: 368px;
    height: 354px;
  }

  @media (min-width: 1360px) {
    width: 670px;
    height: 454px;
  }
`;
// .container {
//     margin-left: auto;
//     margin-right: auto;
//     width: 320px;
//     background: #F4F4F4;
// }
// .image{
//     width: 320px;
// }
// @media screen and (min-width: 768px) {
//     .container {
//         width: 768px;
//         display: grid;
//         grid-template-columns: repeat(2, 1fr);
//         grid-auto-rows: minmax(100px, auto);
//     }
//     .image{
//         width: 368px;
//         height: 354px;
//         object-fit: cover;
//     }
// }

//  @media screen and (min-width: 1360px) {
//     .container {
//         width: 1360px;
//     }
//     .image {
//         width: 670px;
//         height: 454px;
//     }
// }
