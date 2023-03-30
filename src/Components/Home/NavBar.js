import styled from "styled-components";
import { Link, MenuOutline, Navigate } from "react-ionicons";
import { PersonCircleOutline } from "react-ionicons";
import { LogInOutline } from "react-ionicons";
import logo from "../../image/logo1.png";
import { useState } from "react";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";
import { BookmarkOutline } from "react-ionicons";
import { ColorPaletteOutline } from "react-ionicons";
import { ShuffleOutline } from "react-ionicons";

export default function OldNavBar(props) {
  const navigate = useNavigate();
  const { authors, types } = props;
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  function goHome() {
    window.location.href = "/home";
  }

  function goGame() {
    window.location.href = "/game";
  }

  function goArtsSaved() {
    window.location.href = "/artsSaved";
  }


  function goShuffle() {
    window.location.href = "/shuffle";
  }
  function signOut() {
    localStorage.removeItem("userData");
    navigate("/");
    window.location.reload(false);
  }

  return (
    <Container>
      <Left>
        <MenuOutline
          onClick={showSideBar}
          color={"#00000"}
          height="40px"
          width="40px"
        />
        {sideBar && (
          <SideBar authors={authors} types={types} active={setSideBar} />
        )}
      </Left>
      <img src={logo} onClick={goHome} />
      <Right>
        <Icon>
          <ShuffleOutline onClick={goShuffle} color={"#00000"} height="40px" width="40px" />
        </Icon>
        <Icon>
          <ColorPaletteOutline
            onClick={goGame}
            color={"#00000"}
            height="40px"
            width="40px"
          />
        </Icon>

        <Icon1>
          <BookmarkOutline
           onClick={goArtsSaved}
            color={"#00000"} height="35px" width="35px" />
        </Icon1>

        <Icon>
          <LogInOutline
            onClick={signOut}
            color={"#00000"}
            height="40px"
            width="40px"
          />
        </Icon>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 375px;
    height: 230px;
    width: 290px;
  }
`;

const Left = styled.div`
  position: relative;
  top: -35px;
  margin-left: 20px;
`;
const Right = styled.div`
  display: flex;
  position: relative;
  top: -35px;
`;

const Icon = styled.div`
  margin-right: 25px;
`;

const Icon1 = styled.div`
  margin-top: 2px;
  margin-right: 200px;
`;
