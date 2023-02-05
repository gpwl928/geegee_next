import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';


const Main = styled.div`
  padding-top: ${(props): number => props.theme.HEADER_HEIGHT}px;
  background: ${(props): string => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
  @media (max-width: ${(props): number => props.theme.MOBILE_LANDSCAPE_MAX}px) {
    padding-top: ${(props): number => props.theme.MOBILE_HEADER_HEIGHT}px;
  }
`;

const Test = styled.div`
  width: 200px;
  height: 200px;
  background: ${(props): string => props.theme.mainColor};
`;

export const Home = () => {
  return (
    <>
      <Main>
        <Test>dddddd</Test>
      </Main>
    </>
  )
};

export default Home;
