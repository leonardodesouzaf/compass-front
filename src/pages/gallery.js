import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import GalleryItems from '../components/galleryItems';
import { useParams } from 'react-router-dom';

export default function Gallery() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
  const { filter } = useParams();
  return (
    <>
      <Page>
        <Header path={`/gallery/${filter}`}/>
        <GalleryItems filter={filter}/>
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
