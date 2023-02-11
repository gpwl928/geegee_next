import styled from '@emotion/styled';
import GGHeader from "./GGHeader";
import GGFooter from "./GGFooter";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const Children = styled.main`
  flex-grow: 1;
  width: 100%;
  padding: 0 40px 100px;
`;

const MainLayout: React.FC = (props: any) => {
  return (
    <Wrap>
      <GGHeader />
        <Children>
          {props.children}
        </Children>
      <GGFooter />
    </Wrap>
  )
};

export default MainLayout