import { render } from "@testing-library/react-native";
import React from "react";

import RadioButton from "./RadioButton";

describe("** RadioButton Component Test Suit **", () => {
  it("RadioButton render component", () => {
    render(<RadioButton isSelected />);
  });
});
