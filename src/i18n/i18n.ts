import * as Localization from "expo-localization";
import I18n from "i18n-js";

import en from "./locales/en.json";
import es from "./locales/es.json";

I18n.defaultLocale = "es";
I18n.translations = { en, es };
I18n.locale = Localization.locale;
I18n.fallbacks = true;
