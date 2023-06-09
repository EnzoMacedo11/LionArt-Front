import { useState } from "react";
import styled from "styled-components";
                                                 //Melhorar jogo
export default function ArtGame({ art }) {
  const Resposta = art.author;


  const [shot, setShot] = useState(null);
  

  function CompararRespostas() {
    if (Resposta.toLowerCase() == shot.toLowerCase()) {
      alert("Voce acertou!!");
      window.location.reload()
    } else 
    alert(`Voce errou! O artista era ${Resposta}`)
    window.location.reload();
  }

  if (!art) {
    return <h1>loading</h1>;
  }
  return (
    <CardContainer>
      <h1>Descubra o artista!</h1>
      <ImageContainer>
        <Image src={art.imageUrl} />
      </ImageContainer>
      <GameConsole>
        <form>
        <div className="inputbox">
          <input onChange={(e) => setShot(e.target.value)} value={shot}></input>
          {/* <label for="">Tentativas</label> */}
        </div>
        <button type="submit" onClick={CompararRespostas}>
          <h2>Tentar!</h2>
        </button>
        </form>
      </GameConsole>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-flow: column nowrap;
  width: 940px;
  height: 740px;
  border-radius: 10px;
  margin-left: 19px;
  margin-right: 19px;
  background-color: #d9c9bc;
  opacity: 95%;
  .inputbox {
    position: relative;
    margin-top:22px;
    width: 310px;
    border-radius: 15px;
    //border-bottom: 2px solid #fff;
    background: #606FA6;
  }
  .inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    pointer-events: none;
    transition: 0.5s;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -15px;
  }

  .inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 35px 0 5px;
    color: #fff;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }

  button {
    width: 120px;
    height: 45px;
    background-color: #606FA6;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  button:hover {
    background-color: #2c244d;
    transition: 0.3s;
  }
  h1{
    font-size: 20px;
    font-weight: 700;
    color: black;
  }
  h2{
    font-size: 15px;
    font-weight: 400;
    color: black;
  }
`;

const ImageContainer = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Image = styled.img`
  width: 880px;
  height: 540px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const GameConsole = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
form{
  display: flex;
  justify-content:center;
align-items:center;
flex-direction:column;
}

`