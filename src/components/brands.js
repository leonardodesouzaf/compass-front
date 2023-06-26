import styled from 'styled-components';
import converse from '../assets/images/converse.png';
import vans from '../assets/images/vans.png';
import adidas from '../assets/images/adidas.png';
import nike from '../assets/images/nike.png';
import crocs from '../assets/images/crocs.png';

export default function Brands() {
  return (
    <>
      <Content>
        <Converse>
          <img src={converse}/>
        </Converse>
        <Division></Division>
        <Vans>
          <img src={vans}/>
        </Vans>
        <Division></Division>
        <Adidas>
          <img src={adidas}/>
        </Adidas>
        <Division></Division>
        <Nike>
          <img src={nike}/>
        </Nike>
        <Division></Division>
        <Crocs>
          <img src={crocs}/>
        </Crocs>
      </Content>
    </>
  );
}

const Crocs = styled.div`
  img{
    width: 150px;
    transition: filter .2s linear;
    transition: scale .3s linear;
    :hover{
      cursor: pointer;
      filter: invert(1);
      scale: 1.05;
    }
  }
`;

const Nike = styled.div`
  img{
    width: 150px;
    transition: filter .2s linear;
    transition: scale .3s linear;
    :hover{
      cursor: pointer;
      filter: invert(1);
      scale: 1.05;
    }
  }
`;

const Adidas = styled.div`
  img{
    width: 110px;
    transition: filter .2s linear;
    transition: scale .3s linear;
    :hover{
      cursor: pointer;
      filter: invert(1);
      scale: 1.05;
    }
  }
`;

const Vans = styled.div`
  img{
    width: 150px;
    transition: filter .2s linear;
    transition: scale .3s linear;
    :hover{
      cursor: pointer;
      filter: invert(1);
      scale: 1.05;
    }
  }
`;

const Converse = styled.div`
  img{
    width: 140px;
    transition: filter .2s linear;
    transition: scale .3s linear;
    :hover{
      cursor: pointer;
      filter: invert(1);
      scale: 1.05;
    }
  }
`;

const Division = styled.div`
  height: 70%;
  width: 2px;
  background-color: black;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
  padding: 0 3vw;
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
