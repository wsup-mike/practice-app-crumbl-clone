import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import RootNavigator from "./RootNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootNavigator />
    </NavigationContainer>
  );
}
