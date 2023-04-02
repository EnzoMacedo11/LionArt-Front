import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useContext, useState } from "react";
import background from "../image/background.jpg";
import logo from "../image/logo1.png";
import UserContext from "../contexts/UserContext";

export default function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserData } = useContext(UserContext);

  function sendLogin(event) {
    event.preventDefault();
    const info = {
      email: email,
      password: password,
    };
    const promisse = axios.post("http://localhost:4000/signin", info);
    promisse.then((res) => {
      console.log(res.data);
      setUserData(res.data);
      Navigate("/home");
    });
    promisse.catch((err) => {
      console.log(err);
      alert("Usuário e/ou Senha Incorreto(s)")
    });
  }

  return (
    <Container>
      <CardInfos>
        <Infos>
          <img src={logo} />
        </Infos>
        <Credentials>
          <form onSubmit={sendLogin}>
            <h3>Insira seus dados!</h3>

            <div className="inputbox">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              ></input>
              <label for="">Email</label>
            </div>

            <div className="inputbox">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                required
              ></input>
              <label for="">Senha</label>
            </div>

            <button type="submit">
              <h1>Login!</h1>
            </button>
            <Link to={"/register"}>
              <h2>Não tem uma conta? Registre-se!</h2>
            </Link>
          </form>
        </Credentials>
      </CardInfos>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  background-image: url(${background});
  background-size:cover;
`;

const CardInfos = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius:20px;
  background-color: #d9c9bc;
  opacity: 90%;
`;

const Infos = styled.div`
  width: 450px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Credentials = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;

    color: #d9c9bc;
  }

  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    margin-bottom: 15px;

    color: black;
  }

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;

    color: black;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 547px;
    height: 500px;

    background: transparent;
  }
  .inputbox {
    position: relative;
    margin: 20px 0;
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

  button{
  width: 305px;
  height: 45px;
  background-color: #44418A;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:15px;
  margin-bottom: 20px;
  }

  button:hover {
      background-color:#2C244D;
      transition: .3s;
  }
`;

