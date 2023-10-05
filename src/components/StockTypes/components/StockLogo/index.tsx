import { FC } from "react";
import { View, StyleSheet, ViewProps, Image } from "react-native";
import { COLORS } from "../../../../constants/colors";

type Props = ViewProps & {
  src?: string;
  size?: number;
  backgroundColorLogo?: string;
  logoColor?: string;
};

const StockLogo: FC<Props> = (props) => {
  const {
    src,
    size,
    backgroundColorLogo = COLORS.blackOpacity_10,
    logoColor = COLORS.blackOpacity_20,
    style,
    ...viewProps
  } = props;

  // const [isError, setIsError] = useState(false);
  //
  //   const onImageError = () => {
  //     setIsError(true);
  //   };

  const containerStyles = [
    style,
    {
      height: size ?? 40,
      width: size ?? 40,
      minWidth: size ?? 40,
    }
  ];

  return (
    <View style={containerStyles} {...viewProps}>
      {/*
        {isError || !src ? (
        <StyledStockLogoWrapper color={backgroundColorLogo}>
          <NemoLogoSmall color={logoColor} />
        </StyledStockLogoWrapper>
      ) : (
        <StyledStockLogo src={src} onError={onImageError} />
      )}
      */}
      <Image source={{uri: src}} resizeMode="cover" style={styles.logoImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 26,
    backgroundColor: COLORS.whiteOpacity_5,
  },
});

export default StockLogo;
