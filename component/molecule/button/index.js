"use strict";
/*********************************************************************************

Info: Button Component

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
import {View} from "react-native";

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

  // Set default(fallback) properties of the Button
  _Button.setDefaultProps();

  // Return Component
  return Button;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Button Component

@param {Set} props - Button Component Properties
* @param {Boolean} disabled - It will disable the button, default value is false
* @param {String} type - It will be the button type. It accepts Enum[primary, secondary, tertiary]
* @param {String} fontSize - It will set the fontSize of the font used in button. It accepts Enum[XS, SMALL, REGULAR, XL, XXL]
* @param {String} fontWeight - It will set the fontWeight of the font used in button. It accepts Enum[bold, medium, regular]
* @param {String} borderRadius - It sets the boderRadius. It accepts Enum[primary, secondary]
* @param {String} borderWidth - It sets the boderWidth. It accepts Enum[primary, secondary]
* @param {Number} gap - It sets the gap between iconLeft, Text & iconRight.
* @param {Boolean} isSquare - It is for enabling square variant of button. Default value is false
* @param {Boolean} leftAlign - It will align the button content in the left
* @param {String} variant - It will set the contained, outlined, text variants. It accepts Enum[text, contained, outlined]
* @param {String} text - Text to be display in the button
* @param {Set} iconLeft - Left Icon Object to be displayed on the left side of the button
* @param {Set} iconRight - Right Icon Object to be displayed on the right side of the button

* @param {Set} buttonHoveredStyle - It sets the hovered style to the Button
* @param {Set} buttonPressedStyle - It sets the pressed style to the Button

* @param {Function} onPress - Callback Function to be executed when Button is pressed 
* @param {Function} onPressIn - Callback Function to be execute immidiately whenever a button touch happens 
* @param {Function} onPressOut - Callback Function to execute after Button touch is released
* @param {Function} onLongPress - Callback Function to execute after touch exceeds a duration of 500 ms (Default duration - 500ms)
* @param {Number} delayLongPress - It will updates the default users touch duration of 500ms for 'onLongPress' props 
* @param {Boolean} hitSlop - Sets additional distance outside of Button in which a press can be detected
* @param {Number} unstablePressDelay - Sets the duration (in ms) to wait after Button touch before executing 'onPressIn' props

* @param {String} role - It is used for Assistive Technologies. It communicates the purpose of a component to the user of an assistive technology. Accepts Enum[alert, button, list etc]. For more details visit official docs
* @param {String} accessible - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityHint - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityLabel - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityRole - It is used for Assistive Technologies. For more details visit official docs
* @param {String} accessibilityLanguage - It is used for Assistive Technologies. For more details visit official docs

@return {Jsx} - Text Component
*******************************************************************************/
const Button = function (props) {
  // Return Component
  return (
    <Component.ButtonAtom
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {(state) => _ButtonUI.renderContent(props, state)}
    </Component.ButtonAtom>
  );
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for Button START /////////////
const _Button = {
  // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of Button

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set Button default properties
    Button.defaultProps = {
      type: "primary",
      variant: "outlined",
      leftAlign: false,
      disabled: false,
      borderRadius: "primary",
      borderWidth: "primary",
      fontWeight: "regular",
      paddingHorizontal: 8,
      paddingVertical: 8,
      gap: 8
    };
  },
};
//////////////// Private Utility Function for Button END ///////////////

///////////////////////// UI Function & Properties START ///////////////
const _ButtonUI = {
  /********************************************************************
  renderContent function is for the Button UI - Consists of leftIcon, Text & rightIcon

  @param {Set} props - React props passed from screen
  @param {Set} state - Button states Eg: [hovered, pressed]

  @return {Jsx} - Component
  *********************************************************************/
  renderContent: function (props, state) {

    return (
      <Component.View
        style={[
          CommonStyle.flex_row,
          CommonStyle.a_i_center,
          CommonStyle[`br_${props.borderRadius.toLowerCase()}`],
          CommonStyle[`bw_${props.borderWidth.toLowerCase()}`],
          CommonStyle.justify_center,
          props.paddingHorizontal ? {paddingHorizontal : props.paddingHorizontal} : null,
          props.paddingVertical ? {paddingVertical : props.paddingVertical} : null,
          props.gap ? {gap : props.gap} : null,
          props.leftAlign ? CommonStyle.justify_flex_start : null,
          props.spaceBetweenAlign ? CommonStyle.justify_space_between : null,
          Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()].BASE,
          state.hovered ? Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()].HOVERED : null,
          state.pressed ? Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()].PRESSED : null,
          props.disabled ?  Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()].DISABLED : null,
        ]}
      >
        {props.iconLeft ? _ButtonUI.renderLeftIcon(props, state) : null}
        {props.text ? _ButtonUI.renderText(props, state) : null}
        {props.iconRight ? _ButtonUI.renderRightIcon(props, state) : null}
      </Component.View>
    );
  },

  /********************************************************************
  renderLeftIcon function will render icon in the left (If available)

  @param {Set} props - React props passed from screen

  @return {Jsx} - Component
  *********************************************************************/
  renderLeftIcon: function (props, state) {
    if (props.iconLeft) {
      return (
        <Component.View>
          <Component.Icon
            name={props.iconLeft["name"]}
            size={props.size}
            height={props.iconLeft["height"]} // Optional
            width={props.iconLeft["width"]} // Optional
            fill={Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()][state.pressed ? "PRESSED" : state.hovered ? "HOVERED" : "BASE"].fontColor}
          />
        </Component.View>
      );
    }
  },

  /********************************************************************
  renderText function will render text in the middle

  @param {Set} props - React props passed from screen

  @return {Jsx} - Component
  *********************************************************************/
  renderText: function (props, state) {
    if (props.text) {
      return (
        <View>
          <Component.Text
            fontSize={props.fontSize}
            fontWeight={props.fontWeight}
            isCustomFontColor={true}
            fontColor={Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()][state.pressed ? "PRESSED" : state.hovered ? "HOVERED" : "BASE"].fontColor}
            selectable={false}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {props.text}
          </Component.Text>
        </View>
      );
    }
  },

  /********************************************************************
  renderRightIcon function will render icon in the right (If available)

  @param {Set} props - React props passed from screen

  @return {Jsx} - Component
  *********************************************************************/
  renderRightIcon: function (props, state) {
    if (props.iconRight) {
      return (
        <Component.View>
          <Component.Icon
            name={props.iconRight["name"]}
            size={props.size}
            height={props.iconRight["height"]} // Optional
            width={props.iconRight["width"]} // Optional
            fill={Style.TYPE[props.type.toUpperCase()].VARIANT[props.variant.toUpperCase()][state.pressed ? "PRESSED" : state.hovered ? "HOVERED" : "BASE"].fontColor}
          />
        </Component.View>
      );
    }
  },
};
//////////////////////// UI Function & Properties END ///////////////////
