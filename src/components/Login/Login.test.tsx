import React from "react";

import Login from "./Login";
import { render } from "setupTests";

describe("Login", () => {
  it("renders with default props", () => {
    render(<Login />);
  });
});
