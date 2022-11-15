import React from "react";
import { View } from "react-native";

import styles from "./ServerError.screen.styles";
import { ServerErrorProps as Props } from "./ServerError.screen.types";
import useTheme from "contexts/theme/theme.hooks";

import ErrorSVG from "assets/images/serverError/server-error.svg";

const ServerError: React.FC<Props> = props => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <ErrorSVG
        style={styles.errorImage}
        fill={theme.$palette.primary}
        stroke={theme.$palette.primary}
      />
    </View>
  );
};

ServerError.defaultProps = {};

export default ServerError;
