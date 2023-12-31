import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

import adidas1a from '../assets/adidas/adidas1a.avif';
import adidas1b from '../assets/adidas/adidas1b.avif';
import adidas2a from '../assets/adidas/adidas2a.avif';
import adidas2b from '../assets/adidas/adidas2b.avif';
import adidas3a from '../assets/adidas/adidas3a.avif';
import adidas3b from '../assets/adidas/adidas3b.avif';

import nike1a from '../assets/nike/nike1a.avif';
import nike1b from '../assets/nike/nike1b.avif';
import nike2a from '../assets/nike/nike2a.avif';
import nike2b from '../assets/nike/nike2b.avif';
import nike3a from '../assets/nike/nike3a.avif';
import nike3b from '../assets/nike/nike3b.avif';

import converse1a from '../assets/converse/converse1a.webp';
import converse1b from '../assets/converse/converse1b.webp';
import converse2a from '../assets/converse/converse2a.webp';
import converse2b from '../assets/converse/converse2b.webp';
import converse3a from '../assets/converse/converse3a.webp';
import converse3b from '../assets/converse/converse3b.webp';

import vans1a from '../assets/vans/vans1a.webp';
import vans1b from '../assets/vans/vans1b.webp';
import vans2a from '../assets/vans/vans2a.webp';
import vans2b from '../assets/vans/vans2b.webp';

import crocs1a from '../assets/crocs/crocs1a.webp';
import crocs1b from '../assets/crocs/crocs1b.webp';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SalesOff() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.screen.width);
    }
    window.addEventListener('resize', handleResize);
  }, []);
  const banners = [
    {
      img: adidas1a,
      imgAbove: adidas1b,
      name: 'Forum 84 Mid X HEITOR',
      brand: 'Adidas',
      price: '999,99'
    },
    {
      img: adidas2a,
      imgAbove: adidas2b,
      name: 'Forum 84 CAMP Low',
      brand: 'Adidas',
      price: '899,99'
    },
    {
      img: adidas3a,
      imgAbove: adidas3b,
      name: 'Forum Mid PARLEY',
      brand: 'Adidas',
      price: '899,99'
    },
    {
      img: nike1a,
      imgAbove: nike1b,
      name: 'Jordan 1 Mid',
      brand: 'Nike',
      price: '999,99'
    },
    {
      img: nike2a,
      imgAbove: nike2b,
      name: 'Air Force 1 Low',
      brand: 'Nike',
      price: '799,99'
    },
    {
      img: nike3a,
      imgAbove: nike3b,
      name: 'Air Jordan 4',
      brand: 'Nike',
      price: '1699,99'
    },
    {
      img: converse1a,
      imgAbove: converse1b,
      name: 'Run Star Legacy CX Pride',
      brand: 'Converse',
      price: '699,99'
    },
    {
      img: converse2a,
      imgAbove: converse2b,
      name: 'Run Star Hike',
      brand: 'Converse',
      price: '529,99'
    },
    {
      img: converse3a,
      imgAbove: converse3b,
      name: 'Run Star Motion',
      brand: 'Converse',
      price: '749,99'
    },
    {
      img: vans1a,
      imgAbove: vans1b,
      name: 'BMX SK8-HI 238 Dakota Roche',
      brand: 'Vans',
      price: '699,99'
    },
    {
      img: vans2a,
      imgAbove: vans2b,
      name: 'SK8-HI Tapered Oversized Floral',
      brand: 'Vans',
      price: '649,99'
    },
    {
      img: crocs1a,
      imgAbove: crocs1b,
      name: 'Echo Reflective Clog',
      brand: 'Crocs',
      price: '469,99'
    }
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: (screenWidth > 1300) ? ((screenWidth > 1900) ? 3 : 2) : 1,
    slidesToScroll: (screenWidth > 1300) ? ((screenWidth > 1900) ? 3 : 2) : 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  function navigateTo(route) {
    navigate(route);
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Content>
        <Sale>
          <Slider {...settings}>
            { banners.map((banner) => {
              return <div key={banner.name}>
                <Card brand={banner.brand}>
                  <ImageAbove brand={banner.brand}> 
                    <img src={banner.imgAbove}/>
                  </ImageAbove>
                  <img src={banner.img}/>
                  <p>{banner.name}</p>
                  {banner.brand}
                  <Price>R${banner.price} <p>R${banner.price}</p></Price>
                  <New>
                    -50% OFF
                  </New>
                </Card>
              </div>;
            }) }
          </Slider>
          <Buttons>
            <Previous/>
            <Next/>
          </Buttons>
          <Title>
            <p>SALE</p>
            até
            <p>60%</p>
            <p>OFF</p>
            <SeeAll onClick={() => navigateTo('/gallery/sale')}>Ver tudo...</SeeAll>
          </Title>
        </Sale>
      </Content>
    </>
  );
}

