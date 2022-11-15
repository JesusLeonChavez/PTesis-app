import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React from "react";

import AnimatedBackdrop from "./AnimatedBackdrop";
import { render } from "setupTests";

describe("AnimatedBackdrop", () => {
  it("renders with default props", () => {
    const props = {} as React.PropsWithChildren<BottomSheetBackdropProps>;
    render(<AnimatedBackdrop {...props} />);
  });
});
