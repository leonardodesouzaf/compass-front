import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { Slide } from '@material-ui/core';

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <Content>
        <CompassLogo>COMPASS</CompassLogo>
        <MenuLogo isMenu={isMenu} onClick={() => {
          setIsMenu(!isMenu);
        }}/>
        <MenuLogo2 isMenu={isMenu}/>
      </Content>
      <Slide in={isMenu} direction="left" timeout={1000} unmountOnExit mountOnEnter>
        <Menu>
          <p>Home</p>
          <Division></Division>
          <p>Conta</p>
          <Division></Division>
          <p>Carrinho</p>
          <Division></Division>
          <p>Favoritos</p>
          <Division></Division>
          <p>Sobre nós</p>
          <Division></Division>
          <p>Ajuda</p>
          <Division></Division>
        </Menu>
      </Slide>
    </>
  );
}

export const Division = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  height: 4px;
  background-color: black;
`;

export const Menu = styled.div`
  background-color: #eaeaea;
  border-left: 4px solid black;
  position: fixed;
  top: 109px;
  right: 0;
  height: calc(100vh - 109px);
  width: 25vw;
  z-index: 7;
  overflow: hidden;
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  p{
    margin: 30px 0;
    margin-left: 10%;
    :hover{
      cursor: pointer;
    }
  }
`;

export const MenuLogo2 = styled(MenuRoundedIcon)`
  position: fixed;
  z-index: 5;
  top: 35px;
  right: ${(props) => (props.isMenu ? '52px' : '48px')};
  font-size: 40px !important;
  color: black;
  transform: ${(props) => (props.isMenu ? 'rotate(90deg)' : 'none')};
  transition: all .9s linear !important;
`;

export const MenuLogo = styled(MenuRoundedIcon)`
  position: fixed;
  z-index: 6;
  top: 33px;
  right: 50px;
  font-size: 40px !important;
  transform: ${(props) => (props.isMenu ? 'rotate(90deg)' : 'none')};
  transition: all .9s linear !important;
  :hover{
    cursor: pointer;
  }
`;

export const CompassLogo = styled.div`
  font-family: 'Orbitron';
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  text-shadow: 3px 3px 0 #2F96BB,
      6px 6px 0 #2986a5, 9px 9px #22738e,
      12px 12px 0 #1b5c72;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  height: 105px;
  width: 100%;
  background-color: #fecb3e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0 4px 0 black;
  border-bottom: 1px solid white;
`;
