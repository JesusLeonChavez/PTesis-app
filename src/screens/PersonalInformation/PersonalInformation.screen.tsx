import React from "react";

import { PersonalInformationProps as Props } from "./PersonalInformation.screen.types";
import PersonalInformation from "components/PersonalInformation/PersonalInformation";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const PersonalInformationScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <PersonalInformation />
    </ScreenTemplate>
  );
};

PersonalInformationScreen.defaultProps = {};

export default PersonalInformationScreen;
