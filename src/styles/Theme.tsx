export const MEDIA_SIZE = {
  WEB_MAX: 1290,
  TABLET_MAX: 1024,
  MOBILE_LANDSCAPE_MAX: 767,
  MOBILE_PORTRAIT_MAX: 576,
}

export interface ThemeProps {
  backgroundColor: string;
  mainColor: string;
  mainHoverColor: string;
  mainDisabledColor: string;
  defaultFontFamily: string;
  titleFontFamily: string;
  defaultFontWeight: string;
  textBasicColor1: string;
  textBasicColor2: string;
  textPointColor: string;
  WEB_MAX: number;
  TABLET_MAX: number;
  MOBILE_LANDSCAPE_MAX: number;
  MOBILE_PORTRAIT_MAX: number;
  HEADER_HEIGHT: number;
  MOBILE_HEADER_HEIGHT: number;
}

export const InitTheme = (): ThemeProps => {
  return {
    backgroundColor: '#262865',
    mainColor: '#FF0048',
    mainHoverColor: '#FB336B',
    mainDisabledColor: '#630721',
    defaultFontFamily: 'Arial',
    titleFontFamily: 'refrigerator-deluxe, Arial, sans-serif',
    defaultFontWeight: '700',
    textBasicColor1: '#D2D4E4',
    textBasicColor2: '#7E88BA',
    textPointColor: '#7e87ff',
    WEB_MAX: MEDIA_SIZE.WEB_MAX,
    TABLET_MAX: MEDIA_SIZE.TABLET_MAX,
    MOBILE_LANDSCAPE_MAX: MEDIA_SIZE.MOBILE_LANDSCAPE_MAX,
    MOBILE_PORTRAIT_MAX: MEDIA_SIZE.MOBILE_PORTRAIT_MAX,
    HEADER_HEIGHT: 68,
    MOBILE_HEADER_HEIGHT: 52,
  }
}