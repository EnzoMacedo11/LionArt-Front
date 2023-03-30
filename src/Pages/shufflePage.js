import NavBar from "../Components/NavBar";
import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";
import Art from "../Components/Art";

export default function ShufflePage() {

  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();
 
  
  if (!arts || !authors || !types) {
    return "loading";
  }

  const random = Math.floor(Math.random()*arts.length)
  const artselected = arts[random]
  console.log(artselected)
  console.log(random)
  console.log(arts.length)

  return (
    <Container>
      <OldNavBar types={types} authors={authors} />
      <Center><Art art={artselected} /></Center>
      
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
