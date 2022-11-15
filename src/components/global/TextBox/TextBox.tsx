import { animated, useSpring } from "@react-spring/native";
import React, { useState, useRef, useEffect } from "react";
import { forwardRef } from "react";
import { useController } from "react-hook-form";
import { useFormContext, useFormState } from "react-hook-form";
import { View, Text, TextInput } from "react-native";
import { KeyboardTypeOptions } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

import styles from "./TextBox.styles";
import { TextBoxProps as Props } from "./TextBox.types";

import EyeIconSVG from "assets/images/icons/eyeIcon.svg";
import LoaderIconSVG from "assets/images/icons/loaderIcon.svg";

const AnimatedView = animated(View);

const TextBox = forwardRef<TextInput, Props>((props, ref) => {
  const { type, style: propStyle, labelStyle, name } = props;
  const { label, icon, rules, errorTextStyle } = props;
  const { defaultValue, textBoxStyle } = props;
  const { keyBoardType: propKeyBoardType, placeholder } = props;
  const { blurOnSubmit, returnKeyType, onSubmitEditing, disabled } = props;
  const { maxLength, multiline, numberOfLines, placeholderTextColor } = props;
  const { optionalLabel, testID, onFocus, showLoader, formatter } = props;

  const formContext = useFormContext();
  const { errors } = useFormState();
  const { field } = useController({ name, rules, defaultValue });
  const animationProps = useSpring({
    loop: true,
    from: { rotate: "0deg" },
    to: { rotate: "360deg" },
    config: { duration: 800 }
  });

  const [secure, setSecure] = useState(type === "password");
  const keyBoardType = useRef<KeyboardTypeOptions>("default");

  const { onBlur, value } = field;
  const error = errors[name];
  const errorStyle = error ? styles.textBoxWrapperError : styles.textBoxWrapper;
  const autoCap = type === "email" ? "none" : "sentences";
  const disabledStyle = disabled ? styles.disabled : {};
  const passwordStyle = type === "password" ? styles.password : null;
  const textNumberOfLines = numberOfLines ? numberOfLines : 1;
  const setKeyBoardType = propKeyBoardType
    ? propKeyBoardType
    : keyBoardType.current;

  /**
   * Function to change text.
   *
   * @since 3.0.0
   * @param {string} text The text to format.
   */
  const onChangeText = (text: string) => {
    const formatted = formatter ? formatter(field.value, text) : text;
    field.onChange(formatted);
  };

  useEffect(() => {
    switch (type) {
      case "email":
        keyBoardType.current = "email-address";
        break;
      case "number":
        keyBoardType.current = "numeric";
        break;
      default:
        keyBoardType.current = "default";
        break;
    }
  }, [type]);

  const labelComponent = label ? (
    <Text style={[styles.label, labelStyle]}>{label}</Text>
  ) : null;

  const optionalLabelComponent = optionalLabel ? (
    <Text style={styles.optionalLabel}>Opcional</Text>
  ) : null;

  const showPasswordComponent = (
    <TouchableWithoutFeedback onPress={() => setSecure(!secure)}>
      <View style={styles.showPasswordWrapper}>
        <EyeIconSVG
          style={secure ? styles.showPassword : styles.showPasswordActive}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  const showLoaderComponent = (
    <AnimatedView
      style={[
        styles.loaderWrapper,
        { transform: [{ rotate: animationProps.rotate }] }
      ]}
    >
      <LoaderIconSVG />
    </AnimatedView>
  );

  const showIconComponent = (
    <View style={styles.showPasswordWrapper}>{icon}</View>
  );

  if (!formContext) {
    return null;
  }

  if (!name) {
    return null;
  }

  return (
    <View style={[styles.wrapper, disabledStyle, propStyle]}>
      <View style={styles.labelContainer}>
        {labelComponent}
        {optionalLabelComponent}
      </View>

      <View style={errorStyle}>
        <TextInput
          ref={ref}
          onChangeText={onChangeText}
          value={value}
          autoCapitalize={autoCap}
          autoCorrect={true}
          keyboardType={setKeyBoardType}
          placeholder={placeholder}
          style={[styles.textBox, textBoxStyle, passwordStyle]}
          secureTextEntry={secure}
          placeholderTextColor={placeholderTextColor}
          blurOnSubmit={blurOnSubmit}
          onBlur={onBlur}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          editable={!disabled}
          maxLength={maxLength}
          multiline={multiline}
          numberOfLines={textNumberOfLines}
          textContentType={secure ? "oneTimeCode" : "none"}
          testID={testID}
          onFocus={onFocus}
          underlineColorAndroid="transparent"
        />

        {icon ? showIconComponent : null}
        {type === "password" ? showPasswordComponent : null}
        {showLoader ? showLoaderComponent : null}
      </View>

      {error ? (
        <Text style={[styles.error, errorTextStyle]}>{error.message}</Text>
      ) : null}
    </View>
  );
});

export default TextBox;
