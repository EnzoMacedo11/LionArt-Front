import React, { useState } from "react";
import { MenuOutline } from "react-ionicons";
import styled from "styled-components";
import AuthorCard from "../Authors";
import TypesCard from "../Types/Index";


const SideBar = ({ active, authors, types }) => {
  const closedSideBar = () => {
    active(false);
  };

console.log('a', authors)
  return (
    <Container sideBar={active}>
      <Close>
        <MenuOutline
          onClick={closedSideBar}
          color={"#00000"}
          height="40px"
          width="40px"
        />
      </Close>
      <Authors>
        <h1>Artistas</h1>
        {authors.map((a, index) => (
          <AuthorCard
          author={a.author}
          key={index}/>
      ))}
      </Authors>
      <ArtStyle>
        <h1>Tipos de Arte</h1>
        {types.map((t, index) => (
          <TypesCard
          type={t.type}
          key={index}/>
      ))}
        
      </ArtStyle>

    </Container>
  );
};

export default SideBar;

const Close = styled.div`
margin-top:24px;
margin-left:20px;
`

const Authors = styled.div`
display:flex;
flex-direction:column;
margin-left: 50px;
margin-top: 30px;

h1{
    font-size: 24px;
  font-weight: 400;
  color: #343434;
  margin-bottom: 20px;
}

h2{
  font-size: 15px;
font-weight: 300;
color: #343434;
margin-top: 15px;
margin-bottom: 20px;
}

h1:hover{
  color: blue;
  transition:.4s;
}
`

const ArtStyle = styled.div`
display:flex;
flex-direction:column;
margin-left: 50px;
margin-top: 30px;

h1{
    font-size: 24px;
  font-weight: 400;
  color: #343434;
  margin-bottom: 20px;
}

li{
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  margin-bottom: 15px;
}

h2{
  font-size: 15px;
font-weight: 300;
color: #343434;
margin-top: 15px;
margin-bottom: 20px;
}

h1:hover{
  color: blue;
  transition:.4s;
}
`

const Container = styled.div`
  background-color: #d9c9bc;
  position: fixed;
  height: 100%;
  z-index:10;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${(props) => (props.sideBar ? "0" : "-100%")};
  animation: showSideBar 0.6s;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSideBar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

const Content = styled.div`
  margin-top: 100px;
`;
