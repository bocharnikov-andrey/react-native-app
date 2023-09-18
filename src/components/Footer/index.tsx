import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { socialIconList, socialIcons } from "./helpers";
import PrimaryText from "../PrimaryText";
import ViewRow from "../layout/ViewRow";
import ViewCenter from "../layout/ViewCenter";
import { COLORS } from "../../constants/colors";
import { ShieldIcon } from "../../constants/icons";

const Footer: FC = () => {
  return (
    <ViewCenter style={styles.container}>
      <ShieldIcon color={COLORS.whiteOpacity_40} />
      <ViewCenter style={styles.copyrightTextWrapper}>
        <PrimaryText fontSize={12}>Nemo is offered by Exinity ME Ltd.</PrimaryText>
        <PrimaryText fontSize={12}>Regulated by the ADGM FSRA.</PrimaryText>
      </ViewCenter>
      <ViewRow jc="center" ai="center" style={styles.socialIconsContainer}>
        {socialIconList.map((icon) => (
          <TouchableOpacity key={icon} onPress={() => null} onLongPress={() => null}>
            {socialIcons[icon]}
          </TouchableOpacity>
        ))}
      </ViewRow>
    </ViewCenter>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.darkestBlue,
  },
  copyrightTextWrapper: {
    marginTop: 8,
    marginBottom: 16,
  },
  socialIconsContainer: {
    gap: 24,
  },
});

export default Footer;
