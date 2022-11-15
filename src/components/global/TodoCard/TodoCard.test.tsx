import React from "react";

import TodoCard from "./TodoCard";
import { render } from "setupTests";

describe("TodoCard", () => {
  it("renders with default props", () => {
    render(<TodoCard checked id="" priority="" description="" date="" />);
  });
});
