import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/images/banner1.jpeg';

export default function Banners() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };
  return (
    <>
      <Content>
        <Slider {...settings}>
          <div>
            <ImagesFlex>
              <img src={banner1} alt='Foto do ponto turístico'/>
            </ImagesFlex>
          </div>
          <div>
            <ImagesFlex>
              <img src={banner1} alt='Foto do ponto turístico'/>
            </ImagesFlex>
          </div>
        </Slider>
      </Content>
    </>
  );
}

const ImagesFlex = styled.div`
  display: flex;
  justify-content: space-between;
  img{
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  width: 100%;
  .slick-prev{
    z-index: 2;
    margin-left: 50px;
  }
  .slick-next{
    z-index: 2;
    margin-right: 60px;
  }
  .slick-prev::before{
    font-size: 35px;
    transition: all .5s linear !important;
  }
  .slick-next::before{
    font-size: 35px;
    transition: all .5s linear !important;
  }
`;
