// HeaderScreen Suit Test

import React from "react";

import HeaderScreen from "./HeaderScreen";
import { render } from "setupTests";

describe("** HeaderScreen Component Test Suit **", () => {
  it("HeaderScreen render component", () => {
    render(
      <HeaderScreen
        onPressLeftButton={() => {}}
        primaryTitle="Title"
        onPressRightButton={() => {}}
      />
    );
  });
});
