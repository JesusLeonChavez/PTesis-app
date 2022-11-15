import React from "react";

import TermsAndConditionsModal from "./TermsAndConditionsModal";
import { render } from "setupTests";

describe("TermsAndConditionsModal", () => {
  it("renders with default props", () => {
    render(<TermsAndConditionsModal visible onDismiss={() => {}} />);
  });
});
