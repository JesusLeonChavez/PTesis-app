import React from "react";

import RadioItem from "./RadioItem";
import { render } from "setupTests";

describe("RadioItem Component Test Suit", () => {
  it("RadioItem render component", () => {
    render(<RadioItem label="test" value="p" onPress={() => {}} />);
  });
});
