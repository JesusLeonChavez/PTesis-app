import React from "react";

import NewTask from "./NewTask.screen";
import { NewTaskRoute } from "./NewTask.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("NewTask screen", () => {
  it("renders without crashing", () => {
    render(
      <NewTask
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<NewTaskRoute>({ name: "NewTask" })}
      />
    );
  });
});
