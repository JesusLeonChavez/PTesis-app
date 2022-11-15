import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { TabNavigatorScreens } from "./TabNavigator/TabNavigator.types";
import { AuthParams } from "screens/Auth/Auth.screen.types";
import { ConfirmationPasswordParams } from "screens/ConfirmationPassword/ConfirmationPassword.screen.types";
import { LoginParams } from "screens/Login/Login.screen.types";
import { NewTaskParams } from "screens/NewTask/NewTask.screen.types";
import { NotesParams } from "screens/Notes/Notes.screen.types";
import { PersonalInformationParams } from "screens/PersonalInformation/PersonalInformation.screen.types";
import { RecoverPasswordParams } from "screens/RecoverPassword/RecoverPassword.screen.types";
import { RegisterParams } from "screens/Register/Register.screen.types";
import { SecondStepParams } from "screens/SecondStep/SecondStep.screen.types";
import { ServerErrorParams } from "screens/ServerError/ServerError.screen.types";

// Component props
export interface NavigatorProps {}

// Navigator screens and screens params
export type NavigatorScreens = {
  AuthScreen?: AuthParams;
  Login?: LoginParams;
  RecoverPassword?: RecoverPasswordParams;
  Register?: RegisterParams;
  ConfirmationPassword?: ConfirmationPasswordParams;
  TabNavigator?: NavigatorScreenParams<TabNavigatorScreens>;
  ServerError?: ServerErrorParams;
  SecondStep?: SecondStepParams;
  Notes?: NotesParams;
  PersonalInformation?: PersonalInformationParams;
  NewTask?: NewTaskParams;
};

export type NavigatorPropList = CompositeNavigationProp<
  StackNavigationProp<NavigatorScreens>,
  BottomTabNavigationProp<TabNavigatorScreens>
>;
