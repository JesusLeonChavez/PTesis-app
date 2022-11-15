import React from "react";

import { RecoverPasswordProps as Props } from "./RecoverPassword.screen.types";
import RecoverPassword from "components/RecoverPassword/RecoverPassword";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const RecoverPasswordScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <RecoverPassword />
    </ScreenTemplate>
  );
};

RecoverPasswordScreen.defaultProps = {};

export default RecoverPasswordScreen;
