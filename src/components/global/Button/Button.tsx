import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import styles from "./Button.styles";
import { ButtonProps as Props } from "./Button.types";

const Button: React.FC<Props> = props => {
  const { viewStyle, textStyle, onPress, mode = "PRIMARY", ...rest } = props;
  const { iconLeft, iconRight, secondText, secondTextStyle, disabled } = props;
  const { disabledStyle, disabledTextStyle, isLoading = false } = props;
  const { loaderColor = EStyleSheet.value("$palette.gray3") } = props;
  const { loadingText } = props;

  const isPrimary = mode === "PRIMARY";
  const disabledButtonStyle = disabled ? disabledStyle : undefined;
  const disabledTextButtonStyle = disabled ? disabledTextStyle : undefined;
  const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
  const textButtonStyle = isPrimary ? styles.primaryText : styles.secondaryText;

  const secondTextComponent = <Text style={secondTextStyle}>{secondText}</Text>;

  const buttonContentNode = (
    <>
      {iconLeft ? <View style={styles.iconWrapper}>{iconLeft}</View> : null}
      <Text
        style={[
          styles.textButton,
          textButtonStyle,
          textStyle,
          disabledTextButtonStyle
        ]}
      >
        {props.children}
      </Text>
      {iconRight ? <View style={styles.iconWrapper}>{iconRight}</View> : null}
      {secondText ? secondTextComponent : null}
    </>
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
      disabled={disabled}
      style={[styles.button, buttonStyle, viewStyle, disabledButtonStyle]}
    >
      {isLoading ? (
        <>
          {loadingText ? (
            <Text style={textButtonStyle}>{loadingText}</Text>
          ) : null}
          <ActivityIndicator color={loaderColor} />
        </>
      ) : (
        <>{buttonContentNode}</>
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {};

export default Button;
