"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const DOM = require("@singleware/jsx");
const Control = require("@singleware/ui-control");
/**
 * Toggle template class.
 */
let Template = Template_1 = class Template extends Control.Component {
    /**
     * Default constructor.
     * @param properties Toggle properties.
     * @param children Toggle children.
     */
    constructor(properties, children) {
        super(properties, children);
        /**
         * Toggle states.
         */
        this.states = {
            name: '',
            readOnly: false,
            checked: false
        };
        /**
         * Mark element.
         */
        this.markSlot = DOM.create("slot", { name: "mark", class: "mark" });
        /**
         * Toggle element.
         */
        this.toggle = (DOM.create("button", { type: "button", class: "toggle" }, this.markSlot));
        /**
         * Toggle styles.
         */
        this.styles = (DOM.create("style", null, `:host > .toggle {
  user-select: none;
  display: block;
  outline: 0;
  padding: 0;
  border: 0;
  cursor: inherit;
  background-color: transparent;
}`));
        /**
         * Toggle skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        /**
         * Toggles elements.
         */
        this.elements = DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.toggle);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Enable or disable the specified property in this elements.
     * @param property Property name.
     * @param state Determines whether the property must be enabled or disabled.
     */
    setDataProperty(property, state) {
        if (state) {
            this.skeleton.dataset[property] = 'on';
        }
        else {
            delete this.skeleton.dataset[property];
        }
    }
    /**
     * Toggles this button by the last toggled button.
     * @param force Determines whether the same switch must be unchecked.
     * @returns Returns the last button or undefined when there is no last button.
     */
    toggleButton(force) {
        const last = Template_1.groups[this.group];
        if (last === this.skeleton) {
            if (force) {
                Template_1.groups[this.group] = void 0;
            }
        }
        else {
            if (last) {
                last.checked = false;
            }
            Template_1.groups[this.group] = this.skeleton;
        }
        return last;
    }
    /**
     * Click event handler.
     * @param event Event information.
     */
    clickHandler(event) {
        if (this.states.readOnly) {
            event.preventDefault();
        }
        else if (this.group.length) {
            const last = this.toggleButton(false);
            if (last !== this.skeleton) {
                if (last) {
                    Template_1.notifyChanges(last);
                }
                this.setDataProperty('checked', true);
                Template_1.notifyChanges(this.skeleton);
            }
        }
        else {
            this.setDataProperty('checked', (this.states.checked = !this.states.checked));
            Template_1.notifyChanges(this.skeleton);
        }
    }
    /**
     * Bind event handlers to update the custom element.
     */
    bindHandlers() {
        this.toggle.addEventListener('click', this.clickHandler.bind(this));
    }
    /**
     * Bind exposed properties to the custom element.
     */
    bindProperties() {
        Object.defineProperties(this.skeleton, {
            name: super.bindDescriptor(this, Template_1.prototype, 'name'),
            group: super.bindDescriptor(this, Template_1.prototype, 'group'),
            value: super.bindDescriptor(this, Template_1.prototype, 'value'),
            checked: super.bindDescriptor(this, Template_1.prototype, 'checked'),
            readOnly: super.bindDescriptor(this, Template_1.prototype, 'readOnly'),
            disabled: super.bindDescriptor(this, Template_1.prototype, 'disabled')
        });
    }
    /**
     * Assign all element properties.
     */
    assignProperties() {
        Control.assignProperties(this, this.properties, ['name', 'group', 'value', 'checked', 'readOnly', 'disabled']);
    }
    /**
     * Get toggle name.
     */
    get name() {
        return this.states.name;
    }
    /**
     * Set toggle name.
     */
    set name(name) {
        this.states.name = name;
    }
    /**
     * Get toggle group.
     */
    get group() {
        return this.toggle.name;
    }
    /**
     * Set toggle group.
     */
    set group(name) {
        this.toggle.name = name;
    }
    /**
     * Get toggle value.
     */
    get value() {
        return this.checked ? this.toggle.value : void 0;
    }
    /**
     * Set toggle value.
     */
    set value(value) {
        this.toggle.value = value;
    }
    /**
     * Get toggle state.
     */
    get checked() {
        return this.states.checked;
    }
    /**
     * Set toggle state.
     */
    set checked(state) {
        this.setDataProperty('checked', state);
        this.states.checked = state;
        if (this.group.length) {
            this.toggleButton(!state);
        }
    }
    /**
     * Get read-only state.
     */
    get readOnly() {
        return this.states.readOnly;
    }
    /**
     * Set read-only state.
     */
    set readOnly(state) {
        this.setDataProperty('readonly', state);
        this.states.readOnly = state;
        this.toggle.disabled = state || this.toggle.disabled;
    }
    /**
     * Get disabled state.
     */
    get disabled() {
        return this.toggle.disabled;
    }
    /**
     * Set disabled state.
     */
    set disabled(state) {
        this.setDataProperty('disabled', state);
        this.toggle.disabled = state || this.states.readOnly;
    }
    /**
     * Toggle element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Notify element changes.
     */
    static notifyChanges(element) {
        if (document.body.contains(element)) {
            element.dispatchEvent(new Event('change', { bubbles: true, cancelable: false }));
        }
    }
};
/**
 * Toggle groups.
 */
Template.groups = {};
__decorate([
    Class.Private()
], Template.prototype, "states", void 0);
__decorate([
    Class.Private()
], Template.prototype, "markSlot", void 0);
__decorate([
    Class.Private()
], Template.prototype, "toggle", void 0);
__decorate([
    Class.Private()
], Template.prototype, "styles", void 0);
__decorate([
    Class.Private()
], Template.prototype, "skeleton", void 0);
__decorate([
    Class.Private()
], Template.prototype, "elements", void 0);
__decorate([
    Class.Protected()
], Template.prototype, "setDataProperty", null);
__decorate([
    Class.Private()
], Template.prototype, "toggleButton", null);
__decorate([
    Class.Private()
], Template.prototype, "clickHandler", null);
__decorate([
    Class.Private()
], Template.prototype, "bindHandlers", null);
__decorate([
    Class.Private()
], Template.prototype, "bindProperties", null);
__decorate([
    Class.Private()
], Template.prototype, "assignProperties", null);
__decorate([
    Class.Public()
], Template.prototype, "name", null);
__decorate([
    Class.Public()
], Template.prototype, "group", null);
__decorate([
    Class.Public()
], Template.prototype, "value", null);
__decorate([
    Class.Public()
], Template.prototype, "checked", null);
__decorate([
    Class.Public()
], Template.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Private()
], Template, "groups", void 0);
__decorate([
    Class.Private()
], Template, "notifyChanges", null);
Template = Template_1 = __decorate([
    Class.Describe()
], Template);
exports.Template = Template;
