import { GoogleSignin } from "@react-native-google-signin/google-signin";
import dayjs from "dayjs";
import * as Localization from "expo-localization";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AppProps as Props } from "./App.types";
import Layout from "components/global/Layout/Layout";
import { GOOGLE_WEB_CLIENT_ID } from "config/global.config";
import Providers from "containers/Providers/Providers";
import Navigator from "navigation/Navigator";
import { loadFonts } from "styles/util/fonts";
import "dayjs/locale/es";
import "i18n/i18n";

LogBox.ignoreLogs([]);

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID
});

const App: React.FC<Props> = props => {
  const [loaded, setLoaded] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    (async () => {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Artificially delay for two seconds to simulate a slow loading
        const normalizedLocale = Localization.locale.replace("_", "-");
        const sanitizedLocale = normalizedLocale.replace(/-.+/, "");
        dayjs.locale(sanitizedLocale);
        await loadFonts();
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setLoaded(true);
      }
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Providers>
        <Layout>
          <Navigator />
        </Layout>
      </Providers>
    </GestureHandlerRootView>
  );
};

App.defaultProps = {};

export default App;
