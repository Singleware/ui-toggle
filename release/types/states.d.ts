/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Toggle states interface.
 */
export interface States {
  /**
   * Toggle name.
   */
  name: string;
  /**
   * Determines whether the toggle is read-only or not.
   */
  readOnly: boolean;
  /**
   * Determines whether the toggle must return status or value.
   */
  statusOnly: boolean;
  /**
   * Determines whether the toggle is checked or not.
   */
  checked: boolean;
}
