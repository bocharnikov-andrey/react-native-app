import { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import CenterView from "../shared/CenterView";
import RowDirectionView from "../shared/RowDirectionView";
import PrimaryButton from "../shared/PrimaryButton";
import { COLORS } from "../../constants/colors";

type Props = {
  navigationRef: any;
};

const TopBar: FC<Props> = ({ navigationRef }) => {
  const returnToMainPage = () => {
    const currentRoute = navigationRef.current.getCurrentRoute().name;

    if (currentRoute !== "Portfolio") {
      navigationRef.current?.navigate("Portfolio");
    }
  };

  return (
    <CenterView style={styles.topBar}>
      <RowDirectionView style={styles.wrapper}>
        <TouchableOpacity onPress={returnToMainPage} onLongPress={() => null}>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <View>
          <PrimaryButton
            title="Create account"
            pressHandler={() => null}
            isRounded
            size="small"
            textColor={COLORS.black}
          />
        </View>
      </RowDirectionView>
    </CenterView>
  );
};

export default TopBar;
