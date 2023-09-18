import { FC } from "react";
import { TouchableHighlight } from "react-native";
import PrimaryText from "../../../../../components/PrimaryText";
import { styles } from "./styles";
import { COLORS } from "../../../../../constants/colors";

type Props = {
  title: string;
  isFirstElement: boolean;
  isLastElement: boolean;
  isActive: boolean;
  onPressHandler: () => void;
};

const Item: FC<Props> = (props) => {
  const style = styles({
    isActive: props.isActive,
    isFirstElement: props.isFirstElement,
    isLastElement: props.isLastElement,
  });

  return (
    <TouchableHighlight
      style={style.container}
      onPress={props.onPressHandler}
      onLongPress={() => null}
    >
      <PrimaryText
        fontSize={14}
        fontWeight={500}
        textColor={props.isActive ? COLORS.black : COLORS.white}
      >
        {props.title}
      </PrimaryText>
    </TouchableHighlight>
  );
};

export default Item;
