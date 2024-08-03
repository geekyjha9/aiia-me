"use strict";
/********************************************************************
Info: Component - Dummy

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
import { View } from "react-native";

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

@return {Jsx} - CheckboxPrimary Component
*********************************************************************/
const CheckboxPrimary = function (props) {
  // Public functions accessible by other modules

  // Initialize React states used in this specific Component
  const [is_selected, set_is_selected] = useState(props.isSelected);

  useEffect(() => {
    // Causes re-rendering and reset selected state to checkbox
    set_is_selected(props.isSelected);
  }, [props.isSelected])


  // Return Component
  return (
    <Component.Checkbox isSelected={props.isSelected} onPress={props.onPress}>
      {
        (state) => 
        _CheckboxPrimaryUI.renderContent(state, props)
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
      icon_name: "text_icon",
      iconWidth: 50,
      iconHeight: 50,
      color:'APP_PRIMARY'
    };
  },
}; //////////////////////////Private Functions END///////////////////////////////




//////////////////////////////UI Functions START////////////////////////////////
const _CheckboxPrimaryUI = {
  // Private UI functions accessible within this module only

  /********************************************************************
  Set default prop values of this component

  @param {Set} props - props passed from screen for checkbox
  * @param {Number} dimension - props passed from screen for checkbox dimension
  * @param {String} color - props passed from screen for checkbox color. It accepts Enum["APP_PRIMARY", "APP_SECONDARY"]
  
  @return {Jsx} - Component
  *********************************************************************/
  renderContent: function (state, props, is_selected) {
    return (
      // <Component.CardWrapper style={[CommonStyle.m_20, CommonStyle.p_8]}>
      <View>
      <Component.View style={[Style.container]}>
        <Component.View style={[CommonStyle.a_s_flex_end]}>
        {_CheckboxPrimaryUI.renderCheckboxIcon(state, props)}
        </Component.View>
        {_CheckboxPrimaryUI.renderChildren(state, props, is_selected)}
      </Component.View>
      </View>
      // </Component.CardWrapper>
    );
  },

  /********************************************************************
  Set default prop values of this component

  @param {Set} props - props passed from screen for checkbox
  @param {Number} dimension - props passed from screen for checkbox dimension
  @param {String} color - props passed from screen for checkbox color. It accepts Enum["APP_PRIMARY", "APP_SECONDARY"]

  @return {Jsx} - Component
  *********************************************************************/
  renderCheckboxIcon: function (state, props) {
    return (
      <Component.View
        style={[
          Style.checkbox,
          {
            width: props.dimension,
            height: props.dimension,
            borderWidth: CONFIG?.DIMENSION?.BORDER_WIDTH_SECONDARY,
            borderColor: CONFIG?.COLOR[props.color.toUpperCase()]?.BASE
          },
          props.isSelected ? { backgroundColor: CONFIG?.COLOR[props.color.toUpperCase()]?.BASE} : ""
        ]}
      >
        {/* Tick Icon whenever the checkbox is selected */}
        {props.isSelected && <Component.Icon size={"small"} name={"tick_icon"} fill={"white"}/>}
      </Component.View>
    );
  },




  /********************************************************************
  Set default prop values of this component
  @param {Set} props - props passed from screen for checkbox
  @return {Jsx} - Component
  *********************************************************************/
  renderChildren: function (state, props) {
    return (
      <Component.View>
        {props.children}
      </Component.View>
    ) 
    
  },
}; /////////////////////////////UI Functions END/////////////////////////////////
