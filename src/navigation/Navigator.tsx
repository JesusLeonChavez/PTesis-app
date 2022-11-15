import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { navigationRef } from "./Navigator.helpers";
import { NavigatorProps as Props, NavigatorScreens } from "./Navigator.types";
import TabNavigator from "./TabNavigator/TabNavigator";
import useGlobal from "contexts/global/global.hooks";
import AuthScreen from "screens/Auth/Auth.screen";
import ConfirmationPasswordScreen from "screens/ConfirmationPassword/ConfirmationPassword.screen";
import LoginScreen from "screens/Login/Login.screen";
import NewTaskScreen from "screens/NewTask/NewTask.screen";
import Notes from "screens/Notes/Notes.screen";
import PersonalInformation from "screens/PersonalInformation/PersonalInformation.screen";
import RecoverPasswordScreen from "screens/RecoverPassword/RecoverPassword.screen";
import RegisterScreen from "screens/Register/Register.screen";
import SecondStepScreen from "screens/SecondStep/SecondStep.screen";
import ServerError from "screens/ServerError/ServerError.screen";

const Stack = createStackNavigator<NavigatorScreens>();

const Navigator: React.FC<Props> = props => {
  const { setIsNavigationReady } = useGlobal();

  const routeNameRef = useRef<string>();

  const onReadyNavigation = () => {
    setIsNavigationReady(true);
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  const stateChangeHandler = () => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReadyNavigation}
        onStateChange={stateChangeHandler}
      >
        <Stack.Navigator key="root" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="RecoverPassword"
            component={RecoverPasswordScreen}
          />
          <Stack.Screen
            name="ConfirmationPassword"
            component={ConfirmationPasswordScreen}
          />
          <Stack.Screen name="SecondStep" component={SecondStepScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen
            name="PersonalInformation"
            component={PersonalInformation}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTaskScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{ headerShown: true }}
          />
          <Stack.Screen name="ServerError" component={ServerError} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

Navigator.defaultProps = {};

export default Navigator;
