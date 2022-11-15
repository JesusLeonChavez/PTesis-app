import React from "react";

import Notes from "./Notes";
import { render } from "setupTests";

describe("Notes", () => {
  it("renders with default props", () => {
    render(<Notes />);
  });
});
