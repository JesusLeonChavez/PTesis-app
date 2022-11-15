// Button Test Suit

import { render } from "@testing-library/react-native";
import React from "react";

import Button from "./Button";

describe("Button Component Test Suit", () => {
  it("Button render component", () => {
    render(<Button onPress={() => {}}>Text</Button>);
  });
});
