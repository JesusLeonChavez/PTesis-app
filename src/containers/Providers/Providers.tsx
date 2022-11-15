import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { MenuProvider } from "react-native-popup-menu";
import { QueryClient, QueryClientProvider } from "react-query";

import { ProvidersProps as Props } from "./Providers.types";
import AuthProvider from "contexts/auth/auth.context";
import GlobalProvider from "contexts/global/global.context";
import ThemeProvider from "contexts/theme/theme.context";

const Providers: React.FC<Props> = props => {
  const { children } = props;

  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: process.env.ENV === "production",
          staleTime: 15 * 1000 * 60
        }
      }
    });
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <GlobalProvider>
          <AuthProvider>
            <MenuProvider>
              <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
            </MenuProvider>
          </AuthProvider>
        </GlobalProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

Providers.defaultProps = {};

export default Providers;
