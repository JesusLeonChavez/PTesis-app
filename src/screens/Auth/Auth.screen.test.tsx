import React from "react";

import Auth from "./Auth.screen";
import { AuthRoute } from "./Auth.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Auth screen", () => {
  it("renders without crashing", () => {
    render(
      <Auth
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<AuthRoute>({ name: "AuthScreen" })}
      />
    );
  });
});
