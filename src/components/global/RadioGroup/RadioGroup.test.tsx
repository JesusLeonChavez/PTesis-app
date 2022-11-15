import React from "react";

import RadioGroup from "./RadioGroup";
import { render } from "setupTests";

describe("RadioGroup Component Test Suit", () => {
  it("RadioGroup render component", () => {
    render(<RadioGroup name="test2" />);
  });
});
