import styled from 'styled-components';
import Header from '../components/header';
import Banners from '../components/carousel';
import Brands from '../components/brands';

export default function Homepage() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <Page>
        <Header/>
        <Banners/>
        <Brands/>
      </Page>
    </>
  );
}

export const Page = styled.div`
  background-color: #D4305A;
  background-color: #2F96BB;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
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
