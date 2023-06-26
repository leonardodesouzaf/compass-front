import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

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

export default function NewsBanners() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
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
    slidesToShow: (screenWidth > 1700) ? ((screenWidth > 2100) ? 6 : 5) : 4,
    slidesToScroll: (screenWidth > 1700) ? ((screenWidth > 2100) ? 6 : 5) : 4,
  };
  return (
    <>
      <Content>
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
                <Price>R${banner.price}</Price>
              </Card>
            </div>;
          }) }
        </Slider>
      </Content>
    </>
  );
}

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
`;

const Card = styled.div`
  position: relative;
  background-color: white;
  width: calc(100% - 20px);
  height: 400px;
  border-radius: 10px;
  padding: 25px;
  transition: all .2s linear;
  color: gray;
  font-weight: 400;
  margin: 10px 0;
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
    scale: 1.01;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  .slick-prev{
    z-index: 3;
    position: absolute;
    top: -85px;
    left: calc(100vw - 257px);
  }
  .slick-next{
    z-index: 3;
    position: absolute;
    top: -85px;
    right: 27px;
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
