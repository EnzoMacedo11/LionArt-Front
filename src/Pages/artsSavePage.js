
import api from "../services/api";
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
import useToken from "../hooks/useToken";
import ArtsId from "../Components/Arts/ArtsId";
import Loading from "../Components/Loading";

export default function ArtsSaved() {
  const [artsId, setArtsId] = useState([]);
  const token = useToken();
  const { user } = useUser();
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();
  

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const promisse = api.get(
        `http://localhost:4000/user/userArts/${userId}`,
        config
      );
      promisse.then((res) => {
        setArtsId(res.data);
        return promisse.data;
      });
      promisse.catch((err) => {
      });
    }
  }, [user]);

  if (!arts || !authors || !types || !user || !artsId) {
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
        <ArtsId arts={arts} artsId={artsId} />
      </ArtSpace>
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

const ArtSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
