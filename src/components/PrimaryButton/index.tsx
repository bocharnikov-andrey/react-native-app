import { FC, ReactNode } from "react";
import { TouchableHighlight, View, TouchableHighlightProps } from "react-native";
import { styles } from "./styles";
import PrimaryText from "../PrimaryText";

export type Props = TouchableHighlightProps & {
  title: string;
  pressHandler: () => void;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  textColor?: string;
  fontWeight?: number;
  fontSize?: number;
  longPressHandler?: () => void;
  isRounded?: boolean;
  icon?: ReactNode;
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
    <TouchableHighlight
      onPress={props.pressHandler}
      onLongPress={onLongPressHandler}
      {...props}
      style={{ minWidth: 64 }}
    >
      <View style={[style.container, buttonSizeClassname]}>
        {props.icon && <View style={style.iconContainer}>{props.icon}</View>}
        <PrimaryText
          textColor={props.textColor}
          fontWeight={props.fontWeight}
          fontSize={props.fontSize}
        >
          {props.title}
        </PrimaryText>
      </View>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
