import NavBar from "../Components/NavBar";
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

export default function ArtsSaved() {
  const [artsId, setArtsId] = useState([]);
  const token = useToken();
  const { user } = useUser();
  const { arts } = useArts();
  const { authors } = useAuthors();
  const { types } = useArtTypes();
  console.log(artsId);

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
        console.log(res.data);
        setArtsId(res.data);
        return promisse.data;
      });
      promisse.catch((err) => {
        console.log(err);
      });
    }
  }, [user]);

  if (!arts || !authors || !types || !user || !artsId) {
    return "loading";
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
`;

const ArtSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
