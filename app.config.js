const getPlugins = () => {
  return [
    "@react-native-firebase/app",
    [
      "./src/plugins/rn-google-signin/app.plugin",
      {
        reversedClientIdName: "reverse-id-dev",
        reversedClientId:
          "com.googleusercontent.apps.959930620631-uq4huihns3a8fuhucahn0oi9gqo7n2ec"
      }
    ]
  ];
};

const config = ({ config }) => {
  const newConfig = {
    ...config,
    android: {
      ...config.android
    },
    ios: {
      ...config.ios,
      supportsTablet: false
    },
    plugins: getPlugins()
  };

  return newConfig;
};

export default config;
