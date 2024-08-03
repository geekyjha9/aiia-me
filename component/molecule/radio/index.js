"use strict";
/********************************************************************
Info: Component - Dummy

@author - 
@contributor - None
*********************************************************************/

// Shared Dependencies (Managed by Loader)
var CommonStyle;
var Component;
var Style;

// React (Private Scope)
import React, {useState, useEffect} from "react";

// React Native Core Component (Private Scope)
import { Text } from "react-native";

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
  _RadioComponent.setDefaultProps();

  // Return Component
  return RadioComponent;
}; //////////////////////////// Module Exports END //////////////////////////////

//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
Dummy Component

@param {Set} props - Component Properties
* @param {String} onSelectionChange - whether the checkbox is selected or not
* @param {String} isTick - whether the checkbox is ticked or rounded
* @param {String} gap - gap between radio & text


@return {Jsx} - RadioComponent Component
*********************************************************************/
const RadioComponent = function (props) {
  // Public functions accessible by other modules

  // Initialize React states used in this specific Component
  const [is_selected, set_is_selected] = useState(false);

  

  //onPress of checkbox toogle the state
  const onPressHandler = () => {
    set_is_selected((prev_val) => !prev_val)

    
    if(props.onSelectionChange)
    props.onSelectionChange(!is_selected);
  }

  // Return Component
  return (
    <>
      <Component.Checkbox onSelectionChange={props.onSelectionChange}  onPress={onPressHandler}>
        {(state) => _RadioComponentUI.renderContent(state, props, is_selected)}
      </Component.Checkbox>
    </>
  );
}; ////////////////////////////// Component END /////////////////////////////////

//////////////////////////Private Functions START///////////////////////////////
const _RadioComponent = {
  // Private functions accessible within this module only

  /********************************************************************
  Set default prop values of this component

  No Param

  Return None
  *********************************************************************/
  setDefaultProps: function (state, props) {
    // Set component properties with default(fallback) values
    RadioComponent.defaultProps = {
      borderRadius: 0,
      dimension: 25,
      children: "Default Label",
      color:'APP_PRIMARY',
      isTick:true,
      gap:15
    };
  },
}; //////////////////////////Private Functions END///////////////////////////////

//////////////////////////////UI Functions START////////////////////////////////
const _RadioComponentUI = {
  // Private UI functions accessible within this module only

  /********************************************************************
  Set default prop values of this component

  @param {Set} props - props passed from screen for checkbox
  
  @return {Jsx} - Component
  *********************************************************************/
  renderContent: function (state, props, is_selected) {
    return (
      <Component.View style={[
        Style.container,
        {gap: props.gap} 
        ]}>
        {_RadioComponentUI.renderRadioIcon(state, props, is_selected)}
        {_RadioComponentUI.renderText(state, props)}
      </Component.View>
    );
  },

  /********************************************************************
  Set default prop values of this component

  @param {Set} props - props passed from screen for checkbox
  
  @return {Jsx} - Component
  *********************************************************************/
  renderRadioIcon: function (state, props, is_selected) {
    return (
      <Component.View
        style={[
          Style.radio,
          {
            width: props.dimension,
            height: props.dimension,
            borderRadius: props.borderRadius,
            borderWidth: CONFIG?.DIMENSION?.BORDER_WIDTH_SECONDARY,
            borderColor: CONFIG?.COLOR[props.color.toUpperCase()]?.BASE
          },
          (is_selected && 
          props.isTick)?  { backgroundColor: CONFIG?.COLOR[props.color.toUpperCase()]?.BASE} : ""
        ]}
      >

        {/* Tick Icon whenever the checkbox is selected */}
        {is_selected 
         && 
         (props.isTick ?
         <Component.Icon fill={CONFIG?.COLOR?.BACKGROUND_SECONDARY?.BASE} size={"small"} name={"tick_icon"}/>:
         ""
         )}

         {/* {props.onSelectionChange && <Component.Icon size={"xl"} name={"text_icon"}/>} */}
      </Component.View>
    );
  },

  /********************************************************************
  Set default prop values of this component

  @param {Set} props - props passed from screen for checkbox

  @return {Jsx} - Component
  *********************************************************************/
  renderText: function (state, props) {
    return <Component.Text>{props.children}</Component.Text>;
  },
}; /////////////////////////////UI Functions END/////////////////////////////////
