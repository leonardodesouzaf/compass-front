import styled from 'styled-components';

export default function HelpMe() {
  return (
    <>
      <Content>
        <Title>
          Ajuda
        </Title>
        <Subtitle>Lorem Ipsum</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio.
        </Text>
        <Subtitle>Lorem Ipsum</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. 
        </Text>
        <Subtitle>Lorem Ipsum</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. 
        </Text>
        <Subtitle>Lorem Ipsum</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim lectus, dapibus nec tortor non, ullamcorper volutpat nulla. Aenean euismod felis sit amet ante placerat consectetur. In sit amet efficitur lectus. Cras tincidunt, nisi quis consequat iaculis, urna purus ornare orci, vitae convallis mauris nunc a eros. Vivamus a fringilla enim, eget condimentum neque. Donec efficitur diam ut sapien mattis scelerisque. Quisque aliquet erat sed libero sagittis, ultricies rutrum turpis pellentesque. Suspendisse potenti. Morbi finibus viverra neque vitae dictum. Vivamus tortor justo, suscipit vel eros a, aliquet blandit odio.
        </Text>
        <End></End>
      </Content>
    </>
  );
}

export const End = styled.div`
  height: 50px;
`;

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

export const Subtitle = styled.div`
  width: 100%;
  padding: 10px 50px;
  font-size: 35px;
`;

export const Title = styled.div`
  width: 100%;
  padding: 50px;
  font-size: 60px;
  font-weight: 100;
`;
