import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 65px 60px;
  background: black;
  position: center;
  bottom: 0;
  width: 100%;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: 100%;
    margin: 0 auto;
    margin-top: -50px;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  width: 100%;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 8px;
  }
`;
   
export const Row = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
  padding: 5px;
`;
   
export const FooterLink = styled.a`
  font-family: "Encode Sans", sans-serif;
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
   
  &:hover {
      color: purple;
      transition: 200ms ease-in;
  }
  @media screen and (max-width: 720px) {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;
   
export const Heading = styled.p`
  font-family: "Encode Sans", sans-serif;
  font-size: 20px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-family: "Encode Sans", sans-serif;
  font-size: 12px;
  color: #fff;
  margin-bottom: -40px;
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 720px) {
    font-size: 10px;
  }
`;