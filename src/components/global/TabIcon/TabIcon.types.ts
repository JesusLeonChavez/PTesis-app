// Interfaces and types from component TabIcon

/**
 * Tab icon props interface.
 *
 * @interface TabIconProps
 * @since 1.0.0
 * @property {boolean} focused Attribute that indicates if the tab bar is selected.
 * @property {string} color The color for the tab icon.
 * @property {number} size The size for the tab.
 * @property {JSX.Element} icon The icon for the tab bar.
 * @property {JSX.Element} inactiveIcon The inactive icon for the tab bar.
 * @property {string} tabText The text to be show in the tab component.
 * @property {number} shoppingCartItems The number of items in the shopping cart.
 */
export interface TabIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
  icon: JSX.Element;
  inactiveIcon?: JSX.Element;
  tabText: string;
  shoppingCartItems?: number;
}
