import React from "react";

import { RegisterProps as Props } from "./Register.screen.types";
import Register from "components/Register/Register";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const RegisterScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <Register />
    </ScreenTemplate>
  );
};

RegisterScreen.defaultProps = {};

export default RegisterScreen;
