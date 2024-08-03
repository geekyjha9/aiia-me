"use strict";
/********************************************************************
Info: Component - Checkbox

@author - Swati Priya
@contributor - None
*********************************************************************/

// Shared Dependencies (Managed by Loader)
var CommonStyle;
var Component;
var Style;

// React (Private Scope)
import React, { useState, useEffect } from "react";

// React Native Core Component (Private Scope)
import { Pressable } from "react-native";

// Module Configuration (Managed by Loader)
var CONFIG;

/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} components - components (Atom And Molecule)
@param {Set} common_style - common_style used by all component
@param {Set} config - App theme and configuration

Return - None
*********************************************************************/
const loader = function (components, common_style, config) {
  // Shared Dependencies (Must be loaded in memory already)
  Component = components; // Load all components
  CommonStyle = common_style; // Load Common styles

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Load this component's styles
  Style = require("./style.js")(CONFIG);
}; /////////////////////////// Module-Loader END ////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (components, common_style, config) {
  // Export Public Interfaces of this module

  // Load loader
  loader(components, common_style, config);

  // Load default props
  _Checkbox.setDefaultProps();

  // Return Component
  return Checkbox;
}; //////////////////////////// Module Exports END //////////////////////////////

//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
Returns CheckBox

@param {Set} props - Component Properties
* @param {Function} onPress - Function to execute when CheckBox is clicked
* @param {Function} onPressOut - Function to execute, when user's touch is released
* @param {Function} onPressIn - Function to execute, before on press
* @param {Function} onLongPress - Function to execute, When user's touch exceeds 500 milliseconds
* @param {Boolean} disabled - To disable CheckBox, By default false
* @param {Function} checkBoxStyle - To give style to checkBox
* @param {String} checkBoxIconHeight - To change height of checkBox icon
* @param {String} checkBoxIconWidth - To change width of checkBox icon
* @param {Boolean} isSelected - is selected

@return {Jsx} - Checkbox Component
*********************************************************************/
const Checkbox = function (props) {
  // Public functions accessible by other modules

  // Initialize React states used in this specific Component
  const [is_selected, set_is_selected] = useState(props.isSelected);

  useEffect(() => {
    // Causes re-rendering and reset selected state to checkbox
    set_is_selected(props.isSelected);
  }, [props.isSelected]);

  // Return Component
  return (
    <Pressable
      style={(state) => [
        _Checkbox.determineCheckboxStyle(props, state, is_selected),
        state.hovered ? props.checkboxHoveredStyle : null,
        state.pressed ? props.checkboxPressedStyle : null,
      ]}
      onPress={() =>
        _Checkbox.determineOnPress(props, is_selected, set_is_selected)
      }
      onPressOut={props.onPressOut}
      onPressIn={props.onPressIn}
      onLongPress={props.onLongPress}
      disabled={props.disabled}
    >
      {
        (state) => 
        props.children(state)
      }
    </Pressable>
  );
}; ////////////////////////////// Component END /////////////////////////////////

//////////////////////////Private Functions START///////////////////////////////
const _Checkbox = {
  // Private functions accessible within this module only

  /********************************************************************
  Set default prop values of this component

  No Param

  Return None
  *********************************************************************/
  setDefaultProps: function () {
    // Set component properties with default(fallback) values
    Checkbox.defaultProps = {
      isSelected: false,
    };
  },

  /********************************************************************
  To determine Checkbox style

  @param {Set} props - React props passed from screen
  @param {State} state - Pressable state(hovered, pressed, focused)
  @param {State} is_selected - is_selected state

  @return {function} - function which gives component styles
  *********************************************************************/
  determineCheckboxStyle: function (props, state, is_selected) {
    if (props.checkboxStyle) {
      return props.checkboxStyle(state, is_selected);
    }
  },

  /********************************************************************
  To determine Checkbox style

  @param {Set} props - React props passed from screen
  @param {State} state - Pressable state(hovered, pressed, focused)
  @param {State} is_selected - is_selected state

  @return object
  *********************************************************************/
  determineOnPress: function (props, is_selected, set_is_selected) {
    set_is_selected(!is_selected);
    props.onPress(!is_selected);
  },
}; //////////////////////////Private Functions END///////////////////////////////

//////////////////////////////UI Functions START////////////////////////////////
const _CheckboxUI = {
  // Private UI functions accessible within this module only
  // None
}; /////////////////////////////UI Functions END/////////////////////////////////
