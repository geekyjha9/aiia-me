"use strict";
/******************************************************************************************

Info: Component View

@author - Ankit Singh

@contributor - None

*******************************************************************************************/

// Shared Dependecies - (Managed by Loader Function)
var Component;
var CommonStyle;
var Style;
var Config;

// React Component (Private Scope)
import React, {} from "react";

// React Native Component & APIs (Private Scope)
import { View } from "react-native";

///////////////////////////  Module Loader START ///////////////////////////////////////////
/****************************************************************************
Load Dependency & Configuration

@param {Set} component - component (Atom & Molecules)
@param {Set} commmon_style - common_style used by all components
@param {Set} config - App theme & configuration

Return None
****************************************************************************/
const loader = function (component, common_style, config) {
  // Load Component, CommonStyle, Config in this module (Which are already loaded in memory by project's entry loader.js)
  CommonStyle = common_style; // Load common_style in this module
  Component = component; // Load all components in this module
  Config = config; // Load config in this module

  // Load component style.js in this module
  Style = require("./style")(Config);
};
///////////////////////  Module Loader End /////////////////////////////////////////////////

////////////////////////// Module Exports START /////////////////////////////////////////////
module.exports = function (component, commmon_style, config) {
  //Load Loader
  loader(component, commmon_style, config);

  //Load Default Props
  _ViewComponent.setDefaultProps();

  //Return Component
  return ViewComponent;
};
///////////////////////// Module Exports END ////////////////////////////////////////////////

///////////////////////////////// Component START ///////////////////////////////////////////
/*******************************************************************************************
View Component

@param {Set} Props - View Component Properties
 
@return {JSX} - View Component
**********************************************************************************************/
const ViewComponent = function (props) {
  //Public function accessible by other modules

  return (
    <View
      {...props}
    >
      {props.children}
    </View>
  );

};
//////////////////////////////// Component END  /////////////////////////////////////////////

/////////////////////////////// Private Function START //////////////////////////////////////
const _ViewComponent = {// Private Functions accessible within this module only

    /****************************************************************************************
    It Sets default prop values of ViewComponent

    No Param

    Return None
    *****************************************************************************************/
    setDefaultProps: function () {

        ViewComponent.defaultProps = {

        };
    },
}
////////////////////////////// Private Function END ////////////////////////////////////////
