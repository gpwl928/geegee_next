import Link from 'next/link'
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/utils';
import Slider from 'react-slick';
import Visual from '@/components/gamestore/Visual';
import AllGame from '@/components/gamestore/AllGame';
import MainLayout from '@/components/layout/MainLayout';

const CommonSectionStyle = css`
  margin: 0 auto;
  max-width: 1600px;
`;
const SlickImgHover = css`
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
  }
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
  height: 36px;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  font-family: ${(props):string => props.theme.titleFontFamily};
  font-size: 24px;
  color: #fff;
  text-transform: uppercase;
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
const PrevSlideBtn = styled.button`
  right: 40px;
`;
const NextSlideBtn = styled.button`
  right: 0;
  transform: scaleX(-1);
`;
const SlickBox = styled.div`
  ${PrevSlideBtn}, ${NextSlideBtn} {
    position: absolute;
    top: -50px;
    width: 32px;
    height: 32px;
    background: center / cover no-repeat url("/Images/common/btn_prev.png");
    &:hover {
      @media (hover: hover) and (pointer: fine) {
        &::after {
          content: '';
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  position: relative;
  .slick-list {
    overflow: hidden;

    .slick-track {
      display: flex;
      column-gap: 20px;
      height: 100%;

      .slick-slide {
        height: 100%;
      }
    }
  }
`;
const TrendingSlickItem = styled.div<{ backgroundImg: string }>`
  overflow: hidden;
  height: 100%;
  ${(props): string | SerializedStyles | undefined =>
    props.backgroundImg && css`
      background: center / cover no-repeat url(${props.backgroundImg});
    `
  }
  border-radius: 28px;
  aspect-ratio: 25 / 12;
  &:hover {
    @media (hover: hover) and (pointer: fine) {
      ${SlickImgHover}
    }
  }
`;
const DiscountSlickItemImg = styled.div<{ backgroundImg: string }>`
  overflow: hidden;
  position: relative;
  height: 100%;
  margin-bottom: 16px;
  ${(props): string | SerializedStyles | undefined =>
    props.backgroundImg && css`
      background: center / cover no-repeat url(${props.backgroundImg});
    `
  }
  border-radius: 28px;
  aspect-ratio: 50 / 27;
`;
const DiscountSlickItemDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 96px;
  height: 34px;
  background: center / contain no-repeat url("/Images/common/img_sale.png");
  top: 4.7%;
  right: 3%;
  font-size: 18px;
  font-family: ${(props):string => props.theme.titleFontFamily};
  color: #fff;
`;
const DiscountSlickItemTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;
const DiscountSlickItemPeriod = styled.p`
  margin-top: 8px;
  font-size: 17px;
  color: ${(props):string => props.theme.textBasicColor2};
`;
const DiscountSlickItem = styled.div`
&:hover {
  @media (hover: hover) and (pointer: fine) {
    ${DiscountSlickItemImg} {
      ${SlickImgHover}
    }
    ${DiscountSlickItemTitle} {
      color: #fff;
    }
  }
}
`;

const TRENDING_GAME_DATA = {
  key: 'trending game',
  url: '/gamestore',
  data: [
    {
      name: 'LineageM',
      img: 'https://res09.bignox.com/appcenter/kr/2019/10/%EB%A6%AC%EB%8B%88%EC%A7%80M-lit.jpg',
      url: ''
    },
    {
      name: 'Fifa online 4',
      img: '/Images/games/img_fifa.png',
      url: ''
    },
    {
      name: 'overwatch2',
      img: '/Images/games/img_overwatch.png',
      url: ''
    },
    {
      name: 'DEADSAPCE',
      img: 'https://cdn2.unrealengine.com/egs-dead-space-breaker-1920x1080-53879dc46ea2.jpg?h=720&resize=1&w=1280',
      url: ''
    }
  ]
};

const DISCOUNT_GAME_DATA = {
  key: 'discount or free game',
  url: '/',
  data: [
    {
      name: 'Fortnite : Zero Build',
      period: 'Now - Jan 27 at 01:00 AM',
      discountPercentage: 100,
      img: 'https://cdn2.unrealengine.com/en-23br-zerobuild-1p-1920x1080-1920x1080-7bb21824d768.jpg',
      url: ''
    },
    {
      name: 'Kartrider : Drift',
      period: 'Jan 27 - Feb 03',
      discountPercentage: 80,
      img: '/Images/games/img_kart.png',
      url: ''
    },
    {
      name: 'The Sims™ 4',
      period: 'Jan 27 - Feb 28',
      discountPercentage: 70,
      img: 'https://cdn1.epicgames.com/offer/2a14cf8a83b149919a2399504e5686a6/EGS_TheSims4_ElectronicArts_S1_2560x1440-330b00849edfdacc61578d1486f47b31?h=500&resize=1&w=854',
      url: ''
    }
  ]
};

const PrevArrow: React.FC = (props:any) => {
  const { onClick } = props;

  return (
    <PrevSlideBtn
      onClick={onClick}
    />
  )
}
const NextArrow: React.FC = (props:any) => {
  const { onClick } = props;

  return (
    <NextSlideBtn
      onClick={onClick}
    />
  )
}
const TRENDING_GAME_SLICK_SETTING = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};
const DISCOUNT_GAME_SLICK_SETTING = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />
};



const GameStore: React.FC = () => {

  return (
    <MainLayout>
      <VisualSection>
        <Visual />
      </VisualSection>
      {/* trending game section */}
      <SectionLayout>
        <TitleBox>
          <Link href={TRENDING_GAME_DATA.url}>
            <Title>{TRENDING_GAME_DATA.key}</Title>
          </Link>
        </TitleBox>
        <SlickBox>
          <Slider {...TRENDING_GAME_SLICK_SETTING}>
            {TRENDING_GAME_DATA.data && TRENDING_GAME_DATA.data.map((item) => {
              return (
                <Link href={item.url} key={item.name}>
                  <TrendingSlickItem backgroundImg={item.img} />
                </Link>
              )
            })}
          </Slider>
        </SlickBox>
      </SectionLayout>
      {/* discount or free game section */}
      <SectionLayout>
        <TitleBox>
          <Link href={DISCOUNT_GAME_DATA.url}>
            <Title>{DISCOUNT_GAME_DATA.key}</Title>
          </Link>
        </TitleBox>
        <SlickBox>
          <Slider {...DISCOUNT_GAME_SLICK_SETTING}>
              {DISCOUNT_GAME_DATA.data && DISCOUNT_GAME_DATA.data.map((item) => {
                return (
                  <Link href={item.url} key={item.name}>
                    <DiscountSlickItem>
                      <DiscountSlickItemImg backgroundImg={item.img}>
                        <DiscountSlickItemDiscount>
                          -{item.discountPercentage}%
                        </DiscountSlickItemDiscount>
                      </DiscountSlickItemImg>
                      <DiscountSlickItemTitle>{item.name}</DiscountSlickItemTitle>
                      <DiscountSlickItemPeriod>{item.period}</DiscountSlickItemPeriod>
                    </DiscountSlickItem>
                  </Link>
                )
              })}
          </Slider>
        </SlickBox>
      </SectionLayout>
      {/* all game */}
      <SectionLayout>
        <TitleBox>
          <Link href="/gamestore">
            <Title>all game</Title>
          </Link>
        </TitleBox>
        <AllGame />
      </SectionLayout>
    </MainLayout>
  )
};

export default GameStore;