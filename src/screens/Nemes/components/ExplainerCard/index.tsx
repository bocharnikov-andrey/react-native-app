import { FC } from "react";
import { Image, View } from "react-native";
import ViewRow from "components/layout/ViewRow";
import PrimaryText from "components/PrimaryText";
import { COLORS } from "constants/colors";
import Description from "./Description";
import { styles } from "./styles";

type Props = {
  explainerNotes: string;
  explainerTitle: string;
};

const ExplainerCard: FC<Props> = ({ explainerNotes, explainerTitle }) => {
  const cardColor = "#ec9191";

  const componentStyles = styles({ cardColor });

  return (
    <>
      <View style={componentStyles.descriptionBubble}>
        <ViewRow
          jc="space-between"
          ai="center"
          style={componentStyles.header}
        >
          <PrimaryText
            textColor={COLORS.black}
            fontSize={20}
            fontWeight={500}
          >
            {explainerTitle}
          </PrimaryText>
          <Image
            style={{ width: 21, height: 21 }}
            source={require("../../../../../assets/images/favicon.png")}
          />
        </ViewRow>
        <Description text={explainerNotes}/>
      </View>
      <View style={componentStyles.bubbleArrow}/>
    </>
  );
};

export default ExplainerCard;
