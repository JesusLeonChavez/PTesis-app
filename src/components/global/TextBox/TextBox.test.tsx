// TextBox Suit Test

import { render } from "@testing-library/react-native";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import TextBox from "./TextBox";
import variables from "styles/util/variables";

describe("** TextBox Component Test Suit **", () => {
  beforeAll(() => {
    EStyleSheet.build(variables);
  });

  it("TextBox render component", () => {
    render(
      <TextBox
        name="email"
        type="email"
        label="Email"
        placeholder="PlaceHolder"
        blurOnSubmit
        returnKeyType={"next"}
        onSubmitEditing={() => {}}
      />
    );
  });
});
