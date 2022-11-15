import React from "react";

import Statistics from "./Statistics.screen";
import { StatisticsRoute } from "./Statistics.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Statistics screen", () => {
  it("renders without crashing", () => {
    render(
      <Statistics
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<StatisticsRoute>({ name: "Statistics" })}
      />
    );
  });
});
