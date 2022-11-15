// Interfaces and types from component CustomImage

import { ImageStyle } from "react-native";

/**
 * Custom image props interface.
 * @interface CustomImageProps
 * @since 3.0.0
 * @property {ImageStyle[]} customStyle Custom style of the image.
 * @property {string} imageUrl Url of the image.
 */
export interface CustomImageProps {
  customStyle?: ImageStyle[];
  image?: CustomImage | null;
  resizeMode?: "center" | "contain" | "cover" | "stretch";
  placeHolderElement?: JSX.Element;
}

/**
 * Custom Image interface.
 * @interface CustomImage
 * @since 3.0.0
 * @property {string} url Url of the image.
 */
export interface CustomImage {
  url?: string;
}

/**
 * Image url helper parameters interface.
 * @interface ImageUrlHelperParameters
 * @since 3.0.0
 * @property {CustomImage} image Image object.
 */
export interface ImageUrlHelperParameters {
  image?: CustomImage | null;
}
