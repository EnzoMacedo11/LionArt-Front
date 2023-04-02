import styled, { keyframes } from 'styled-components';
import { bounceIn } from 'react-animations';
 
export default function Loading(){
    return(
        <BouncyDiv>Loading</BouncyDiv>
    )

}

const bounceAnimation = keyframes`${bounceIn}`;
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9c9bc;
  border-radius: 15px;
  opacity: 90%;
  width: 550px;
  height: 200px;
  margin-top: 150px;
  font-size: 35px;
  font-weight: 700;
 
`;