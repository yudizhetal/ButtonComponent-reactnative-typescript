import React from "react";
import {
  GestureResponderEvent,
  ViewStyle,
  Pressable,
  View,
  TextStyle,
  Text,
  ImageSourcePropType,
  ImageStyle,
  Image,
} from "react-native";

export type ButtonProps = {
  disabled: boolean;
  defaultContainerStyles?: ViewStyle;
  disableContainerStyles?: ViewStyle;
  pressedContainerStyles?: ViewStyle;

  leftImageSource?: ImageSourcePropType;
  defaultLeftImageStyles?: ImageStyle;
  disabledLeftImageStyles?: ImageStyle;
  pressedLeftImageStyles?: ImageStyle;

  title?: string;
  defaultTitleStyles?: TextStyle;
  disabledTitleStyles?: TextStyle;
  pressedTitleStyles?: TextStyle;

  rightImageSource?: ImageSourcePropType;
  defaultRightImageStyles?: ImageStyle;
  disabledRightImageStyles?: ImageStyle;
  pressedRightImageStyles?: ImageStyle;

  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  onLongPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  defaultContainerStyles,
  disableContainerStyles,
  pressedContainerStyles,

  leftImageSource,
  defaultLeftImageStyles,
  disabledLeftImageStyles,
  pressedLeftImageStyles,

  title,
  defaultTitleStyles,
  pressedTitleStyles,
  disabledTitleStyles,

  rightImageSource,
  defaultRightImageStyles,
  disabledRightImageStyles,
  pressedRightImageStyles,

  onPress,
  onLongPress,
}) => {
  const renderLeftImageUIs = (pressed: boolean) => {
    return (
      leftImageSource && (
        <Image
          style={
            disabled
              ? disabledLeftImageStyles
              : pressed
              ? pressedLeftImageStyles
              : defaultLeftImageStyles
          }
          source={leftImageSource}
        />
      )
    );
  };

  const renderTitleUIs = (pressed: boolean) => {
    return (
      title && (
        <Text
          style={
            disabled
              ? disabledTitleStyles
              : pressed
              ? pressedTitleStyles
              : defaultTitleStyles
          }
        >
          {title}
        </Text>
      )
    );
  };

  const renderRightImageUIs = (pressed: boolean) => {
    return (
      rightImageSource && (
        <Image
          style={
            disabled
              ? disabledRightImageStyles
              : pressed
              ? pressedRightImageStyles
              : defaultRightImageStyles
          }
          source={rightImageSource}
        />
      )
    );
  };

  const renderContainerUIs = (pressed: boolean) => {
    const styles = disabled
      ? disableContainerStyles
      : pressed
      ? pressedContainerStyles
      : defaultContainerStyles;
    return (
      <View style={styles}>
        {renderLeftImageUIs(pressed)}
        {renderTitleUIs(pressed)}
        {renderRightImageUIs(pressed)}
      </View>
    );
  };

  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      {({ pressed }) => renderContainerUIs(pressed)}
    </Pressable>
  );
};

Button.defaultProps = {
  disabled: false,
};
