module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],
          root: ["./src"],
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            config: "./src/config",
            containers: "./src/containers",
            screens: "./src/screens",
            services: "./src/services",
            styles: "./src/styles",
            interfaces: "./src/interfaces",
            utils: "./src/utils",
            i18n: "./src/i18n"
          }
        }
      ],
      "react-native-reanimated/plugin"
    ]
  };
};
