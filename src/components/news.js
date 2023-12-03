import styled from 'styled-components';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NewsBanners from './newsCarousel';

export default function News() {
  return (
    <>
      <Content>
        <Title>
          Produtos que chegaram agora
          <div>
            <Previous/>
            <Next/>
          </div>
        </Title>
        <NewsBanners/>
        <SeeAll>Ver tudo...</SeeAll>
      </Content>
    </>
  );
}

export const SeeAll = styled.div`
  width: 100%;
  padding-right: 20px;
  font-size: 20px;
  font-weight: 100;
  color: lightgray;
  text-align: end;
  :hover{
    cursor: pointer;
    color: white;
    text-decoration: underline;
  }
`;

export const Previous = styled(NavigateBeforeRoundedIcon)`
  font-size: 60px !important;
  pointer-events: none;
  :hover{
    cursor: pointer;
  }
`;

export const Next = styled(NavigateNextRoundedIcon)`
  font-size: 60px !important;
  pointer-events: none;
  :hover{
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  div{
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 60px;
`;
