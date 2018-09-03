import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Toggle template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Toggle states.
     */
    private states;
    /**
     * Mark element.
     */
    private markSlot;
    /**
     * Toggle element.
     */
    private toggle;
    /**
     * Toggle styles.
     */
    private styles;
    /**
     * Toggle skeleton.
     */
    private skeleton;
    /**
     * Toggles elements.
     */
    private elements;
    /**
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    protected setDataProperty(property: string, state: boolean): void;
    /**
     * Toggles this button by the last toggled button.
     * @param force Determines whether the same switch must be unchecked.
     * @returns Returns the last button or undefined when there is no last button.
     */
    private toggleButton;
    /**
     * Click event handler.
     * @param event Event information.
     */
    private clickHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all element properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Toggle properties.
     * @param children Toggle children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get toggle name.
     */
    /**
    * Set toggle name.
    */
    name: string;
    /**
     * Get toggle group.
     */
    /**
    * Set toggle group.
    */
    group: string;
    /**
     * Get toggle value.
     */
    /**
    * Set toggle value.
    */
    value: any;
    /**
     * Get toggle state.
     */
    /**
    * Set toggle state.
    */
    checked: boolean;
    /**
     * Get read-only state.
     */
    /**
    * Set read-only state.
    */
    readOnly: boolean;
    /**
     * Get disabled state.
     */
    /**
    * Set disabled state.
    */
    disabled: boolean;
    /**
     * Toggle element.
     */
    readonly element: Element;
    /**
     * Toggle groups.
     */
    private static groups;
    /**
     * Notify element changes.
     */
    private static notifyChanges;
}
