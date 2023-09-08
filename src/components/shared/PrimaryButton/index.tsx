import { FC } from "react";
import { TouchableHighlight, View, TouchableHighlightProps } from "react-native";
import { styles } from "./styles";
import PrimaryText from "../PrimaryText";
import { COLORS } from "../../../constants/colors";
import { AddUserIcon } from "../../../constants/icons";

export type Props = TouchableHighlightProps & {
  title: string;
  pressHandler: () => void;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  textColor?: string;
  fontWeight?: number;
  longPressHandler?: () => void;
  isRounded?: boolean;
};

const PrimaryButton: FC<Props> = (props) => {
  const style = styles({ ...props });
  const getButtonSizeClassName = () => {
    switch (props.size) {
      case "small":
        return style.small;
      case "medium":
        return style.medium;
      case "large":
        return style.large;
      default:
        return null;
    }
  };
  const buttonSizeClassname = getButtonSizeClassName();

  const onLongPressHandler = () => {
    if (props.longPressHandler) {
      return props.longPressHandler();
    }

    return null;
  };

  return (
    <TouchableHighlight onPress={props.pressHandler} onLongPress={onLongPressHandler} {...props}>
      <View style={[style.container, buttonSizeClassname]}>
        <View style={style.iconContainer}>
          <AddUserIcon color={COLORS.black} />
        </View>
        <PrimaryText textColor={props.textColor} fontWeight={props.fontWeight}>
          {props.title}
        </PrimaryText>
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
