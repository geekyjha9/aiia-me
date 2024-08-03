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
*@param {String} fontColor - It sets fontColor of the text. Accepts Enum[primary, secondary]
*@param {Number} fontSize - It sets the fontSize of TextInput. Accepts Enum[small, large, regular]
*@param {Number} fontWeight - It sets the fontWeight of TextInput. Accepts Enum[bold, regular, medium]
*@param {Boolean} isBorder - It decide whether, to set the border or not 
*@param {String} borderRadius - It sets the boderRadius. It accepts Enum[primary, secondary]
*@param {String} borderWidth - It sets the boderWidth. It accepts Enum[primary, secondary]
*@param {Boolean} parentWidth - It overides the width props and apply its parent width
*@param {String} placeholderTextColor - It decides the color of placeholderText
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

  // React States for TextInputComponent
  const [isHovered,setIsHovered] = useState(false);
  const [isFocused,setIsFocused] = useState(false);  

  // Return Component
  return _TextInputComponentUI.renderContent(props, setIsFocused, setIsHovered, isHovered, isFocused);
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
      fontColor: 'primary',
      fontSize : 'regular',
      fontWeight: 'regular',
      isBorder: false,
      disabled: false,
      borderColor : 'primary',
      borderRadius : 'primary',
      borderWidth : 'tertiary'
    };
  },

  /*****************************************************************************
  It will decides the border color of View according to disabled, isHovered, isFocused or Default states.
  
  @param {Set} Props - TextInput Component Properties
  @param {Boolean} isHovered - Hovered state
  @param {Boolean} isFocused - Focused state
  
  @return {Set} - Border color style
  ******************************************************************************/
  setBorderColor: function (props, isHovered, isFocused) {
    
    if(props.disabled){ // if TextInput is disabled

      return Style.borderColor[props.borderColor.toLowerCase()]["disabled"]

    }else if(isFocused){ // if TextInput is Focused

      return Style.borderColor[props.borderColor.toLowerCase()]["pressed"]

    }else if(isHovered){ // if TextInput is Hovered

      return Style.borderColor[props.borderColor.toLowerCase()]["hovered"]

    }else{ // Normallly

      return Style.borderColor[props.borderColor.toLowerCase()]["base"]

    }

  },

};
//////////////// Private Utility Function for TextInputComponent END ///////////////

///////////////////////// UI Function & Properties START ///////////////
const _TextInputComponentUI = {
  
  /********************************************************************
  renderContent function is for the TextInputComponent UI

  @param {Set} props - React props passed from screen

  @return {Jsx} - Component
  *********************************************************************/
  renderContent: function (props, setIsFocused, setIsHovered, isHovered, isFocused) {

    return (
        <Component.View
          style={[
            Style.textInputParentContainer.base,
            props.paddingHorizontal ? {paddingHorizontal : props.paddingHorizontal} : null,
            props.paddingVertical ? {paddingVertical : props.paddingVertical} : null,
            CommonStyle.justify_center,
            CommonStyle[`br_${props.borderRadius.toLowerCase()}`],
            CommonStyle[`bw_${props.borderWidth.toLowerCase()}`],
            _TextInputComponent.setBorderColor(props, isHovered, isFocused),
          ]}
          onMouseOver={()=>setIsHovered(true)}
          onMouseOut={()=>setIsHovered(false)}
        >
            {_TextInputComponentUI.renderTextInput(props, isFocused, setIsFocused)}
        </Component.View>
    );
    
  },

  /********************************************************************
  renderTextInput function is for the TextInput

  @param {Set} props - React props passed from component

  @return {Jsx} - Component
  *********************************************************************/
  renderTextInput: function (props, isFocused, setIsFocused) {
    return (
        <TextInput
          style={[
            CommonStyle[`font_text_${props.fontColor.toLowerCase()}`],
            isFocused ? CommonStyle[`font_text_${props.fontColor.toLowerCase()}_pressed`] : null,
            props.disabled ? CommonStyle[`font_text_${props.fontColor.toLowerCase()}_disabled`] : null,
            CommonStyle[`font_size_${props.fontSize.toLowerCase()}`],
            CommonStyle[`font_weight_${props.fontWeight.toLowerCase()}_primary`]
          ]}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          placeholderTextColor={CommonStyle[`font_text_${props.placeholderTextColor.toLowerCase()}`].color}
          autoFocus={props.autoFocus}
          defaultValue={props.defaultValue}
          value={props.value}
          onChangeText={props.onChangeText}
          maxLength={props.maxLength}
          editable={!props.disabled}
          secureTextEntry={props.secureTextEntry}
          multiline={props.multiline}
          textAlignVertical={"center"}
          onFocus={(event)=>{
            setIsFocused(true);
          }}
          onBlur={(event)=>{
            setIsFocused(false);
          }}
        />
    );
  },

};
//////////////////////// UI Function & Properties END ///////////////////
