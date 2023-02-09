import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter} from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';
import Visual from '@/components/gamestore/Visual';

const CommonSectionStyle = css`
  margin: 0 auto;
  max-width: 1600px;
`;

const Wrap = styled.main`
  width: 100%;
  padding: 0 40px;
`;
const VisualSection = styled.section`
  ${CommonSectionStyle}
  height: 558px;
`;
const SectionLayout = styled.section`
  ${CommonSectionStyle}
  margin-top: 48px;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: 24px;
  color: #fff;
  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: center / contain no-repeat url("/Images/common/btn_arrowright_d@2x.png");
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &::after {
        background: center / contain no-repeat url("/Images/common/btn_arrowright_o.png");
      }
    }
  }
`;

const GameStore = () => {
  return (
    <Wrap>
      <VisualSection>
        <Visual />
      </VisualSection>
      <SectionLayout>
        <TitleBox>
          <Title>dddd</Title>
        </TitleBox>
      </SectionLayout>
    </Wrap>
  )
};

export default GameStore;