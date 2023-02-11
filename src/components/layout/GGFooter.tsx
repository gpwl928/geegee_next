import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SerializedStyles } from '@emotion/utils';

const MainFooter = styled.footer`
  padding: 50px 30px 60px;
  width: 100%;
  background-color: #22255a;
`;
const Logo = styled.img`
  width: 104px;
  height: auto;
  margin-bottom: 20px;
`;
const PolicyListItems = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  width: 100%;
`;
const PolicyListItem = styled.li`
  a {
    font-size: 12px;
  }
`;
const ContentBox = styled.div`
  margin-top: 17px;
`;
const Content = styled.p`
  font-size: 14px;
  line-height: 1.2;
  white-space: pre-line;
`;

const POLICY_LIST = [
  {
    key: '이용약관',
    url: '/'
  },
  {
    key: '개인정보처리방침',
    url: '/'
  },
  {
    key: '스토어 환불 정책',
    url: '/'
  }
];

const POLICY_CONTENT = '© 2023,  Wonder People Co.,Ltd. All Rights Reserved.\nGeeGee, GeeGee로고, SUPERPEOPLE 2.0, SUPERPEOPLE 2.0 로고의 모든 저작권은 (주)원더피플에 있으며, 이는 대한민국 및 그 외 국가에 모두 해당됩니다.\n기타 브랜드 또는 제품 이름은 해당 소유자의 상표입니다.';

const GGFooter: React.FC = () => {
  return (
    <MainFooter>
      <Logo src="/Images/common/img_m_logo.png" />
      <PolicyListItems>
        {POLICY_LIST && POLICY_LIST.map((item):any => {
          return (
            <PolicyListItem key={item.key}>
              <Link href={item.url}>
                {item.key}
              </Link>
            </PolicyListItem>
          )
        })}
      </PolicyListItems>
      <ContentBox>
        {/* TODO: 사업자 정보 추가 */}
        <Content>
          {POLICY_CONTENT}
        </Content>
      </ContentBox>
    </MainFooter>
  )
};

export default GGFooter;