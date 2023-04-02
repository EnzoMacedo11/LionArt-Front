import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";
import useArtsById from "../hooks/api/useArtById";
import Art from "../Components/Art";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

export default function ArtPage() {
  const { id } = useParams();
  
  const {artById} = useArtsById(id);

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
      <Center><Art art={artById} /></Center>
      
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