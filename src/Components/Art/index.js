import styled from "styled-components";
import api from "../../services/api";
import { BookmarkOutline } from "react-ionicons";
import { Bookmark } from "react-ionicons";
import { useState } from "react";
import useToken from "../../hooks/useToken";
import { useEffect } from "react";
import useUser from "../../hooks/api/useUsers";

export default function Art({ art }) {
  const [favorito, setFavorito] = useState(null);
  const [artsId, setArtsId] = useState([]);
  const { user } = useUser();
  const conection = process.env.REACT_APP_API_BASE_URL
  const token = useToken();
  const artId = art.id;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function favoritar() {
    const promisse = api.post(
      `${conection}/user/userArt/${artId}`,
      [],
      config
    );
    promisse.then((res) => {
      setFavorito(true);
    });
    promisse.catch((err) => {});
  }

  function desfavoritar() {
    const promisse = api.delete(
      `${conection}/user/userArt/${artId}`,
      config
    );
    promisse.then((res) => {
      setFavorito(false);
    });
    promisse.catch((err) => {});
  }

  useEffect(() => {
    if (user) {
      const userId = user.id;
      const promisse = api.get(
        `${conection}/user/userArts/${userId}`,
        config
      );
      promisse.then((res) => {
        setArtsId(res.data);

        if (res.data.some((i) => i.artId === artId)) {
          setFavorito(true);
        } else {
          setFavorito(false);
        }
      });
      promisse.catch((err) => {
        console.log(err);
      });
    }
  }, [user]);

  if (!art) {
    return <h1>loading</h1>;
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={art.imageUrl} />
      </ImageContainer>

      <InfoContainer>
        <Division>
          <Title>
            {art.title}

            {favorito ? (
              <Icon1 onClick={desfavoritar}>
                <Bookmark color={"#00000"} height="20px" width="20px" />
              </Icon1>
            ) : (
              <Icon1 onClick={favoritar}>
                <BookmarkOutline color={"#00000"} height="20px" width="20px" />
              </Icon1>
            )}
          </Title>
          <Year>Ano: {art.age} </Year>
        </Division>

        <Division>
          <Author> Artista: {art.author}</Author>
          <Type>Tipo: {art.type} </Type>
        </Division>

        <Description>
          <h2>{art.description}</h2>
        </Description>
      </InfoContainer>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 940px;
  height: 740px;
  border-radius: 10px;
  margin-left: 19px;
  margin-right: 19px;
  background-color: #d9c9bc;
  opacity: 95%;
`;

const ImageContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 880px;
  height: 550px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  font-family: "Roboto";
  margin-left: 25px;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  color: #343434;
  margin-bottom: 5px;
`;

const Author = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3c3c3c;
`;

const Division = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Type = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3c3c3c;
  margin-bottom: 8px;
  margin-right: 28px;
`;

const Year = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3c3c3c;
  margin-bottom: 8px;
  margin-right: 28px;
`;

const Description = styled.div`
  margin-right: 20px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;
const Icon1 = styled.div`
  margin-top: 4px;
  margin-left: 10px;
`;
