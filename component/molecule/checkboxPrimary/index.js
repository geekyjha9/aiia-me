"use strict";
/********************************************************************
Info: Component - Dummy

@author - Ankit Singh
@contributor - None
*********************************************************************/

// Shared Dependencies (Managed by Loader)
var CommonStyle;
var Component;
var Style;
// React (Private Scope)
import React, { useState, useEffect } from "react";
// React Native Core Component (Private Scope)
import {  } from "react-native";
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
  _CheckboxPrimary.setDefaultProps();
  // Return Component
  return CheckboxPrimary;
}; //////////////////////////// Module Exports END //////////////////////////////


//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
CheckboxPrimary Component
@param {Set} props - Component Properties

* @param {Number} dimension - props passed from screen for checkbox dimension
* @param {String} color - props passed from screen for checkbox color. It accepts Enum["APP_PRIMARY", "APP_SECONDARY"]
* @param {Number} gap - flex property. It specifies gap between flex items for the checkbox
* @param {String} borderRadius - It sets the borderRadius of checkbox. It accepts Enum["PRIMARY", "SECONDARY"]
* @param {String} borderWidth - It sets the borderWidth of checkbox. It accepts Enum["PRIMARY", "SECONDARY"]
* @param {String} borderColor - It sets the borderColor of checkbox. It accepts Enum["PRIMARY", "SECONDARY"]
* @param {String} backgroundColor - It sets the backgroundColor of checkbox. It accepts Enum["PRIMARY", "SECONDARY", "PRIMARY_SUBTLE"]

@return {Jsx} - CheckboxPrimary Component
*********************************************************************/
const CheckboxPrimary = function (props) {
  // Public functions accessible by other modules
  // Initialize React states used in this specific Component
  const [is_selected, set_is_selected] = useState(false);
  useEffect(() => {
    //Set isSelected props with is_selected, state
    if(props.isSelected)
    props.isSelected(is_selected);
  }, [is_selected])
  //onPress of checkbox toogle the state
  const onPressHandler = () => {
    set_is_selected((prev_val) => !prev_val)
  }
  // Return Component
  return (
    <Component.Checkbox isSelected={props.isSelected} onPress={onPressHandler}>
      {
        (state) =>
        _CheckboxPrimaryUI.renderContent(state, props, is_selected)
      }
    </Component.Checkbox>
  );
}; ////////////////////////////// Component END /////////////////////////////////
//////////////////////////Private Functions START///////////////////////////////
const _CheckboxPrimary = {
  // Private functions accessible within this module only
  /********************************************************************
  Set default prop values of this component
  No Param
  Return None
  *********************************************************************/
  setDefaultProps: function () {
    // Set component properties with default(fallback) values
    CheckboxPrimary.defaultProps = {
      dimension: 20,
      children: "Default Label",
      color:'APP_PRIMARY',
      gap : 8,
      borderWidth : 'primary',
      borderColor : 'primary',
      backgroundColor : 'app_primary'
    };
  },
}; //////////////////////////Private Functions END///////////////////////////////
//////////////////////////////UI Functions START////////////////////////////////
const _CheckboxPrimaryUI = {
  // Private UI functions accessible within this module only
  /********************************************************************
  Set default prop values of this component
  @param {Set} props - props passed from screen for checkbox
  @return {Jsx} - Component
  *********************************************************************/
  renderContent: function (state, props, is_selected) {
    return (
      <Component.View style={[ CommonStyle.flex_one, CommonStyle.flex_row, {gap : props.gap ? props.gap : null}]}>
        {_CheckboxPrimaryUI.renderCheckboxIcon(state, props, is_selected)}
        {_CheckboxPrimaryUI.renderText(state, props, is_selected)}
      </Component.View>
    );
  },
  /********************************************************************
  Set default prop values of this component
  @param {Set} props - props passed from screen for checkbox
  @param {Number} dimension - props passed from screen for checkbox dimension
  @param {String} color - props passed from screen for checkbox color. It accepts Enum["APP_PRIMARY", "APP_SECONDARY"]
  @return {Jsx} - Component
  *********************************************************************/
  renderCheckboxIcon: function (state, props, is_selected) {
    
    return (
      <Component.View
        style={[
          Style.checkbox,
          {
            width: props.dimension,
            height: props.dimension
          },
          props.borderRadius ? 
          CommonStyle[`br_${props.borderRadius.toLowerCase()}`]:
          {borderRadius:0},
          CommonStyle[`bw_${props.borderWidth.toLowerCase()}`],
          CommonStyle[`border_${props.borderColor.toLowerCase()}`],
          is_selected ? CommonStyle[`background_${props.backgroundColor.toLowerCase()}`] : null,
          // is_selected ? {borderColor : CommonStyle[`background_bg_${props.backgroundColor.toLowerCase()}`].backgroundColor} : null,
        ]}
      >
        {/* Tick Icon whenever the checkbox is selected */}
         {is_selected ? <Component.Icon fill={CONFIG?.COLOR?.BACKGROUND_SECONDARY?.BASE} iconSize={"large"} name={"tick_icon"}/> : ""}
      </Component.View>
    );
    
  },
  /********************************************************************
  Set default prop values of this component
  @param {Set} props - props passed from screen for checkbox
  @return {Jsx} - Component
  *********************************************************************/
  renderText: function (state, props) {
    return (
      <Component.View style={[CommonStyle.flex_one]}>
        <Component.Text>{props.children}</Component.Text>
      </Component.View>
    ) 
    
  },
}; /////////////////////////////UI Functions END/////////////////////////////////