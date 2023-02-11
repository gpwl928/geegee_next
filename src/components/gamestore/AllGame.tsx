import { useEffect, useState } from 'react';
import Link from 'next/link'
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';

const TagListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  }
`;
const TagListItem = styled.label`
  display: inline-block;
  padding: 4px 12px 3px;
  height: 100%;
  border: 1px solid ${(props):string => props.theme.textBasicColor2};
  border-radius: 14px;
  span {
    font-size: 15px;
    color: ${(props):string => props.theme.textBasicColor2};
    text-transform: uppercase;
    &::before {
      content: '#';
      font-size: inherit;
      color: inherit;
    }
  }
`;
const CheckBox = styled.input`
  display: none;
  &:checked + ${TagListItem} {
      background: ${(props):string => props.theme.textPointColor};
      border: 1px solid ${(props):string => props.theme.textPointColor};
      span {
        color: #0e114b;
      }
  }
`;
const GameListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px 20px;
  margin-top: 28px;
  @media (max-width: ${(props):number => props.theme.TABLET_MAX}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${(props):number => props.theme.MOBILE_LANDSCAPE_MAX}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const GameImgBox = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 16px;
  width: 100%;
  border-radius: 28px;
`;
const GameImg = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 39 / 50;
`;
const Star = styled.div`
  font-size: 20px;
  &::before {
    content: '⭐';
    margin-right: 4px;
  }
`;
const GameImgHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  p {
    font-size: 24px;
  }
  p, ${Star} {
    color: #fff;
    font-weight: bolder;
    font-family: ${(props):string => props.theme.titleFontFamily};
  }
`;
const GameTitle = styled.h3``;
const GameListItem = styled.li`
@media (hover: hover) and (pointer: fine) {
  &:hover {
    ${GameImgHover} {
      opacity: 1;
    }
    ${GameTitle} {
      color: #fff;
    }
  }
}
`;
const GamePrice = styled.div`
  color: ${(props) => props.theme.textPointColor};
  &::before {
    content: '$';
    font-size: inherit;
    color: inherit;
  }
`;
const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${GameTitle}, ${GamePrice} {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.17;
  }
`;
const GameGenreBox = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 8px;
  margin-top: 8px;
`;
const GameGenre = styled.span`
  font-size: 17px;
  color: ${(props) => props.theme.textBasicColor2};
  text-transform: uppercase;
  &::before {
    content: '#';
    font-size: inherit;
    color: inherit;
  }
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;
const MoreBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: ${(props):string => props.theme.subBackgroundColor};
  border-radius: 20px;
  &:hover {
    @media (hover: hover) and (pointer: fine) {
      background-color: #4e5289;
    }
  }
  `;


const TAG_LIST = [
  'all', 'mmorpg', 'role playing', 'fps', 'adventure', 'action rpg', 'moba', 'arcade', 'racing', 'action', 'shooting'
]

const GAME_LIST = [
  {
    name: 'Apex Legends',
    price: '24.25',
    genre: ['fps'],
    img: '/Images/games/img_apex.png',
    url: '/gamestore',
    star: '5.0'
  },
  {
    name: 'V Rising',
    price: '16.57',
    genre: ['mmo', 'advanture'],
    img: '/Images/games/img_vrising.png',
    url: '/gamestore',
    star: '4.0'
  },
  {
    name: 'Battlefield V',
    price: '4.45',
    genre: ['fps'],
    img: '/Images/games/img_battlefield.png',
    url: '/gamestore',
    star: '4.5'
  },
  {
    name: 'Warframe',
    price: '6.8',
    genre: ['action rpg', 'mmo'],
    img: '/Images/games/img_warframe.png',
    url: '/gamestore',
    star: '4.2'
  },
  {
    name: 'Asphalt 9: Legends',
    price: '24.25',
    genre: ['racing'],
    img: '/Images/games/img_asphalt9.png',
    url: '/gamestore',
    star: '5.0'
  },
  {
    name: 'Stumble Guys',
    price: '16.57',
    genre: ['casual', 'action'],
    img: '/Images/games/img_stumble.png',
    url: '/gamestore',
    star: '4.0'
  },
  {
    name: 'PAYDAY 2',
    price: '4.45',
    genre: ['fps', 'shooting'],
    img: '/Images/games/img_payday.png',
    url: '/gamestore',
    star: '3.8'
  },
  {
    name: 'DESTINY : GUARDIANS',
    price: '6.8',
    genre: ['shooting', 'mmo'],
    img: '/Images/games/img_destiny.png',
    url: '/gamestore',
    star: '4.1'
  }
];

const AllGame = ():React.ReactElement => {
  const [currentList, setCurrentList] = useState(GAME_LIST);

  const onSeclectTag = (event: any):void => {
    console.log(event);
    let select = event.target.id;
    if (select === 'all') {
      setCurrentList(GAME_LIST);
    } else {
      let data  = GAME_LIST.filter((item: any) => item.genre.find((item: any) => item === select));
      console.log('data', data);
      setCurrentList(data);
      console.log(currentList);
    }
  };

  const onMoreList = ():void => {
    // 태그선택 초기화한 후
    // 모든 게임 리스트에서 게임 리스트 추가하기
    // 백엔드와 통신할땐 그냥.. 몇개 추가할지 넣어서 데이터 호출하면 될 것 같다
    setCurrentList(currentList);
    let newList;
  };

  return (
    <>
      <TagListItems>
        {TAG_LIST && TAG_LIST.map((item, index):any => {
          return (
            <>
              <CheckBox 
                type="checkbox" 
                id={item} 
                name={item === 'all' ? 'all' : 'tag'} 
                key={item + index} 
                onClick={() => onSeclectTag(event)} 
              />
              <TagListItem htmlFor={item}>
                <span>{item}</span>
              </TagListItem>
            </>
          )
        })}
      </TagListItems>
      <GameListItems>
        {currentList && currentList.map((item):any => {
          return (
            <GameListItem key={item.name}>
              <Link href='/'>
                <GameImgBox>
                  <GameImg src={item.img} alt={item.name} />
                  <GameImgHover>
                    <p>{item.name}</p>
                    <Star>{item.star}</Star>
                  </GameImgHover>
                </GameImgBox>
                <GameInfo>
                  <GameTitle>{item.name}</GameTitle>
                  <GamePrice>{item.price}</GamePrice>
                </GameInfo>
                <GameGenreBox>
                  {item.genre && item.genre.map((genre) => {
                    return (
                      <GameGenre key={genre}>{genre}</GameGenre>
                    )
                  })}
                </GameGenreBox>
              </Link>
            </GameListItem>
          )
        })}
      </GameListItems>
      <BtnBox>
        <MoreBtn onClick={onMoreList}>More</MoreBtn>
      </BtnBox>
    </>
  )
};

export default AllGame;