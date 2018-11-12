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
  margin: 0;
  cursor: inherit;
  background-color: transparent;
}`));
        /**
         * Toggle skeleton.
         */
        this.skeleton = (DOM.create("div", { slot: this.properties.slot, class: this.properties.class }, this.children));
        DOM.append(this.skeleton.attachShadow({ mode: 'closed' }), this.styles, this.toggle);
        this.bindHandlers();
        this.bindProperties();
        this.assignProperties();
    }
    /**
     * Updates the specified property state.
     * @param property Property name.
     * @param state Property state.
     */
    updatePropertyState(property, state) {
        if (state) {
            this.skeleton.dataset[property] = 'on';
        }
        else {
            delete this.skeleton.dataset[property];
        }
    }
    /**
     * Click event handler.
     * @param event Event information.
     */
    clickHandler(event) {
        if (this.states.readOnly) {
            event.preventDefault();
        }
        else if (this.group) {
            const last = Template_1.groups[this.group];
            if (last !== this.skeleton) {
                if (last) {
                    last.checked = false;
                    Template_1.notifyChanges(last);
                }
                this.updatePropertyState('checked', (this.states.checked = true));
                Template_1.groups[this.group] = this.skeleton;
                Template_1.notifyChanges(this.skeleton);
            }
        }
        else {
            this.updatePropertyState('checked', (this.states.checked = !this.states.checked));
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
        this.bindComponentProperties(this.skeleton, [
            'name',
            'group',
            'value',
            'checked',
            'defaultValue',
            'defaultChecked',
            'readOnly',
            'disabled',
            'statusOnly',
            'reset'
        ]);
    }
    /**
     * Assign all element properties.
     */
    assignProperties() {
        this.assignComponentProperties(this.properties, ['name', 'group', 'value', 'checked', 'readOnly', 'disabled', 'statusOnly']);
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
        if (this.states.statusOnly) {
            return this.checked;
        }
        return this.checked ? this.toggle.value : void 0;
    }
    /**
     * Set toggle value.
     */
    set value(value) {
        if (this.states.statusOnly) {
            this.checked = Boolean(value);
        }
        else {
            this.toggle.value = value;
        }
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
        if (this.group) {
            const last = Template_1.groups[this.group];
            if (state) {
                if (last && last !== this.skeleton) {
                    last.checked = false;
                }
                Template_1.groups[this.group] = this.skeleton;
            }
            else if (last === this.skeleton) {
                Template_1.groups[this.group] = void 0;
            }
        }
        this.updatePropertyState('checked', (this.states.checked = state));
    }
    /**
     * Get default toggle value.
     */
    get defaultValue() {
        return this.properties.value || 'on';
    }
    /**
     * Get default checked state.
     */
    get defaultChecked() {
        return this.properties.checked || false;
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
        this.states.readOnly = state;
        this.toggle.disabled = state || this.toggle.disabled;
        this.updatePropertyState('readonly', state);
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
        this.toggle.disabled = state || this.states.readOnly;
        this.updatePropertyState('disabled', state);
    }
    /**
     * Get status-only state.
     */
    get statusOnly() {
        return this.states.statusOnly;
    }
    /**
     * Set status-only state.
     */
    set statusOnly(state) {
        this.states.statusOnly = state;
    }
    /**
     * Toggle element.
     */
    get element() {
        return this.skeleton;
    }
    /**
     * Reset the toggle to its initial value and state.
     */
    reset() {
        this.value = this.defaultValue;
        this.checked = this.defaultChecked;
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
], Template.prototype, "updatePropertyState", null);
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
], Template.prototype, "defaultValue", null);
__decorate([
    Class.Public()
], Template.prototype, "defaultChecked", null);
__decorate([
    Class.Public()
], Template.prototype, "readOnly", null);
__decorate([
    Class.Public()
], Template.prototype, "disabled", null);
__decorate([
    Class.Public()
], Template.prototype, "statusOnly", null);
__decorate([
    Class.Public()
], Template.prototype, "element", null);
__decorate([
    Class.Public()
], Template.prototype, "reset", null);
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
