import React from "react";

import CreateTagBottomSheet from "./CreateTagBottomSheet";
import { render } from "setupTests";

describe("CreateTagBottomSheet", () => {
  it("renders with default props", () => {
    render(<CreateTagBottomSheet onClose={() => {}} />);
  });
});
