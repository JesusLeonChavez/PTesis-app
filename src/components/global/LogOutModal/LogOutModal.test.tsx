import React from "react";

import LogOutModal from "./LogOutModal";
import { render } from "setupTests";

describe("LogOutModal", () => {
  it("renders with default props", () => {
    render(<LogOutModal visible onDismiss={() => {}} />);
  });
});
