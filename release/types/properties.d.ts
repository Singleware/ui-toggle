/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Toggle properties interface.
 */
export interface Properties {
  /**
   * Toggle classes.
   */
  class?: string;
  /**
   * Toggle slot.
   */
  slot?: string;
  /**
   * Toggle name.
   */
  name?: string;
  /**
   * Toggle group.
   */
  group?: string;
  /**
   * Toggle value.
   */
  value?: any;
  /**
   * Determines whether the toggle is checked or not.
   */
  checked?: boolean;
  /**
   * Determines whether the toggle is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the toggle is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the toggle is disabled or not.
   */
  disabled?: boolean;
  /**
   * Determines whether the toggle must return status or value.
   */
  statusOnly?: boolean;
  /**
   * Toggle children.
   */
  children?: {};
}
