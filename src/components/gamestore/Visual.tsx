import { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';

const VisualWrap = styled.div<{ backgoundImg: string }>`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  ${(props): string | SerializedStyles | undefined =>
    props.backgoundImg && css`
    background: center / cover no-repeat url(${props.backgoundImg});
  `}
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 58%, #000 92%);
  }
  `;
const VisualLeftBoxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 35%;
  margin-left: 48px;
  z-index: 2;
`;
const GameLogo = styled.img`
  margin-bottom: 20px;
  width: 100%;
`;
const SubContent = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  line-height: 1.15;
  word-break: keep-all;
`;
const btnHoverAni = keyframes`
  0%, 100% {
    transform: scale(1) skew(-21deg);
  }
  50% {
    transform: scale(0.9) skew(-21deg);
  }
`;
const ViewEventBtn = styled.button`
  margin: 32px 0 48px 8px;
  width: 243px;
  min-height: 56px;
  background-image: linear-gradient(to right, #4d1fde 3%, #f310fb 97%);
  border-radius: 10px;
  transform: skew(-21deg);
  span {
    display: block;
    font-size: 20px;
    font-family: ${(props):string => props.theme.titleFontFamily};
    color: #fff;
    transform: skew(21deg);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      animation: ${btnHoverAni} 0.4s ease;
    }
  }
`;
const VisualContentListItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 12px;
  position: relative;
  margin-right: 48px;
  z-index: 2;
  `;
const VisualContentItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 18px 8px 8px;
  width: 320px;
  height: 88px;
  border-radius: 18px;
  background-color: rgb(255,255,255,0.1);
  backdrop-filter: blur(12px);
  @media (hover: hover) and (pointer : fine) {
    &:hover {
      box-shadow: 0 0 0 2px ${(props) => props.theme.mainColor} inset;
    }
  }
  ${(props): boolean | SerializedStyles | undefined => 
    props.active && css`
      box-shadow: 0 0 0 2px ${props.theme.mainColor} inset;
    `}
`;
const ContentLogo = styled.div<{ logoBoxImg: string }>`
  flex: 0 0 72px;
  background: center / contain no-repeat url(${(props) => props.logoBoxImg});
  width: 72px;
  height: 72px;
`;
const ContentsBox = styled.div`
  /* 100% - (로고 이미지 크기 - margin-left: 12px) */
  width: calc(100% - 84px);
  margin-left: 12px;
`;
const ContentTitle = styled.div`
  margin-bottom: 4px;
  font-size: 17px;
  font-weight: bold;
  color: ${(props):string => props.theme.textPointColor};
  text-transform: uppercase;
`;
const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


const VISUAL_DATA = [
  {
    gameName: 'valorant',
    gameTitleLogoImg: '/Images/games/Valorant_logo.png',
    backgroundImg: '/Images/games/img_valorant.png',
    subContent: 'Make your mark with the VALORAN',
    logoBoxImg: '/Images/games/img_valorant_box.png'
  },
  {
    gameName: 'superpeople 2.0',
    gameTitleLogoImg: 'https://cdn.geegee.net/front/f91e1c6/_next/images/v1/common/sp-logo@2x.png',
    backgroundImg: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1190340/ss_65d68e0155f532dac169b5e6d559532ea3ebe971.1920x1080.jpg?t=1672911470',
    subContent: 'Grand Open',
    logoBoxImg: '/Images/games/img_superpeople_box.png'
  },
  {
    gameName: 'league of legends',
    gameTitleLogoImg: 'https://www.leagueoflegends.com/static/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png',
    backgroundImg: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg',
    subContent: 'Lunar Revel 2023',
    logoBoxImg: '/Images/games/img_lol_box.png'
  },
  {
    gameName: 'starcraft',
    gameTitleLogoImg: 'https://static.starcraft2.com/dist/images/global/logos/img-sc2-logo--large.png',
    backgroundImg: 'https://static.starcraft2.com/dist/images/header-keyart-EN-2400.58497b98f108fbd3f01f474acbbccb29.jpg',
    subContent: '20TH Anniversary Starcraft Grand Update',
    logoBoxImg: '/Images/games/img_star_box.png'
  }
];

const Visual = ():React.ReactElement => {
  const [currentItem, setCurrentItem] = useState(VISUAL_DATA[0].gameName);
  const [currentBackgroundImg, setCurrentBackgroundImg] = useState(VISUAL_DATA[0].backgroundImg);
  const [currentLogo, setCurrentLogo] = useState(VISUAL_DATA[0].gameTitleLogoImg);
  const [currentSubContent, setCurrentSubContent] = useState(VISUAL_DATA[0].subContent);

  const onSelectList = (item: object):any => {
    if (item) {
      setCurrentItem(item.gameName);
      setCurrentBackgroundImg(item.backgroundImg);
      setCurrentLogo(item.gameTitleLogoImg);
      setCurrentSubContent(item.subContent);
    } else {
      alert('게임을 찾을 수 없습니다.')
    }
  };

  const onClickBtn = ():void => {
    alert('이벤트 페이지 준비중 입니다.');
  };

  return (
    <VisualWrap backgoundImg={currentBackgroundImg}>
      <VisualLeftBoxes>
        <GameLogo src={currentLogo} alt={currentItem} />
        <SubContent>{currentSubContent}</SubContent>
        <ViewEventBtn onClick={onClickBtn}><span>VIEW EVENTS</span></ViewEventBtn>
      </VisualLeftBoxes>
      <VisualContentListItems>
        {VISUAL_DATA && VISUAL_DATA.map((item):any => {
          return (
            <VisualContentItem 
              key={item.gameName}
              active={item.gameName === currentItem}
              onClick={() => onSelectList(item)}
            >
              {/* onclick 이벤트 왜 함수로 해야하지? */}
              <ContentLogo logoBoxImg={item.logoBoxImg} />
              <ContentsBox>
                <ContentTitle>{item.gameName}</ContentTitle>
                <Content>{item.subContent}</Content>
              </ContentsBox>
            </VisualContentItem>
          )
        })}
      </VisualContentListItems>
    </VisualWrap>
  )
};

export default Visual;