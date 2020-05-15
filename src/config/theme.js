const colors = {
  primary: '#243980',
  lightPrimary: '#9BC1D9',
  subprimary: '#988080',
  lightSubprimary: '#FCDCDC',
  grey: '#B9BAC1',
  orange: '#EE6B4A',
  dark: '#000000',
  red: 'red',
  white: '#FFFFFF'
};

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
};

const theme = {
  colors: colors,
  sizes: devices
};
export { theme };
