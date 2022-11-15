import React from "react";

import Login from "./Login.screen";
import { LoginRoute } from "./Login.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Login screen", () => {
  it("renders without crashing", () => {
    render(
      <Login
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<LoginRoute>({ name: "Login" })}
      />
    );
  });
});
