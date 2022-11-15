import React from "react";

import Register from "./Register.screen";
import { RegisterRoute } from "./Register.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Register screen", () => {
  it("renders without crashing", () => {
    render(
      <Register
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<RegisterRoute>({ name: "Register" })}
      />
    );
  });
});
