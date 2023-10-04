import { FC } from "react";
import { Text, View, StyleSheet, TouchableHighlight, ImageBackground, Image } from "react-native";
import { ThemeLight } from "../../../../../../../../../../types/theme";
import ViewRow from "../../../../../../../../../../components/layout/ViewRow";

type Props = {
  theme: ThemeLight;
  moduleName: string;
  moduleRank: number;
};

const ThemeCard: FC<Props> = ({ theme, moduleName, moduleRank }) => {
  // const fetchSymbols = async () => {
  //     try {
  //       const response = await getSymbolsByThemeTemplate(
  //         theme.template,
  //         theme.stockSymbols,
  //         limit
  //       );
  //       setSymbols(response);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setInitializing(false);
  //     }
  //   };
  //
  //   useEffect(() => {
  //     if (lazyImage.inView && isEmpty(symbols) && !isEmpty(theme.stockSymbols)) {
  //       fetchSymbols();
  //     }
  //   }, [lazyImage.inView, symbols, theme]);
  //
  //  const goToStockDetails = (stockId: string) => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: moduleName,
  //       module_display_name: moduleName,
  //       module_rank: moduleRank,
  //       interaction: "instrument_click",
  //     });
  //     mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //     navigate(getStockPath(stockId));
  //   };
  //
  //   const goToThemeDetails = () => {
  //     mParticleEventTracker("module_interaction", {
  //       module_name: moduleName,
  //       module_display_name: moduleName,
  //       module_rank: moduleRank,
  //       interaction: "theme_click",
  //     });
  //     mParticleSetModuleDataToUserAttributes(moduleName, moduleRank);
  //     navigate(getThemeDetailsPath(theme.id), {
  //       state: { referrer: window.location.pathname, rank: moduleRank },
  //     });
  //   };

  const handleViewAllClick = () => {
    console.log("View all clicked");
  };

  return (
    <TouchableHighlight onPress={handleViewAllClick}>
      <ImageBackground
        source={{ uri: theme.picture }}
        resizeMode="cover"
        style={styles.imageBgContainer}
        imageStyle={styles.imageBgImage}
      >
        <View style={styles.container}>
          <ViewRow style={styles.favouriteButtonContainer}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../../../../../../../../assets/images/favicon.png")}
            />
          </ViewRow>
          {/* todo */}
        </View>
      </ImageBackground>
    </TouchableHighlight>

    <StyledThemeCard source={lazyImage.src} ref={lazyImage.ref}>
      <Flex justifyContent="flex-end">
        <FavoriteThemeButton
          theme={theme}
          style="dark-contained"
          iconStyle="filled"
        />
      </Flex>
      <StyledContent>
        <FlexColumn gap=".5rem" justifyContent="flex-end">
          <Typography variant="heading4Bold">{name}</Typography>
          <StocksBadge
            withBackground="black"
            stocks={getStocksCount(
              template,
              nemesStore.analystChangesAmount,
              stockSymbols.length
            )}
          />
          <Typography variant="bodyLRegular">
            <RichText content={shortDescription} />
          </Typography>
        </FlexColumn>
        <FlexColumn gap=".75rem">
          <GridGap gap=".75rem" gridAutoFlow="row" minWidth="100%">
            {renderSymbols()}
          </GridGap>
          <PrimaryButton
            title="View more"
            style="blue"
            onClick={goToThemeDetails}
          />
        </FlexColumn>
      </StyledContent>
    </StyledThemeCard>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageBgContainer: {
    justifyContent: "space-between",
    padding: 4,

    // height: "auto",
    // minHeight: 610,
    // marginTop: 16,
    // marginHorizontal: 16,
    // marginBottom: 8,

    //   box-shadow: inset 0 0 0 2px ${COLOR_WHITE_20};
    //   background: ${(props) =>
    //     `linear-gradient(179.97deg, rgba(0, 0, 0, 0) 0.03%, #000000 68.07%), url(${props.source}) no-repeat`};
    //   padding: 0.25rem;
  },
  imageBgImage: {
    height: "auto",
    minHeight: 610,
    borderRadius: 16,
  },
  favouriteButtonContainer: {
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default ThemeCard;
