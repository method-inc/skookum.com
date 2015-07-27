
const HEX = {
  black: '#000',
  yellow: '#FFDD2E',
  orange: '#FAAB18',
  red: '#F16521',
};

const RGBA = {
  black: 'rgba(0, 0, 0, 0.75)',
  red: 'rgba(219, 69, 0, 0.75)',
  orange: 'rgba(245, 151, 0, 0.75)',
  yellow: 'rgba(242, 202, 0, 0.75)',
  blacklight: 'rgba(0, 0, 0, 0.75)',
};

// originally implemented for logo
const BINARY_COLOR = {
  black: null,
  red: '#fff',
  orange: '#fff',
  yellow: '#000',
};

export var nameToHex = color => HEX[color];
export var nameToRgba = color => RGBA[color];
export var nameToBinary = color => BINARY_COLOR[color];

