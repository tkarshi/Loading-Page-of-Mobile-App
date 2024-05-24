import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Loading from "./pages/LoadingPage";
import { createStackNavigator } from "@react-navigation/stack";

function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

          headerStyle: {
            backgroundColor: "#F6AF8F",
          },
          contentStyle: {
            backgroundColor: "#F6AF8F",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
