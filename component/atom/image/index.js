'use strict';
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
import React from 'react';

// React Native Core Component (Private Scope)
import { Image,Text, View } from 'react-native';

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
  _ImageComponent.setDefaultProps();

  // Return Component
  return ImageComponent;

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////////// Component START ///////////////////////////////
/********************************************************************
Dummy Component

@param {Set} props - Component Properties
* @param {Set} style - style of prop
* @param {Number} height - height of image from prop
* @param {Number} width - width of image from prop
* @param {String} sourceUri - sourceUri of image from prop
* @param {String} resizeMode - resize the image when the frame doesn't match the raw image dimensions
* @param {String} alt - defines an alternative text description of the image
* @param {Boolean} accessible - indicates the image is an accessibility element
* @param {Boolean} accessibilityLabel - text that's read by the screen reader when the user interacts with the image.
* @param {Number} blurRadius - blur filter added to the image (On IOS, Need to increase blurRadius by more than 5)
* @param {String} crossOrigin - CORS mode to use when fetching the image resource
* @param {Set} defaultSource - static image to display while loading the image source.


@return {Jsx} - ImageComponent Component
*********************************************************************/
const ImageComponent = function(props){ // Public functions accessible by other modules

// If 'isLocal' is true, use the 'require' method for local images.
// If 'isLocal' is false, assume the image is from the network and use the 'uri' property.
  const imageSource ={ uri: props.sourceUri };


  // Return Component
  return (
    <>
      <Image 
      style={[
        {width:props.width, height:props.height}
      ]}
      source={imageSource}
      resizeMode={props.resizeMode}
      alt={props.alt}
      accessible={props.accessible}
      accessibilityLabel={props.accessibilityLabel}
      blurRadius={props.blurRadius}
      crossOrigin={props.crossOrigin}
      defaultSource={props.defaultSource}
      >
      </Image>


    </>  
  );

};////////////////////////////// Component END /////////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _ImageComponent = { // Private functions accessible within this module only
 
  /********************************************************************
  Set default prop values of this component

  No Param

  Return None
  *********************************************************************/
  setDefaultProps: function(){

    // Set component properties with default(fallback) values
    ImageComponent.defaultProps = {
      width:25,
      height:25,
      sourceUri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
      isLocal:false
    };

  },

};//////////////////////////Private Functions END///////////////////////////////



//////////////////////////////UI Functions START////////////////////////////////
const _ImageComponentUI = { // Private UI functions accessible within this module only
// None
};/////////////////////////////UI Functions END/////////////////////////////////