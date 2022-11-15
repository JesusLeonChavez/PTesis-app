// Interfaces and types from component HeaderScreen

/**
 * Component Props.
 *
 * @interface HeaderScreenProps
 * @since 1.0.0
 * @property {function} onPressLeftButton The action when press on left button.
 * @property {JSX.Element} leftImage The left image of the button.
 * @property {string} primaryTitle The main text of the header.
 * @property {function} onPressRightButton The action when press on right button.
 * @property {JSX.Element} rightImage The right image of the button.
 * */
export interface HeaderScreenProps {
  onPressLeftButton?: () => void;
  leftImage?: JSX.Element;
  primaryTitle?: string;
  onPressRightButton?: () => void;
  rightImage?: JSX.Element;
}
