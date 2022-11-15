// CheckBox Suit Test

import { render } from "@testing-library/react-native";
import React from "react";

import CheckBox from "./CheckBox";

describe("** CheckBox Component Test Suit **", () => {
  it("CheckBox render component", () => {
    render(<CheckBox active={false} onPress={() => {}} />);
  });
});
