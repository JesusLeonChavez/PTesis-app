import React from "react";

import HomeNavigator from "./HomeNavigator";
import { render } from "setupTests";

describe("Home navigator", () => {
  it("renders without crashing", () => {
    render(<HomeNavigator />);
  });
});
