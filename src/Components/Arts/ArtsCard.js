import React, { useState } from 'react';
import { Navigate } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function ArtCard(props) {
  const { id, age, title, author, image, type } = props;
  const navigate = useNavigate()

  const [selectedCard,setSelectedCard]= useState(null)


  function cardId(){
    setSelectedCard(id)
  }

  if(selectedCard){
    navigate(`/art/${selectedCard}`)
  }



  return (
    <CardContainer onClick={cardId} >
      <ImageContainer>
      <HotelImage src={image} />
      </ImageContainer>
      
      <InfoContainer>
        <CardTitle>{title}</CardTitle>
        <SubTitle> Artista: {author}</SubTitle>
        <SubTitleInfo>Ano: {age}</SubTitleInfo>
        <SubTitle>Tipo: {type}</SubTitle>
        <SubTitleInfo></SubTitleInfo>
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 260px;
  height: 280px;
  border-radius: 10px;
  margin-left:15px;
  margin-top:10px;
  margin-right: 5px;
  background-color: #d9c9bc;
  opacity:89%;

  :hover{
    background-color:#c9a9ce;
  transition: .8s;
  opacity:100%;
  }
`;


const ImageContainer = styled.div`
  display: flex;
  align-items:center;
  flex-flow: column nowrap;
  justify-content: center;
`;

const HotelImage = styled.img`
  margin-top:15px;
  width: 220px;
  height: 165px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  font-family: 'Roboto';
  margin-left:22px;
  
  
`;

const CardTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  margin-bottom: 5px;
`;

const SubTitle = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #3c3c3c;
`;

const SubTitleInfo = styled(SubTitle)`
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 8px;
`;

