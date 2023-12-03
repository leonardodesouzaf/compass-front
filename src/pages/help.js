import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import HelpMe from '../components/helpme';

export default function Help() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      <Page>
        <Header path={'/help'}/>
        <HelpMe/>
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
