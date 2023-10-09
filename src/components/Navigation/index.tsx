import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC, useRef } from "react";
import { Image, Text, View } from "react-native";
import TopBar from "../TopBar";
import { COLORS } from "../../constants/colors";
import Portfolio from "../../screens/Portfolio";
import Nemes from "../../screens/Nemes";
import Stocks from "../../screens/Stocks";
import { NavigationPath, RootStackParamList } from "../../types/navigation";
import ModuleScreen from "../../screens/Module";

const Tab = createBottomTabNavigator<RootStackParamList>();

const PATHS: NavigationPath[] = [
  { id: 1, name: "Portfolio", component: Portfolio },
  { id: 2, name: "Nemes", component: Nemes },
  { id: 3, name: "Stocks", component: Stocks },
  { id: 4, name: "Module", component: ModuleScreen },
];

const Navigation: FC = () => {
  const navigationRef = useRef<NavigationContainerRef<any> | null>(null);

  const screenOptions: any = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      height: 60,
      backgroundColor: COLORS.black,
      borderTopWidth: 0,
    },
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <TopBar navigationRef={navigationRef} />
      <Tab.Navigator initialRouteName="Portfolio" screenOptions={screenOptions}>
        {PATHS.map((p) => (
          <Tab.Screen
            key={p.id}
            name={p.name}
            initialParams={{ filter: "All" }}
            component={p.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../../../assets/images/favicon.png")}
                  />
                  <Text
                    style={{ fontSize: 12, color: focused ? COLORS.white : COLORS.whiteOpacity_40 }}
                  >
                    {p.name}
                  </Text>
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
