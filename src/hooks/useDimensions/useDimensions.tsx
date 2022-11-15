import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { UseDimensionsConfig } from "./useDimensions.types";
import { UseDimensionsReturn } from "./useDimensions.types";

const useDimensions = (config: UseDimensionsConfig): UseDimensionsReturn => {
  const { container, offsets = {} } = config;
  const dimensions = Dimensions.get(container);
  const { width: offsetWidth = 0 } = offsets;
  const { height: offsetHeight = 0 } = offsets;
  const { width: screenWidth } = dimensions;
  const { height: screenHeight } = dimensions;

  const [width, setWidth] = useState(screenWidth - offsetWidth);
  const [height, setHeight] = useState(screenHeight - offsetHeight);

  useEffect(() => {
    const resize = () => {
      setWidth(screenWidth - offsetWidth);
      setHeight(screenHeight - offsetHeight);
    };

    const dimension = Dimensions.addEventListener("change", resize);

    return () => {
      dimension.remove();
    };
  }, [container, offsetWidth, offsetHeight, screenWidth, screenHeight]);

  return { width, height };
};

export default useDimensions;