export const SeeAll = styled.div`
  width: 100%;
  padding-right: 8px;
  font-size: 20px;
  font-weight: 100;
  color: lightgray;
  text-align: end;
  :hover{
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;

const New = styled.div`
  position: absolute;
  z-index: 3;
  background-color: rgba(255,255,255,0.6);
  backdrop-filter: blur(40px);
  padding: 4px 7px;
  border-radius: 20px;
  font-weight: 300;
  top: 35px;
  right: 35px;
  border: 1px solid lightgray;
`; 

const Title = styled.div`
  position: absolute;
  top: 80px;
  left: -340px;
  text-align: end;
  p{
    font-size: 130px;
  }
  font-size: 50px;
  transition: none !important;
  animation: textColor 2s cubic-bezier(0,1,0,1) infinite;
  @keyframes textColor {
    0%{
      color: white;
    }
    50%{
      color: #FECB3E;
    }
    100%{
      color: white;
    }
  }
`;

const ImageAbove = styled.div`
  transition: all .1s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 25px;
  left: 25px;
  width: calc(100% - 50px);
  z-index: 2;
  transform: ${props => (props.brand === 'Adidas' || props.brand === 'Crocs') ? 'rotateZ(0deg)' : 'rotateZ(180deg)'};
  :hover{
    opacity: 1;
    cursor: pointer;
  }
`;

const Price = styled.div`
  color: black;
  font-weight: 600;
  position: absolute;
  bottom: 25px;
  left: 25px;
  display: flex;
  align-items: center;
  p{
    color: gray !important;
    margin-left: 10px !important;
    text-decoration: line-through;
  }
`;

const Sale = styled.div`
  background-color: gray;
  width: 80%;
  height: 600px;
  padding: 50px;
  margin: 0 auto;
  border-radius: 10px;
  position: relative;
`;

const Card = styled.div`
  position: relative;
  background-color: white;
  width: 350px;
  height: 400px;
  border-radius: 10px;
  padding: 25px;
  transition: all .2s linear;
  color: gray;
  font-weight: 400;
  margin: 0 auto;
  img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    border: 2px solid lightgray;
    padding: ${props => (props.brand === 'Crocs') ? '20px' : '0'};
    border-radius: 5px;
    transform: ${props => props.brand === 'Nike' ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  }
  p{
    color: black;
    margin: 10px 0;
    font-weight: 600;
  }
  :hover{
    cursor: pointer;
  }
`;

const Previous = styled(NavigateBeforeRoundedIcon)`
  font-size: 60px !important;
  pointer-events: none;
  :hover{
    cursor: pointer;
  }
`;

const Next = styled(NavigateNextRoundedIcon)`
  font-size: 60px !important;
  pointer-events: none;
  :hover{
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  width: 17%;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px 0;
  padding-left: 20%;
  margin-bottom: 40px;
  position: relative;
  .slick-prev{
    z-index: 3;
    position: absolute;
    top: 117.5%;
    left: 42.5%;
  }
  .slick-next{
    z-index: 3;
    position: absolute;
    top: 117.5%;
    right: 43.7%;
  }
  .slick-prev::before{
    font-size: 35px;
    opacity: 0;
  }
  .slick-next::before{
    font-size: 35px;
    opacity: 0;
  }
`;
