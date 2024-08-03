"use strict";
/*********************************************************************************

Info: Component Icon SVGs

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
import { Platform } from "react-native";

// React Native SVG Library Component (Private Scope)
var ReactNativeSVG = require('react-native-svg');

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

  // Set default(fallback) properties of the IconComponent
  _IconComponent.setDefaultProps();

  // Return Component
  return IconComponent;
};
//////////////////////// Module Export END /////////////////////////////////////

//////////////////////// Component START //////////////////////////////////////
/******************************************************************************
Icon Component

@param {Set} props - Icon Component Properties
*@param {String} name - Icon name have to pass. Eg:- cross_icon, text_icon etc, for more detail understanding refer /src/assets/icons/svg.js
*@param {String} size - Size to automatically set height & width using _IconComponent.determineIconHeight & _IconComponent.determineIconWidth function. It accepts Enum[small, regular, large, xl, ...]
*@param {Number} height - For the Custom height
*@param {Number} width - For the Custom width
*@param {Number} strokeWidth - For the strokeWidth of the SVG
*@param {String} viewBox - For the viewBox of the SVG
*@param {String} fill - For the color of the SVG
*@param {String} fillRule - For the fillRule of the SVG
*@param {String} stroke - For the stroke(border) of the SVG

@return {Jsx} - Icon Component
*******************************************************************************/
const IconComponent = function (props) {

  if(!props.name){
    return null;
  }  
  var name = Config.SVG[props.name + '.' + Platform.OS] || Config.SVG[props.name];
  if(!name){
    return null;
  }
  var height = _IconComponent.determineIconHeight(props).toString();
  var width = _IconComponent.determineIconWidth(props).toString();
  var strokeWidth = props.strokeWidth ? props.strokeWidth.toString() : null;
  var isSimple = React.isValidElement(name);
  var SVGElem = isSimple ? name : name.svg;
  var viewBox;
  if(props.viewBox && props.viewBox !== IconComponent.defaultProps.viewBox){
    viewBox = props.viewBox;
  } else if(!isSimple && name.viewBox){
    viewBox = name.viewBox;
  } else if(props.defaultViewBox){
    viewBox = props.defaultViewBox
  } else{
    viewBox = IconComponent.defaultProps.viewBox
  }

  // Return Component
  return (
    <ReactNativeSVG.default
        style={props.style}
        height={height}
        width={width}
        viewBox={viewBox}
    >
        {React.cloneElement(SVGElem,{
            fill: props.fill,
            fillRule: props.fillRule,
            stroke: props.stroke,
            strokeWidth: strokeWidth 
        })}
    </ReactNativeSVG.default>
  );
};
///////////////////////  Component END ////////////////////////////////////////

//////////////// Private Utility Function for IconComponent START /////////////
const _IconComponent = {
  // Private Scope accessible in this module only

  /*****************************************************************************
  It will sets the default(fallback) properties of IconComponent

  No Param
  
  Return None
  ******************************************************************************/
  setDefaultProps: function () {
    // Set IconComponent default properties
    IconComponent.defaultProps = {
        fill:"#000000",
        fillRule:'evenodd',
        size:'small',
        viewBox:'0 0 48 48'
    };
  },

  /********************************************************************
  determineIconHeight function will calculate the height using size props. Size accepts Enum[small, regular, large, xl, ...] 

  @param {Set} props - IconComponent Props

  @return {Number} - A fixed number. Example 16, 18, 24, 32, 40
  *********************************************************************/
  determineIconHeight: function(props){

    // If there is already a height props received than return that particular height only
    if(props.height){
      return props.height;
    }

    // If props.height is not set, & props.size is available
    if(props.size == 'small'){ // For Small
      return 16;
    }
    if(props.size == 'regular'){ // For Regular
      return 18;
    }
    if(props.size == 'large'){ // For Large
      return 24;
    }
    if(props.size == 'xl'){ // For xl
      return 32;
    }
    if(props.size == 'xxl'){ // For xxl
      return 40;
    }
    if(props.size == 'xxxl'){ // For xxxl
      return 48;
    }
   
  },

  /********************************************************************
  determineIconWidth function will calculate the width using size props. Size accepts Enum[small, regular, large, xl, ...] 

  @param {Set} props - IconComponent Props

  @return {Number} - A fixed number. Example 16, 18, 24, 32, 40
  *********************************************************************/
  determineIconWidth: function(props){

    // If there is already a width props received than return that particular height only
    if(props.width){
      return props.width;
    }

    // If props.width is not set, & props.size is available
    if(props.size == 'small'){ // For Small
      return 16;
    }
    if(props.size == 'regular'){ // For Regular
      return 18;
    }
    if(props.size == 'large'){ // For Large
      return 24;
    }
    if(props.size == 'xl'){ // For xl
      return 32;
    }
    if(props.size == 'xxl'){ // For xxl
      return 40;
    }
    if(props.size == 'xxxl'){ // For xxxl
      return 48;
    }
   
  },

};
//////////////// Private Utility Function for IconComponent END ///////////////
