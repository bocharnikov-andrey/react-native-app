const WHITE_OPACITY = (opacity = 0.5) => {
  return `rgba(255, 255, 255, ${opacity})`;
};

const BLACK_OPACITY = (opacity = 0.5) => {
  return `rgba(0, 0, 0, ${opacity})`;
};

export const COLORS = {
  white: "#FFF",
  whiteOpacity_5: WHITE_OPACITY(0.05),
  whiteOpacity_10: WHITE_OPACITY(0.1),
  whiteOpacity_40: WHITE_OPACITY(0.4),
  whiteOpacity_60: WHITE_OPACITY(0.6),
  whiteOpacity_80: WHITE_OPACITY(0.8),
  black: "#000",
  blackOpacity_40: BLACK_OPACITY(0.4),
  green: "#00FF90",
  blue: "#4a01ff",
  lightBlue: "#5090fd",
  darkBlue: "#262438",
  darkestBlue: "#10192d",
  grey: "#747474",
  yellow: "yellow",
};
