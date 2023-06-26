import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/images/banner1.jpeg';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

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
        <Previous/>
        <Next/>
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

export const Previous = styled(NavigateBeforeRoundedIcon)`
  position: absolute;
  top: 45%;
  left: 12px;
  z-index: 3;
  font-size: 60px !important;
  opacity: 0.6;
  pointer-events: none;
  :hover{
    opacity: 1;
  }
`;

export const Next = styled(NavigateNextRoundedIcon)`
  position: absolute;
  top: 45%;
  right: 8px;
  z-index: 3;
  font-size: 60px !important;
  opacity: 0.6;
  pointer-events: none;
  :hover{
    opacity: 1;
  }
`;

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
  position: relative;
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
    opacity: 0;
  }
  .slick-next::before{
    font-size: 35px;
    opacity: 0;
  }
`;
