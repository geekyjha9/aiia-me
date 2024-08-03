"use strict";
/*********************************************************************************

Info: Component Button

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
import { Pressable } from "react-native";

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

  // Set default(fallback) properties of the ButtonComponent
  _ButtonComponent.setDefaultProps();

  // Return Component
  return ButtonComponent;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Button Component

@param {Set} props - Button Component Properties 
* @param {Set} buttonHoveredStyle - It sets the hovered style to the Button
* @param {Set} buttonPressedStyle - It sets the pressed style to the Button
* @param {Function} onPress - Callback Function to be executed when Button is pressed 
* @param {Function} onPressIn - Callback Function to be execute immidiately whenever a button touch happens 
* @param {Function} onPressOut - Callback Function to execute after Button touch is released
* @param {Function} onLongPress - Callback Function to execute after touch exceeds a duration of 500 ms (Default duration - 500ms)
* @param {Number} delayLongPress - It will updates the default users touch duration of 500ms for 'onLongPress' props 
* @param {Boolean} hitSlop - Sets additional distance outside of Button in which a press can be detected
* @param {Boolean} disabled - Disables Button press, By default false
* @param {Number} unstablePressDelay - Sets the duration (in ms) to wait after Button touch before executing 'onPressIn' props
* @param {String} role - It is used for Assistive Technologies. It communicates the purpose of a component to the user of an assistive technology. Accepts Enum[alert, button, list etc]. For more details visit official docs
* @param {String} accessible - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityHint - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityLabel - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityRole - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityLanguage - It is used for Assistive Technologies. For more details visit official docs
* @param {Function} children - Function to execute to render children UI

@return {Jsx} - Button Component
*******************************************************************************/
const ButtonComponent = function (props) {
  // Return Component
  return (
    <Pressable

      style={
        (state) => [
          props.style,
          state.hovered && !props.disabled ? props.buttonHoveredStyle : null,
          state.pressed && !props.disabled ? props.buttonPressedStyle : null,
        ]
      }

      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      onLongPress={props.onLongPress}
      delayLongPress={props.delayLongPress}
      onHoverIn={props.onHoverIn}
      onHoverOut={props.onHoverOut}
      disabled={props.disabled}
      
      unstable_pressDelay={props.unstablePressDelay}

      hitSlop={props.hitSlop}

      role={props.role}
      accessible={props.accessible}
      accessibilityLabel={props.accessibilityLabel}
      accessibilityRole={props.accessibilityRole}
      accessibilityLanguage={props.accessibilityLanguage}
      accessibilityHint={props.accessibilityHint}
    >
      {(state) => props.children(state)}
    </Pressable>
  );
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for ButtonComponent START /////////////
const _ButtonComponent = { // Private Scope accessible in this module only
  /*****************************************************************************
  It will sets the default(fallback) properties of TextComponent

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set ButtonComponent default properties
    ButtonComponent.defaultProps = {
    };
  },
};
//////////////// Private Utility Function for ButtonComponent END ///////////////
