"use strict";
/*********************************************************************************

Info: Component Text

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
import { Text, Platform } from "react-native";

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

  // Set default(fallback) properties of the TextComponent
  _TextComponent.setDefaultProps();

  // Return Component
  return TextComponent;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Text Component

@param {Set} props - Text Component Properties

* @param {String} fontSize - It sets the fontSize property of the Text React Native Component. Accepts Enum[xs, small, regular, large, xl, xxl, xxxl]
* @param {Boolean} isCustomFontColor - It will allow to set fontColor via HEX
* @param {String} fontColor - It sets the fontColor property of the Text React Native Component. Accepts Enum[primary, secondary, tertiary, disabled, success, danger]
* @param {String} fontWeight - It sets the fontWeight property of the Text React Native Component. Accepts Enum[regular, medium, semiBold, bold, extraBold]
* @param {String} fontStyle - It sets the fontStyle property of the Text React Native. Accepts Enum[normal, italic]
* @param {String} textAlign - It specifies the text alignment. Accepts Enum[auto, left, right, center, justify]
* @param {String} textDecorationLine - It is used for text decoration, accepts Enum["none", "underline", "line-through", "underline line-through"]
* @param {Number} lineHeight - It specifies vertical gap between the text lines 

* @param {Number} numberOfLines - It sets the maximum number of lines allowed. Default value is 0, which means unset. It will help us to set ellipsizeMode property (when content area is small, content is bigger). If its value is greater than 1 (Android & Web doesn't support), it will only accept tail ellipsizeMode value
* @param {String} ellipsizeMode - When numberOfLines is set, this prop defines how the text will be truncated. numberOfLines must be set in conjunction with this prop. Accepts Enum[head, middle, tail, clip]

* @param {String} role - It is used for Assistive Technologies. It communicates the purpose of a component to the user of an assistive technology. Accepts Enum[alert, button, list etc]. For more details visit official docs
* @param {String} accessibilityHint - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityLabel - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityRole - It is used for Assistive Technologies. For more details visit official docs

* @param {Boolean} selectable - It enables/disables copy paste functionality.

* @param {Function} onPressIn - Callback to be called on onPressIn event
* @param {Function} onPressOut - Callback to be called on onPressOut event
* @param {Function} onPress - Callback to be called on onPress event
* @param {Function} onLongPress - Callback to be called after 500 ms of onPressIn, if continuosly pressed for long time.
* @param {Function} delayLongPress - Duration (in milliseconds) from onPressIn before onLongPress is called. Default is 500 ms

@return {Jsx} - Text Component
*******************************************************************************/
const TextComponent = function (props) {

  // Return Component
  return (
    <Text

      style={[
        props.fontSize ? CommonStyle[`font_size_${props.fontSize}`] : null,
        props.fontWeight
          ? CommonStyle[`font_weight_${props.fontWeight}_primary`]
          : null,
        props.isCustomFontColor===true && props.fontColor ? {color: props.fontColor} : null,  
        props.isCustomFontColor===false && props.fontColor ? CommonStyle[`font_${props.fontColor}`] : null,
        props.textAlign ? Style.textAlign[props.textAlign] : null,
        props.fontStyle ? Style.fontStyle[props.fontStyle] : null,
        props.textDecorationLine ? Style.textDecorationLine[props.textDecorationLine] : null,
        props.lineHeight ? {lineHeight: props.lineHeight} : null,
        Platform.OS == "ios" && props.isLTR ? Style.writingDirection.ltr : null,
        Platform.OS == "ios" && props.isRTL ? Style.writingDirection.rtl : null
      ]}

      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}

      role={props.role}
      accessibilityHint={props.accessibilityHint}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityRole={props.accessibilityRole}

      selectable={props.selectable}
      
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      delayLongPress={props.delayLongPress}
    >
      {props.children}
    </Text>
  );
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for TextComponent START /////////////
const _TextComponent = {
  // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of TextComponent

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set TextComponent default properties
    TextComponent.defaultProps = {
      fontSize: "regular",
      fontWeight: "regular",
      fontColor: "primary",
      isCustomFontColor: false
    };
  },
};
//////////////// Private Utility Function for TextComponent END ///////////////
