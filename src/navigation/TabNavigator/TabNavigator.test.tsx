import React from "react";

import TabNavigator from "./TabNavigator";
import { render } from "setupTests";

describe("Tab navigator", () => {
  it("renders without crashing", () => {
    render(<TabNavigator />);
  });
});
