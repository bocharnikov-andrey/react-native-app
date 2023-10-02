import { FC, ReactNode } from "react";
import { ScrollView, StyleSheet, ViewProps } from "react-native";
import Footer from "../../Footer";

type Props = ViewProps & {
  children: ReactNode;
  stickyHeaderIndices?: number[];
  hideFooter?: boolean;
};

const PageContainer: FC<Props> = (props) => {
  const passedStyles = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;

  return (
    <ScrollView
      style={[{ ...passedStyles }, styles.container]}
      {...props}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={props.stickyHeaderIndices}
    >
      {props.children}
      {!props.hideFooter && <Footer />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageContainer;
