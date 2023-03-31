import { useState } from "react";
import styled from "styled-components";
                                                 //Melhorar jogo
export default function ArtGame({ art }) {
  const Resposta = art.author;
  console.log(Resposta);

  const [shot, setShot] = useState(null);
  console.log(shot);

  function CompararRespostas() {
    if (Resposta == shot) {
      alert("Voce acertou!!");
    } else alert("Voce Errou!");
  }

  if (!art) {
    return <h1>loading</h1>;
  }
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={art.imageUrl} />
      </ImageContainer>
      <GameConsole>
        <div className="inputbox">
          <input onChange={(e) => setShot(e.target.value)} value={shot}></input>
          <label for="">Tentativas</label>
        </div>
        <button type="submit" onClick={CompararRespostas}>
          <h1>Tentar!</h1>
        </button>
      </GameConsole>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
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
    background: #3f4090;
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
    width: 150px;
    height: 45px;
    background-color: #44418a;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  button:hover {
    background-color: #2c244d;
    transition: 0.3s;
  }
`;

const ImageContainer = styled.div`
  margin-top: 35px;
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

const GameConsole = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`