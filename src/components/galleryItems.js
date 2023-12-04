import styled from 'styled-components';

export default function GalleryItems({ filter }) {
  return (
    <>
      <Content>
          Galeria
      </Content>
    </>
  );
}

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Text = styled.div`
  width: 100%;
  padding: 10px 50px;
  font-size: 20px;
  font-weight: 100;
`;
