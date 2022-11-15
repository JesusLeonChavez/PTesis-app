import React from "react";

import PersonalInformation from "./PersonalInformation";
import { render } from "setupTests";

describe("PersonalInformation", () => {
  it("renders with default props", () => {
    render(<PersonalInformation />);
  });
});
