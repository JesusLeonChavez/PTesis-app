import React from "react";

import SaveDataModal from "./SaveDataModal";
import { render } from "setupTests";

describe("SaveDataModal", () => {
  it("renders with default props", () => {
    render(
      <SaveDataModal
        visible={false}
        onDismiss={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
