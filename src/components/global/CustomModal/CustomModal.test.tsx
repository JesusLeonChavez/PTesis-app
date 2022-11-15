import React from "react";
import { Text } from "react-native";

import CustomModal from "./CustomModal";
import { render } from "setupTests";

describe("** CustomModal Component Test Suit **", () => {
  it("CustomModal render component", () => {
    render(
      <CustomModal visible>
        <Text>{"Testing custom modal"}</Text>
      </CustomModal>
    );
  });
});
