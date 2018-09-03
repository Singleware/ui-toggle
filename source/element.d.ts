/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Toggle element interface.
 */
export interface Element extends HTMLDivElement {
  /**
   * Toggle name.
   */
  name: string;
  /**
   * Toggle group.
   */
  group: string;
  /**
   * Toggle value.
   */
  value: any;
  /**
   * Toggle state.
   */
  checked: boolean;
  /**
   * Required state.
   */
  required: boolean;
  /**
   * Read-only state.
   */
  readOnly: boolean;
  /**
   * Disabled state.
   */
  disabled: boolean;
}
