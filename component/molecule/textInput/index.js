"use strict";
/*********************************************************************************

Info: Component TextInput

@author - Ankit Singh

@contributor - None

***********************************************************************************/

// Shared Dependecies - (Managed by Loader Function)
var Component;
var CommonStyle;
var Style;
var Config;

// React Component (Private Scope)
import React,{ useState } from "react";

// React Native Component & APIs (Private Scope)
import { TextInput } from "react-native";

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

  // Set default(fallback) properties of the TextInputComponent
  _TextInputComponent.setDefaultProps();

  // Return Component
  return TextInputComponent;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
TextInput Component

@param {Set} props - TextInput Component Properties
*@param {String} fontSize - It sets the font size. Accepts Enum[xs, small, regular]
*@param {String} fontColor - It sets the font color. Accepts Enum[primary, primary_subtle, primary_xsubtle, secondary]
*@param {Number} fontWeight - It sets the fontWeight of TextInput. Accepts Enum[bold, regular, medium]
*@param {String} borderColor - It sets border color & font color. Accepts Enum[primary, secondary, tertiary]
*@param {String} borderRadius - It sets the boderRadius. It accepts Enum[primary, secondary]
*@param {String} borderWidth - It sets the boderWidth. It accepts Enum[primary, secondary]
*@param {String} paddingHorizontal - It overides the paddingHorizontal
*@param {String} paddingVertical - It overides the paddingVertical
*@param {Boolean} isBorder - It decide whether, to set the border or not 
*@param {String} placeholder - Placeholder value
*@param {String} placeholderTextColor - It sets the placeholder font color. Accepts Enum[primary, primary_subtle, primary_xsubtle, secondary]
*@param {Boolean} autoFocus - If true, focuses the input on componentDidMount or useEffect. The default value is false 
*@param {String} defaultValue - It provides an initial value that will change when the user starts typing
*@param {String} value - The value to show for the text input
*@param {Function} onChangeText - Callback that is called when the text input's text changes
*@param {Number} maxLength - It limits the maximum number of characters that can be entered
*@param {Boolean} disabled - It will disable the TextInput
*@param {Boolean} secureTextEntry - If true, the text input obscures the text entered so that sensitive text like passwords stay secure. The default value is false. Does not work with multiline={true}
*@param {Boolean} multiline - If true, the text input can be multiple lines. The default value is false
*@param {Function} onFocus - Callback that is called when the text input is focused
*@param {Function} onBlur - Callback that is called when the text input is blurred

@return {Jsx} - TextInput Component
*******************************************************************************/
const TextInputComponent = function (props) {
  // Return Component
  return(
    <Component.TextInputAtom
      fontColor={props.fontColor}
      fontSize={props.fontSize}
      paddingHorizontal={props.paddingHorizontal}
      paddingVertical={props.paddingVertical}
      isBorder={props.isBorder}
      borderColor={props.borderColor}
      borderRadius={props.borderRadius}
      borderWidth={props.borderWidth}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      autoFocus={props.autoFocus}
      defaultValue={props.defaultValue}
      value={props.value}
      onChangeText={props.onChangeText}
      maxLength={props.maxLength}
      disabled={props.disabled}
      secureTextEntry={props.secureTextEntry}
      multiline={props.multiline}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for TextInputComponent START /////////////
const _TextInputComponent = { // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of TextInputComponent

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set TextInputComponent default properties
    TextInputComponent.defaultProps = {
      placeholderTextColor: 'primary',
      fontColor: 'primary',
      fontWeight: 'regular',
      fontSize: 'regular',
      borderColor: 'primary',
      borderRadius: 'primary',
      borderWidth: 'primary'
    };
  },

};
//////////////// Private Utility Function for TextInputComponent END ///////////////

