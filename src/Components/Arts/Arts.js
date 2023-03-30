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
  max-width: 1400px; 
  margin: 0 auto; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center; 
  align-items: center; 
  gap: 15px;
`;