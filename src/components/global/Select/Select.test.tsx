import React from "react";

import Select from "./Select";
import { render } from "setupTests";

describe("Select Component Test Suit", () => {
  it("Select render component", () => {
    render(<Select items={[{ label: "Test", value: "test" }]} name="test" />);
  });
});
