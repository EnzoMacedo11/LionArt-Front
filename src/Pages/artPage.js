import NavBar from "../Components/NavBar";
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

export default function ArtPage() {
  const { id } = useParams();
  console.log("bata", id);
  const {artById} = useArtsById(id);
  console.log("art", artById);
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();

  if (!arts || !authors || !types) {
    return "loading";
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
`;

const Center = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

