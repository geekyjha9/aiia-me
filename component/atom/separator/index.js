"use strict";
/*********************************************************************************

Info: Component Separator

@author - Ankit Singh

@contributor - None

***********************************************************************************/

// Shared Dependecies - (Managed by Loader Function)
var Component;
var CommonStyle;
var Style;
var Config;

// React Component (Private Scope)
import React from "react";

// React Native Component & APIs (Private Scope)
import { View } from "react-native";

////////////////////////// Module Loader START //////////////////////////////
/*****************************************************************************
Loader Function : It is used to load shared dependicies {Component, CommonStyle, Config} in this module

@param {Set} components - components (Contains Atom & Molecule)
@param {Set} common_style - common_style (Style shared by all components)
@param {Set} config - config (Contains App theme {Color, Dimentions} & configuration)

Return - None
******************************************************************************/
const loader = function (components, common_style, config) {
  // Load Component, CommonStyle, Config in this module (Which are already loaded in memory by project's entry loader.js)
  Component = components; // Load all components in this module
  CommonStyle = common_style; // Load common_style in this module
  Config = config; // Load config in this module

  // Load component style.js in this module
  Style = require("./style")(Config);
};
//////////////////////// Module Loader END /////////////////////////////////////

//////////////////////// Module Export START ///////////////////////////////////
module.exports = function (components, common_style, config) {
  // Export Public Interfaces of this module

  // Load shared dependencies by loader function
  loader(components, common_style, config);

  // Set default(fallback) properties of the Separator
  _Separator.setDefaultProps();

  // Return Component
  return Separator;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Separator Component

@param {Set} props - Separator Component Properties
*@param {String} color - Separator Color - It Accepts Enum [primary, secondary, tertiary]
*@param {String} width - For the width of the separator - It Accepts Enum [primary, secondary, tertiary]
*@param {String} type - For the separator type - It Accepts Enum [solid, dotted, dashed]

@return {Jsx} - Separator Component
*******************************************************************************/
const Separator = function (props) {
  // Return Component
  return (
    <View
      style={[
        CommonStyle[`border_${props.color.toLowerCase()}`],
        Style[`border_width_${props.width.toLowerCase()}`],
        Style[`border_style_${props.type.toLowerCase()}`],
      ]}
    />
  )
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for Separator START /////////////
const _Separator = { // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of Separator

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set Separator default properties
    Separator.defaultProps = {
      color: 'primary',
      width: 'primary',
      type: 'solid'
    };
  },

};
//////////////// Private Utility Function for Separator END ///////////////