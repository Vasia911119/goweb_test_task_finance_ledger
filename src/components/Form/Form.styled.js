import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 40px 32px;
  }

  @media (min-width: 1360px) {
    padding: 80px 28px 80px 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #333333;
  margin-bottom: 32px;
  /* width: 147px; */

  /* @media (min-width: 768px) {
    width: 305px;
  } */
`;

export const Error = styled.span`
  color: red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// export const Label = styled.label`
//   font-family: 'Open Sans';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 23px;
//   color: #808080;
//   position: absolute;
//   left: 20px;
//   top: 20px;
//   transition: transform 250ms linear;
// `;

export const Input = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  margin-bottom: 32px;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.44;
  color: #808080;
  padding-left: 8px;
  padding-top: 9px;
  padding-bottom: 7px;

  @media (min-width: 768px) {
    width: 324px;
    font-size: 18px;
    line-height: 1.28;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  @media (min-width: 1360px) {
    width: 620px;
    line-height: 1.56;
    padding-top: 10px;
    padding-bottom: 1px;
  }

  /* &:hover + &:not(:placeholder-shown) {
    transform: translateY(-45px);
  } */
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  width: 155px;
  height: 57px;
  background: #28a745;
  border-radius: 5px;
  border: #28a745;

  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: 8px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgb(40, 167, 69, 0.8);

    @media (min-width: 768px) {
      width: 324px;
      font-size: 18px;
      line-height: 25px;
    }

    @media (min-width: 1360px) {
      width: 642px;
      margin-top: 28px;
    }
  }
`;
