import React from "react";

import CategoryCard from "./CategoryCard";
import { render } from "setupTests";

describe("TodoCard", () => {
  it("renders with default props", () => {
    render(
      <CategoryCard
        handlePress={() => {}}
        categorie={{ name: "", quantity: 1 }}
      />
    );
  });
});
