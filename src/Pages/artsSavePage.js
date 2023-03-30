import NavBar from "../Components/NavBar";
import styled from "styled-components";
import background from "../image/background.jpg";
import OldNavBar from "../Components/Home/NavBar";
import useArts from "../hooks/api/useArts";
import Arts from "../Components/Arts/Arts";
import { useEffect, useState } from "react";
import useAuthors from "../hooks/api/useAuthors";
import useArtTypes from "../hooks/api/useArtsTypes";
import useUser from "../hooks/api/useUsers";
import useArtsByUser from "../hooks/api/useArtByUser";

export default function ArtsSaved() {
  const { user } = useUser();
  const { artByUser } = useArtsByUser();
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();

  console.log("final", artByUser);

  if (!arts || !authors || !types || !user) {
    return "loading";
  }

  return (
    <Container>
      <OldNavBar types={types} authors={authors} />
      <ArtSpace>
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

const ArtSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
