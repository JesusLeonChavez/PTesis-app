import React from "react";

import RecoverPassword from "./RecoverPassword.screen";
import { RecoverPasswordRoute } from "./RecoverPassword.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("RecoverPassword screen", () => {
  it("renders without crashing", () => {
    render(
      <RecoverPassword
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<RecoverPasswordRoute>({
          name: "RecoverPassword"
        })}
      />
    );
  });
});
