import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { LayoutProps as Props } from "./Layout.types";
import useListeners from "hooks/useListeners";

const Layout: React.FC<Props> = ({ children }) => {
  useListeners();

  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

Layout.defaultProps = {};

export default Layout;
