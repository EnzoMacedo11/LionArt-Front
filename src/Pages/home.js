import NavBar from "../Components/NavBar";
import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";
import Loading from "../Components/Loading";

export default function Home() {
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();


  if (!arts || !authors || !types) {
    return (
      <ContainerLoading>
        <Loading/>
      </ContainerLoading>
    );
  }

  return (
    <Container>
      <OldNavBar types={types} authors={authors} />
      <ArtSpace>
        <h1>Galeria</h1>
        <Arts arts={arts} />
      </ArtSpace>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  background-image: url(${background});
`;

const ContainerLoading = styled.div`
  height: 100vh;
  width: 100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #000;
  background-image: url(${background});
`;

const ArtSpace = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: black;
    margin-top:15px;
    margin-bottom: 15px;
  }
`;
