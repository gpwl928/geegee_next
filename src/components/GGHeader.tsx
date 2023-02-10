import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { SerializedStyles } from '@emotion/utils';
// import CharacterGeeGee from "public/geegee.svg";

const aTagAcitvieColor = css`
  a {
    color: #fff;
  }
`;

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 28px;
  width: 100%;
  height: ${(props) => props.theme.HEADER_HEIGHT}px;
`;
const Logo = styled.img`
  width: 128px;
  height: auto;
`;
const MenuListItems = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-left: 36px;
  height: 100%;
`;
const MenuListItem = styled.li<{ active: boolean }>`
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: 16px;

  a {
    color: ${(props) => props.theme.textBasicColor1};
    text-transform: uppercase;
  }
  ${(props): boolean | SerializedStyles | undefined => 
    props.active && css`
      ${aTagAcitvieColor}
  `}
  @media (hover: hover) and (pointer: fine) {
    &:hover, &:active {
      ${aTagAcitvieColor}
    }
  }
`;
const MenuRightBoxes = styled.div`
  display: flex;
  align-items: center;
  column-gap: 32px;
  margin-left: auto;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  width: 320px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(100, 108, 148, 0.3);
`;
const SearchInput = styled.input`
  flex: 1;
`;
const SearchIcon = styled.button`
  width: 20px;
  height: 20px;
  background: center / contain no-repeat url("/Images/common/btn_search_d.png");
`;
const LoginBox = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 8px;
    opacity: 0.6;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      span {
        color: #fff;
        opacity: 0.8;
      }
    }
  }
`;
const ProfileImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props):string => props.theme.subBackgroundColor};
`;
const LanguageIcon = styled.div`
  width: 32px;
  height: 40px;
  background: center / contain no-repeat url("/Images/common/ico_lang_d.png");
`;
const DownArrowIcon = styled.div`
  width: 18px;
  height: 40px;
  background: center / contain url("/Images/common/ico_lang_arrow_d.png");
`;
const LanguageBox = styled.div`
  display: flex;
  aligns-items: center;
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${LanguageIcon} {
        background: center / contain no-repeat url("/Images/common/ico_lang_o.png");
      }
      ${DownArrowIcon} {
        background: center / contain no-repeat url("/Images/common/ico_lang_arrow_o.png");
      }
    }
  }
`;

const HEADER_ITEM = [
  {
    key: 'store',
    url: '/gamestore'
  },
  {
    key: 'library',
    url: '/gamelibrary'
  },
  {
    key: 'community',
    url: ''
  },
  {
    key: 'recent',
    url: ''
  },
];

const GGHeader: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <MainHeader>
      <Logo src="/Images/common/img_m_logo.png" />
      <MenuListItems>
        { HEADER_ITEM && HEADER_ITEM.map((item: any) => {
          return (
            <MenuListItem key={item.key} active={item.url === pathname}>
              <Link href={item.url}>{item.key}</Link>
            </MenuListItem>
          )
        })} 
      </MenuListItems>
      <MenuRightBoxes>
        <SearchBox>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon />
        </SearchBox>
        <LoginBox>
          <ProfileImage />
          <span>login</span>
        </LoginBox>
        <LanguageBox aria-label="language" role="button">
          <LanguageIcon />
          <DownArrowIcon />
        </LanguageBox>
      </MenuRightBoxes>
    </MainHeader>
  )
};

export default GGHeader;