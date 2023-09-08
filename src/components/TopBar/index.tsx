import { FC } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import PrimaryButton from "../shared/PrimaryButton";
import ViewCenter from "../shared/ViewCenter";
import ViewRow from "../shared/ViewRow";
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
    <ViewCenter style={styles.container}>
      <ViewRow style={styles.content}>
        <TouchableOpacity onPress={returnToMainPage} onLongPress={() => null}>
          <Image
            source={require("../../../assets/images/favicon.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <PrimaryButton
          title="Create account"
          pressHandler={() => null}
          isRounded
          size="small"
          textColor={COLORS.black}
        />
      </ViewRow>
    </ViewCenter>
  );
};

export default TopBar;
