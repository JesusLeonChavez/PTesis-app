import React from "react";

import ConfirmationPassword from "./ConfirmationPassword.screen";
import { ConfirmationPasswordRoute } from "./ConfirmationPassword.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("ConfirmationPassword screen", () => {
  it("renders without crashing", () => {
    render(
      <ConfirmationPassword
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<ConfirmationPasswordRoute>({
          name: "ConfirmationPassword"
        })}
      />
    );
  });
});
