import React from "react";

import Notes from "./Notes.screen";
import { NotesRoute } from "./Notes.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Notes screen", () => {
  it("renders without crashing", () => {
    render(
      <Notes
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<NotesRoute>({ name: "Notes" })}
      />
    );
  });
});
