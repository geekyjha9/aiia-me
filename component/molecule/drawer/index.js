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
import React, { useState } from "react";

// React Native Core Component (Private Scope)
import { Text, Animated, View, Button } from "react-native";

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
  _Drawer.setDefaultProps();

  // Return Component
  return Drawer;
}; //////////////////////////// Module Exports END //////////////////////////////

//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
Dummy Component

@param {Set} props - Component Properties
* @param {Number} drawerWidth - description of prop

@return {Jsx} - Drawer Component
*********************************************************************/
const Drawer = function (props) {
  // Public functions accessible by other modules

  // State variable to track the open/close state of the drawer
  const [isOpen, setIsOpen] = useState(true);

  const drawerWidth = props.drawerWidth; // Width of the drawer
  const translateX = isOpen ? 0 : -drawerWidth; // Set the translateX value based on the open/close state


  // Return Component
  return (
    <View style={Style.container}>

      <Animated.View style={[Style.drawer, {width:props.drawerWidth, transform: [{ translateX }] }]}>

         {/* Button to close the drawer */}
        <View style={{flexDirection:'row', justifyContent:'flex-end' }}>

          <Component.View style={Style.icon}>

             <Component.Button
              iconLeft={{
                name: "text_icon",
              }}
              onPress={() => setIsOpen(false)}
            /> 
           
          </Component.View>

        </View>

        {/* Render the children components */}
        {props.children}

      </Animated.View>
      
    </View>
  );
}; ////////////////////////////// Component END /////////////////////////////////

//////////////////////////Private Functions START///////////////////////////////
const _Drawer = {
  // Private functions accessible within this module only

  /********************************************************************
  Set default prop values of this component

  No Param

  Return None
  *********************************************************************/
  setDefaultProps: function () {
    // Set component properties with default(fallback) values
    Drawer.defaultProps = {
      drawerWidth: 200,
    };
  },
}; //////////////////////////Private Functions END///////////////////////////////

//////////////////////////////UI Functions START////////////////////////////////
const _DrawerUI = {
  // Private UI functions accessible within this module only
  // None
}; /////////////////////////////UI Functions END/////////////////////////////////
