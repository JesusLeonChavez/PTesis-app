import React, { useRef, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FastImage from "react-native-fast-image";

import CustomImagePlaceholder from "./CustomImage.placeholder";
import styles from "./CustomImage.styles";
import { CustomImageProps as Props } from "./CustomImage.types";

const CustomImage: React.FC<Props> = props => {
  const { customStyle, resizeMode, image } = props;
  const { placeHolderElement } = props;
  const { url } = image ?? {};

  const urlRef = useRef<string | undefined>(url);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorLoading, setErrorLoading] = useState<boolean>(false);

  const resizeModeType = resizeMode ? resizeMode : "cover";
  const showImage = urlRef.current && !errorLoading;
  const placeholderImage = placeHolderElement ? (
    placeHolderElement
  ) : (
    <CustomImagePlaceholder />
  );

  return showImage ? (
    <FastImage
      source={{ uri: urlRef.current }}
      style={[styles.image, customStyle]}
      resizeMode={resizeModeType}
      onLoadEnd={() => setIsLoading(false)}
      onError={() => setErrorLoading(true)}
    >
      {isLoading ? (
        <ActivityIndicator color={EStyleSheet.value("$palette.gray1")} />
      ) : null}
    </FastImage>
  ) : (
    <View>{placeholderImage}</View>
  );
};

export default CustomImage;
