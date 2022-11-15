import React from "react";

import StatisticsNavigator from "./StatisticsNavigator";
import { render } from "setupTests";

describe("Statistics navigator", () => {
  it("renders without crashing", () => {
    render(<StatisticsNavigator />);
  });
});
