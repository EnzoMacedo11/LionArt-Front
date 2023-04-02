
import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";
import { useParams } from "react-router-dom";
import useArtsByAuthor from "../hooks/api/useArtByAuthor";
import useArtsByType from "../hooks/api/useArtByType";
import Loading from "../Components/Loading";

export default function TypePage() {
  const { type } = useParams();
  const {artByType} = useArtsByType(type);
  const { authors } = useAuthors();
  const { types } = useArtTypes();



  if (!authors || !types || !artByType) {
    return (
      <ContainerLoading>
        <Loading/>
      </ContainerLoading>
    );
  }
  
  return (
    <Container>
      <OldNavBar types={types} authors={authors} />
      <Main>
        <h1> Tipo de Arte: {type}</h1>
      <Center><Arts arts={artByType} /></Center>
      </Main>
      
      
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  background-image: url(${background});
  background-size:cover;
`;

const Center = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const Main = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin-bottom: 15px;
  }
`;

const ContainerLoading = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #000;
  background-image: url(${background});
  background-size:cover;
`;