import React from "react";

import ProfileNavigator from "./ProfileNavigator";
import { render } from "setupTests";

describe("Profile navigator", () => {
  it("renders without crashing", () => {
    render(<ProfileNavigator />);
  });
});
