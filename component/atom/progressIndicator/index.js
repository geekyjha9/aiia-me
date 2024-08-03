"use strict";
/*********************************************************************************

Info: Component ProgressIndicator

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
import { ActivityIndicator } from "react-native";

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

  // Set default(fallback) properties of the ProgressIndicator
  _ProgressIndicator.setDefaultProps();

  // Return Component
  return ProgressIndicator;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
ProgressIndicator Component

@param {Set} props - ProgressIndicator Component Properties
*@param {String} size - It sets the size of ProgressIndicator. It Accepts Enum[small, regular, large, xl, xxl, xxxl]
*@param {String} color - It sets the color of ProgressIndicator. It accepts color name or hex code
*@param {Number} customSize - It sets the custom size of ProgressIndicator. It will overides the size props

@return {Jsx} - ProgressIndicator Component
*******************************************************************************/
const ProgressIndicator = function (props) {
  // Return Component
  return (
    <ActivityIndicator
        style={_ProgressIndicator.determineProgressIndicatorSize(props)}
        color={props.color}
    />
  )
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for ProgressIndicator START /////////////
const _ProgressIndicator = { // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of ProgressIndicator

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set ProgressIndicator default properties
    ProgressIndicator.defaultProps = {
        color: Config?.COLOR?.APP_PRIMARY?.BASE,
        size: "regular"
    };
  },

  /*****************************************************************************
  It will determine the size of ProgressIndicator

  @param {Set} props - Component Properties 
  
  Return None
  ******************************************************************************/
  determineProgressIndicatorSize: function (props) {

    if(props.customSize){ // Scale according to customSize received
        return {transform:[{scaleX: props.customSize/20}, {scaleY: props.customSize/20}]}
    }else{
        return Style.size[props.size] // Scale according to size props received
    }

  },

};
//////////////// Private Utility Function for ProgressIndicator END ///////////////