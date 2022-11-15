import React from "react";

import NewTask from "./NewTask";
import { render } from "setupTests";

describe("NewTask", () => {
  it("renders with default props", () => {
    render(<NewTask />);
  });
});
