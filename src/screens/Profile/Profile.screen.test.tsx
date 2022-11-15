import React from "react";

import ProfileScreen from "./Profile.screen";
import { ProfileRoute } from "./Profile.screen.types";
import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";

describe("Profile screen", () => {
  it("renders without crashing", () => {
    render(
      <ProfileScreen
        // @ts-ignore
        navigation={buildStackNavigation()}
        route={buildRoute<ProfileRoute>({ name: "Profile" })}
      />
    );
  });
});
