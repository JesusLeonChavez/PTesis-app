//@ts-ignore
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

//@ts-expect-error
global.__reanimatedWorkletInit = jest.fn();

jest.mock("react-native-reanimated", () => {
  const Reanimated = require("react-native-reanimated/mock");
  Reanimated.default.call = () => {};
  Reanimated.interpolate = () => {};
  Reanimated.makeMutable = () => {};
  Reanimated.useWorkletCallback = () => {};
  return Reanimated;
});

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.NativeModules.IndigitallReactNative = {
    init: jest.fn()
  };
  return RN;
});

jest.mock("@react-native-firebase/app", () => {
  return () => {};
});

jest.mock("@react-native-firebase/firestore", () => () => ({
  collection: jest.fn().mockReturnValue({
    doc: jest.fn().mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          collection: jest.fn().mockReturnValue({
            doc: jest.fn().mockReturnValue({
              set: jest.fn(),
              get: jest.fn()
            })
          })
        }),
        onSnapshot: jest.fn()
      })
    })
  })
}));

jest.mock("@react-native-firebase/auth", () => {
  return () => ({
    signInAnonymously: jest.fn,
    signInWithCredential: jest.fn,
    currentUser: jest.fn(),
    onAuthStateChanged: jest.fn
  });
});

jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn()
  }
}));

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    formState: {
      errors: {}
    },
    register: jest.fn,
    watch: jest.fn
  }),
  useController: () => ({
    field: {
      onChange: jest.fn,
      onBlur: jest.fn,
      value: jest.fn()
    }
  }),
  useForm: () => ({
    handleSubmit: jest.fn,
    watch: jest.fn,
    register: jest.fn,
    getValues: jest.fn,
    formState: {
      errors: {},
      isSubmitting: false
    }
  }),
  useFormState: () => ({
    errors: {}
  }),
  useWatch: () => undefined,
  FormProvider: jest.fn
}));
