import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import Portfolio from "../../screens/Portfolio/Portfolio";
import Nemes from "../../screens/Nemes/Nemes";
import Stocks from "../../screens/Stocks/Stocks";

const Tab = createBottomTabNavigator();

const Navigation: FC = () => {
  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#000",
      borderTopWidth: 0,
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="portfolio" screenOptions={screenOptions}>
        <Tab.Screen name="Portfolio" component={Portfolio} options={{ headerShown: false }} />
        <Tab.Screen name="Nemes" component={Nemes} options={{ headerShown: false }} />
        <Tab.Screen name="Stocks" component={Stocks} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
