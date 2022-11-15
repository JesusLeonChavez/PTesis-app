import React from "react";

import PersonalInformation from "./PersonalInformation.screen";
import { PersonalInformationRoute } from "./PersonalInformation.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("ConfirmationPassword screen", () => {
  it("renders without crashing", () => {
    render(
      <PersonalInformation
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<PersonalInformationRoute>({
          name: "PersonalInformation"
        })}
      />
    );
  });
});
