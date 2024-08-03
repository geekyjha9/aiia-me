"use strict";
/*********************************************************************************

Info: Component CardWrapper

@author - Swati Priya

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
  _CardWrapper.setDefaultProps();

  // Return Component
  return CardWrapper;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Separator Component

@param {Set} props - Separator Component Properties
*@param {String} borderRadius - Border Radius - It Accepts Enum [primary, secondary]
*@param {Object} padding - For the padding of the card wrapper - It Accepts Enum [p_2, p_4, p_6, p_8, p_10, p_12, p_14]

@return {Jsx} - Separator Component
*******************************************************************************/
const CardWrapper = function (props) {

  // Return Component
  return (
    <View>
      <View
      style={[
        props.style,
        CommonStyle.m_0,
        CommonStyle.p_0,
        CommonStyle.background_bg_primary,
        Style.container,
        // {borderRadius: 8}
        Style[`borderRadius`][`${props?.borderRadius.toUpperCase()}`],
        { alignSelf: 'flex-start' }
      ]}
    >
      {props.children}
      </View>
    </View>
  )
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for Separator START /////////////
const _CardWrapper = { // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of Separator

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set Separator default properties
    CardWrapper.defaultProps = {
      borderRadius: 'primary',
    };
  },

};
//////////////// Private Utility Function for Separator END ///////////////