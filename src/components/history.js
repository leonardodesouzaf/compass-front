import styled from 'styled-components';

export default function History() {
  return (
    <>
      <Content>
        <Text>
          <p><CompassLogo>COMPASS</CompassLogo>: HISTÓRIA</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio.
        </Text>
        <Division></Division>
        <Text>
          <p>A loja favorita dos sneakerheads desde sua criação em 2004</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque.
        </Text>
      </Content>
    </>
  );
}

const Text = styled.div`
  width: 47%;
  height: 100%;
  color: black;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 400;
  p{
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

const CompassLogo = styled.div`
  font-family: 'Orbitron';
  color: black;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  margin-right: 5px;
`;

const Division = styled.div`
  height: 100%;
  width: 2px;
  background-color: black;
`;

export const Content = styled.div`
  width: 100%;
  height: 400px;
  margin: 40px 0;
  padding: 40px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
`;
