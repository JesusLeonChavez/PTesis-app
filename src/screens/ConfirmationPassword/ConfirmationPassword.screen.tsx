import React from "react";

import { ConfirmationPasswordProps as Props } from "./ConfirmationPassword.screen.types";
import ConfirmationPassword from "components/ConfirmationPassword/ConfirmationPassword";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const ConfirmationPasswordScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <ConfirmationPassword />
    </ScreenTemplate>
  );
};

ConfirmationPasswordScreen.defaultProps = {};

export default ConfirmationPasswordScreen;
