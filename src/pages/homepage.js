import styled from 'styled-components';
import Header from '../components/header';
import Banners from '../components/carousel';
import Brands from '../components/brands';
import News from '../components/news';
import History from '../components/history';
import SalesOff from '../components/salesOff';
import Footer from '../components/footer';

export default function Homepage() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <Page>
        <Header path={'/'}/>
        <Banners/>
        <News/>
        <Brands/>
        <History/>
        <SalesOff/>
        <Footer/>
      </Page>
    </>
  );
}

export const Page = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  max-width: 2500px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 105px;
  font-weight: 600;
  position: relative;

  *{
    -ms-overflow-style: none;
    scrollbar-width: none;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1150px) {
    display: none;
  }
`;
