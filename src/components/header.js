import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { Slide } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function Header({ path }) {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  function navigateTo(route) {
    setIsMenu(false);
    setTimeout(() => {
      if (route !== path) navigate(route);
      window.scrollTo(0, 0);
    }, isMenu ? 500 : 0);
  }
  return (
    <>
      <Content>
        <CompassLogo onClick={() => navigateTo('/')}>COMPASS</CompassLogo>
        <MenuLogo isMenu={isMenu} onClick={() => {
          setIsMenu(!isMenu);
        }}/>
        <MenuLogo2 isMenu={isMenu}/>
      </Content>
      <Slide in={isMenu} direction="left" timeout={500} unmountOnExit mountOnEnter>
        <Menu>
          <Border></Border>
          <MenuContent>
            <Account>
              <Avatar style={{ backgroundColor: 'black', width: '80px', height: '80px' }}>
                <PersonIcon style={{ fontSize: '40px' }}/>
              </Avatar>
              <div>
                <AccountName>
                  Leonardo Souza
                </AccountName>
                <SeeMore>Ver meus pedidos...</SeeMore>
              </div>
            </Account>
            <Division></Division>
            <p onClick={() => navigateTo('/')}>Home</p>
            <Division></Division>
            <p onClick={() => navigateTo('/gallery/news')}>Novidades</p>
            <Division></Division>
            <p onClick={() => navigateTo('/gallery/sale')}>SALE 60% OFF</p>
            <Division></Division>
            <p onClick={() => navigateTo('/about')}>Sobre nós</p>
            <Division></Division>
            <p onClick={() => navigateTo('/help')}>Ajuda</p>
            <Division></Division>
          </MenuContent>
        </Menu>
      </Slide>
    </>
  );
}

export const SeeMore = styled.div`
  font-weight: 100;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: lightgray;
  transition: all .2s linear;
  :hover{
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`;

export const AccountName = styled.div`
  font-weight: 700;
  line-height: 25px;
  margin: 20px 0 3px 0;
  text-align: center;
`;

export const Account = styled.div`
  width: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuContent = styled.div`
  width: 100%;
`;

export const Border = styled.div`
  width: 1px;
  height: 100%;
  background-color: white;
`;

export const Division = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: white;
`;

export const Menu = styled.div`
  background-color: rgba(10,10,10,.3);
  backdrop-filter: saturate(180%) blur(20px);
  border-left: 2px solid black;
  position: fixed;
  top: 107px;
  right: 0;
  height: calc(100vh - 107px);
  width: 20vw;
  z-index: 7;
  overflow: hidden;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 75px;
  display: flex;
  p{
    margin-left: 10%;
    transition: all .2s linear;
    :hover{
      cursor: pointer;
      color: gray;
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
  transition: all .4s linear !important;
`;

export const MenuLogo = styled(MenuRoundedIcon)`
  position: fixed;
  z-index: 6;
  top: 33px;
  right: 50px;
  font-size: 40px !important;
  transform: ${(props) => (props.isMenu ? 'rotate(90deg)' : 'none')};
  transition: all .4s linear !important;
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
  text-shadow: 3px 3px 0 #7E7E7E,
      6px 6px 0 #585858, 9px 9px #353535,
      12px 12px 0 #000000;
  margin-bottom: 12px;
  :hover{
    cursor: pointer;
  }
`;

export const Content = styled.div`
  height: 105px;
  width: 100%;
  background-color: rgba(10,10,10,.3);
  backdrop-filter: saturate(180%) blur(20px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  box-shadow: 0 2px 0 black;
  border-bottom: 1px solid white;
`;
