import styled from 'styled-components';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import flags from '../assets/images/cardsflags.png';

export default function Footer() {
  return (
    <>
      <Content>
        <CompassLogo>COMPASS</CompassLogo>
        <Division></Division>
        <Contato>
          Termos e condições
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum venenatis, sed faucibus sapien dui ornare nunc.</p>
        </Contato>
        <Contato>
          Contato
          <p><EmailRoundedIcon style={{ fontSize: 20 }}/>contato@compass.com</p>
          <p><HeadsetMicRoundedIcon style={{ fontSize: 20 }}/>0800 123 4567</p>
        </Contato>
        <Bandeiras>
          Formas de pagamento
          <img src={flags}/>
        </Bandeiras>
      </Content>
    </>
  );
}

const Bandeiras = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  height: 90px;
  img{
    width: 200px;
    margin-left: -7px;
    margin-top: 2px;
  }
`;

const Contato = styled.div`
  color: black;
  font-size: 25px;
  height: 90px;
  margin-right: 40px;
  max-width: 320px;
  p{
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 300;
    margin: 10px 0;
    svg{
      margin-right: 5px;
    }
  }
`;

const CompassLogo = styled.div`
  font-family: 'Orbitron';
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  margin-right: 5px;
`;

const Division = styled.div`
  height: 100%;
  border-radius: 10px;
  width: 6px;
  background-color: black;
  margin: 0 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
  padding: 40px 70px;
  display: flex;
  align-items: center;
  background-color: #F1F1F1;
  filter: brightness(0.8);
`;
