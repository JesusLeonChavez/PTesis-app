import React from "react";

import ColorPicker from "./ColorPicker";
import { render } from "setupTests";

describe("ColorPicker", () => {
  it("renders with default props", () => {
    render(<ColorPicker selectedColor="" setColor={() => {}} />);
  });
});
