import ArtCard from "./ArtsCard";
import styled from "styled-components";

export default function ArtsId({ arts, artsId }) {
  const artsSelected = arts.filter(a => artsId.some(b => b.artId === a.id))

  if (!artsSelected || artsSelected.length == 0) {
    return (
      <NoContainer>
        <h1>Ainda não foi salva nenhuma arte</h1>
      </NoContainer>
    );
  }

  return (
    <CardsContainer>
      {artsSelected.map((a, index) => (
        <ArtCard
          key={index}
          id={a.id}
          age={a.age}
          author={a.author}
          image={a.imageUrl}
          title={a.title}
          type={a.type}
        />
      ))}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const NoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9c9bc;
  border-radius: 15px;
  opacity: 90%;
  width: 550px;
  height: 200px;
  margin-top: 150px;
  font-size: 35px;
  font-weight: 700;
`;
