import React, { forwardRef, Children } from "react";
import { useController, useFormContext } from "react-hook-form";
import { View, Text } from "react-native";

import styles from "./RadioGroup.styles";
import { RadioGroupProps as Props } from "./RadioGroup.types";

const RadioGroup = forwardRef<View, Props>((props: Props, ref) => {
  const { style, children, name, defaultValue = "", rules } = props;
  const { label, labelStyle } = props;

  const formContext = useFormContext();

  if (!formContext) {
    console.error(
      "Form field must be a descendant of `FormProvider` as it uses `useFormContext`!"
    );
  }

  const { control, formState } = formContext;
  const { errors } = formState;
  const error = errors?.[name];

  const { field } = useController({
    name,
    control,
    defaultValue,
    rules
  });

  return (
    <>
      <View style={styles.labelContainer}>
        {label ? (
          <Text style={[styles.label, { labelStyle }]}>{label}</Text>
        ) : null}
      </View>

      <View style={[styles.container, style]} ref={ref}>
        {Children.map(children, child =>
          child
            ? {
                ...child,
                props: {
                  ...child.props,
                  onPress: field.onChange,
                  isSelected: field.value === child.props.value
                }
              }
            : null
        )}
      </View>

      {error ? <Text style={styles.textError}>{error.message}</Text> : null}
    </>
  );
});

RadioGroup.defaultProps = {};

export default RadioGroup;
