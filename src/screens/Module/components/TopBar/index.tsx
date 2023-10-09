import { FC } from "react";
import { Image, View } from "react-native";
import ViewRow from "components/layout/ViewRow";
import PrimaryText from "components/PrimaryText";
import { styles } from "./styles";

type Props = {
  isLoading: boolean;
  moduleName?: string;
};

const TopBar: FC<Props> = ({ isLoading, moduleName }) => {
  return (
    <ViewRow ai="center" jc="space-between" style={styles.container}>
      <Image
        style={{ width: 24, height: 24 }}
        source={require("../../../../../assets/images/favicon.png")}
      />
      <PrimaryText fontSize={16} fontWeight={700}>
        {isLoading ? "Skeleton..." : moduleName}
      </PrimaryText>
      <View style={styles.placeholder}/>
    </ViewRow>
  );
};

export default TopBar;
