// Select helpers

import { SelectItem } from "./Select.types";

/**
 * Helper to ger the snap number.
 *
 * @param {SelectItem[]} items The items list of the select.
 * @returns {number} The calculated snap.
 */
export const getSnapPointHelper = (items: SelectItem[]) => {
  return 10 * items.length + 12;
};
