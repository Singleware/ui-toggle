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
     * Updates the specified property state.
     * @param property Property name.
     * @param state Property state.
     */
    private updatePropertyState;
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
     * Get default toggle value.
     */
    readonly defaultValue: any;
    /**
     * Get default checked state.
     */
    readonly defaultChecked: boolean;
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
     * Get status-only state.
     */
    /**
    * Set status-only state.
    */
    statusOnly: boolean;
    /**
     * Toggle element.
     */
    readonly element: Element;
    /**
     * Reset the toggle to its initial value and state.
     */
    reset(): void;
    /**
     * Toggle groups.
     */
    private static groups;
    /**
     * Notify element changes.
     */
    private static notifyChanges;
}
