import React from "react";

import Auth from "./Auth";
import { render } from "setupTests";

describe("Auth", () => {
  it("renders with default props", () => {
    render(<Auth />);
  });
});
