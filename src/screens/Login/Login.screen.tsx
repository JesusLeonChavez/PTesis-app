import React from "react";

import { LoginProps as Props } from "./Login.screen.types";
import Login from "components/Login/Login";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const LoginScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Login />
    </ScreenTemplate>
  );
};

LoginScreen.defaultProps = {};

export default LoginScreen;
