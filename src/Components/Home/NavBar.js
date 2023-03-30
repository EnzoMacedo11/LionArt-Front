import styled from "styled-components";
import { Link, MenuOutline, Navigate } from "react-ionicons";
import { PersonCircleOutline } from "react-ionicons";
import logo from "../../image/logo1.png";
import { useState } from "react";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";

export default function OldNavBar(props) {
  const navigate = useNavigate();
  const { authors, types } = props;
  const [sideBar, setSideBar] = useState(false);
  
  const showSideBar = () => setSideBar(!sideBar);

  function goHome() {
    window.location.href = "/home";
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
        <PersonCircleOutline color={"#00000"} height="40px" width="40px" />
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
    height: 220px;
    width: 280px;
  }
`;

const Left = styled.div`
  position: relative;
  top: -35px;
  margin-left: 20px;
`;
const Right = styled.div`
  position: relative;
  top: -35px;
  margin-right: 20px;
`;
