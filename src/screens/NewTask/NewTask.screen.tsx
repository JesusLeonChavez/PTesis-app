import React from "react";

import { NewTaskProps as Props } from "./NewTask.screen.types";
import NewTask from "components/NewTask/NewTask";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const NewTaskScreen: React.FC<Props> = props => {
  return (
    <ScreenTemplate>
      <NewTask />
    </ScreenTemplate>
  );
};

NewTaskScreen.defaultProps = {};

export default NewTaskScreen;
