import React from "react";

import TabIcon from "./TabIcon";
import { render } from "setupTests";

describe("TabIcon", () => {
  it("renders with default props", () => {
    render(<TabIcon icon={<></>} tabText="Home" />);
  });
});
