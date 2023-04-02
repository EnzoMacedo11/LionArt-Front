import NavBar from "../Components/NavBar";
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
import Loading from "../Components/Loading";

export default function AuthorPage() {
  const { author } = useParams();
  console.log(author);
  const { artByAuthor } = useArtsByAuthor(author);
  const { authors } = useAuthors();
  const { types } = useArtTypes();

  if (!authors || !types || !artByAuthor) {
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
        <h1> Autor: {author}</h1>
        <Center>
          <Arts arts={artByAuthor} />
        </Center>
      </Main>
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
`;