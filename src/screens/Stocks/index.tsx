import { FC } from "react";
import { StyleSheet } from "react-native";
import PageContainer from "../../components/layout/PageContainer";
import StockList from "./components/StocksList";
import { STOCKS } from "./helpers";
import Header from "./components/Header";

const Stocks: FC = () => {
  return (
    <PageContainer style={styles.container} stickyHeaderIndices={[0]}>
      <Header />
      <StockList stocks={STOCKS} />
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

export default Stocks;
