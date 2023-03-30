import ArtCard from "./ArtsCard";
import styled from "styled-components";

export default function Arts({arts}) {

  
  return (
    <CardsContainer>
      {arts.map((a, index) => (
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
  display: flex;
  justify-content:center;
  align-items:center;
`;