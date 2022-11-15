import React from "react";

import Register from "./Register";
import { render } from "setupTests";

describe("Register", () => {
  it("renders with default props", () => {
    render(<Register />);
  });
});
