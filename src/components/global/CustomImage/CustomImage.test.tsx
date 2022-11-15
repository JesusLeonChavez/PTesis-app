// CustomImage Suit Test

import { cleanup, render } from "@testing-library/react-native";
import React from "react";

import CustomImage from "./CustomImage";

const image = {
  url: "https://s3.amazonaws.com/admin.kfc.production/products/5f2a25c9a481d_42502 - FESTIN SIN IGUAL BITES.png"
};

afterAll(() => {
  cleanup();
});

describe("** CustomImage Component Test Suit **", () => {
  it("CustomImage render component", () => {
    render(<CustomImage image={image} />);
  });
});
