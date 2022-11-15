import React from "react";

import { AuthProps as Props } from "./Auth.screen.types";
import Auth from "components/Auth/Auth";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const AuthScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Auth />
    </ScreenTemplate>
  );
};

AuthScreen.defaultProps = {};

export default AuthScreen;
