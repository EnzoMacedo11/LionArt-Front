import NavBar from "../Components/NavBar";
import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";

export default function Home() {
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();

  if (!arts || !authors || !types) {
    return "loading";
  }

  return (
    <Container>
      <OldNavBar types={types} authors={authors} />
      <Arts arts={arts} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  background-image: url(${background});
`;
