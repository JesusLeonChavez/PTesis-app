import React, { useEffect } from "react";
import { View } from "react-native";

import styles from "./Notes.screen.styles";
import { NotesProps as Props } from "./Notes.screen.types";
import Notes from "components/Notes/Notes";
import HeaderScreen from "components/global/HeaderScreen/HeaderScreen";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const NotesScreen: React.FC<Props> = props => {
  const { navigation, route } = props;
  const { setOptions, goBack } = navigation;

  const { categoryName } = route.params ?? {};

  useEffect(() => {
    setOptions({
      header: () => (
        <HeaderScreen onPressLeftButton={goBack} primaryTitle={categoryName} />
      )
    });
  }, [setOptions, goBack, categoryName]);

  return (
    <ScreenTemplate scrollable={false}>
      <View style={styles.container}>
        <Notes categoryName={categoryName} />
      </View>
    </ScreenTemplate>
  );
};

NotesScreen.defaultProps = {};

export default NotesScreen;
