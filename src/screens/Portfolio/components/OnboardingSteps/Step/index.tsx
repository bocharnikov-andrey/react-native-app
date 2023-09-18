import { FC, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import ViewCenter from "../../../../../components/layout/ViewCenter";
import ViewRow from "../../../../../components/layout/ViewRow";
import PrimaryText from "../../../../../components/PrimaryText";
import { COLORS } from "../../../../../constants/colors";

type Props = {
  icon: ReactNode;
  listPositionNumber: number | string;
  title: string;
  isActive: boolean;
  content?: ReactNode;
};

const Step: FC<Props> = (props) => {
  const style = styles(props.isActive);

  return (
    <View style={style.container}>
      <ViewRow jc="flex-start">
        <ViewCenter style={style.iconContainer}>{props.icon}</ViewCenter>
        <PrimaryText fontSize={18} fontWeight={500} style={style.text}>
          {props.listPositionNumber}. {props.title}
        </PrimaryText>
      </ViewRow>
      {props.content && <View style={style.content}>{props.content}</View>}
    </View>
  );
};

const styles = (isActive?: boolean) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: COLORS.darkBlue,
    },
    iconContainer: {
      marginRight: 8,
      width: 24,
      height: 24,
    },
    text: {
      color: isActive ? COLORS.white : COLORS.grey,
    },
    content: {
      marginTop: 16,
      paddingLeft: 8,
    },
  });

export default Step;
