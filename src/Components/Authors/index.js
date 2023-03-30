import React, { useState } from 'react';
import { Navigate } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


export default function AuthorCard(props) {
  const { author } = props;
  const navigate = useNavigate()

  const [selected,setSelected]= useState(null)


  function authorName(){
    setSelected(author)
  }

  if(selected){
    navigate(`/author/${selected}`);
    window.location.reload()
    setSelected(null)
  }


  return (
    <Container onClick={authorName} >
     <li>{author}</li>
    </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction:column;

li{
  font-size: 18px;
  font-weight: 400;
  color: #343434;
  margin-bottom:15px;
}
`
