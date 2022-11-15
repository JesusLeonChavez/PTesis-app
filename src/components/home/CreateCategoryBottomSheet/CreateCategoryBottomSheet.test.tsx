import React from "react";

import CreateCategoryBottomSheet from "./CreateCategoryBottomSheet";
import { render } from "setupTests";

describe("CreateCategoryBottomSheet", () => {
  it("renders with default props", () => {
    render(<CreateCategoryBottomSheet onClose={() => {}} />);
  });
});
