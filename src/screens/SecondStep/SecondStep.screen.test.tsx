import React from "react";

import SecondStep from "./SecondStep.screen";
import { SecondStepRoute } from "./SecondStep.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("SecondStep screen", () => {
  it("renders without crashing", () => {
    render(
      <SecondStep
        //@ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<SecondStepRoute>({ name: "SecondStep" })}
      />
    );
  });
});
