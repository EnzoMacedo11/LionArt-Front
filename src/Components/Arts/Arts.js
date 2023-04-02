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
margin-top:25px;
  display: flex;
  flex-wrap: wrap;
  height:72vh;
  overflow-x: auto;
  justify-content: center;
  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}


`;

const CardsContainer2 = styled.div`
  max-width: 1400px; 
  margin: 0 auto; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center; 
  align-items: center; 
  gap: 15px;
`;