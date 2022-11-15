import React from "react";

import Home from "./Home.screen";
import { HomeRoute } from "./Home.screen.types";
import { render } from "setupTests";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";

describe("Home", () => {
  it("renders with default props", () => {
    render(
      <Home
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<HomeRoute>({ name: "Home" })}
      />
    );
  });
});
