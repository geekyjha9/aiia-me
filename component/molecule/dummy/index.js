'use strict';
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
import React from 'react';

// React Native Core Component (Private Scope)
import { Text } from 'react-native';

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
const loader = function(components, common_style, config){

  // Shared Dependencies (Must be loaded in memory already)
  Component = components; // Load all components 
  CommonStyle = common_style; // Load Common styles

  // Configuration (Managed my Main Entry Module)
  CONFIG = config;

  // Load this component's styles
  Style = require('./style.js')(CONFIG);

};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(components, common_style, config){ // Export Public Interfaces of this module

  // Load loader
  loader(components, common_style, config);

  // Load default props
  _DummyComponent.setDefaultProps();

  // Return Component
  return DummyComponent;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
Dummy Component

@param {Set} props - Component Properties
* @param {String} example - description of prop

@return {Jsx} - DummyComponent Component
*********************************************************************/
const DummyComponent = function(props){ // Public functions accessible by other modules

  // Return Component
  return (
    <>
      {/*
        Component code here
      */}
    </>  
  );

};////////////////////////////// Component END /////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _DummyComponent = { // Private functions accessible within this module only
 
  /********************************************************************
  Set default prop values of this component

  No Param

  Return None
  *********************************************************************/
  setDefaultProps: function(){

    // Set component properties with default(fallback) values
    DummyComponent.defaultProps = {

      example: 'This is a default prop',

    };

  },

};//////////////////////////Private Functions END///////////////////////////////



//////////////////////////////UI Functions START////////////////////////////////
const _DummyComponentUI = { // Private UI functions accessible within this module only
// None
};/////////////////////////////UI Functions END/////////////////////////////////