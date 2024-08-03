// Info: Component for all Modules
'use strict';

// Shared Dependencies (Managed by Loader)
var CommonStyle; // Common Styling used by all component

// Exclusive Dependencies
var CONFIG; // Module Configuration (Managed by Loader)

// React Native Core Component and APIs (Private Scope)
import { Platform } from 'react-native';


/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} color - Default Theme color of the App
@param {Set} dimension - Font size used by all module
@param {Set} font - Type of fonts in this app
@param {Set} svg - Svg icons

Return None
*********************************************************************/
const loader = function(color, dimension, font, svg){
  
  CONFIG = {
    COLOR: color,
    DIMENSION: dimension,
    FONT: font,
    SVG: svg,
    WIDTH_MAX_MOBILE: 480,
    WIDTH_MAX_TABLET: 960,
    FULL_WIDTH: Platform.OS == 'web' ? '100vw' : '100%', //?
    FULL_HEIGHT: Platform.OS == 'web' ? '100vh' : '100%', //?

  };

  // Load Common Styles
  CommonStyle = require('./commonStyles')(CONFIG);

};/////////////////////////// Module-Loader END ////////////////////////////////



///////////////////////////// Module Exports START /////////////////////////////
module.exports = function(color, dimension, font, svg){

  // Run Loader
  loader(color, dimension, font, svg);

  // Import All Public Component
  return Component.combineComponent();

};//////////////////////////// Module Exports END //////////////////////////////



//////////////////////////Public Functions START///////////////////////////////
const Component = {  // Public functions accessible by other modules
 
  /********************************************************************
  Initialize component

  No Params

  @return {Set} - List of all Component
  *********************************************************************/
  combineComponent: function(){

    // Initialize set of Component
    let component = {};


    // Import All Public Component from atom
    component['Text'] = require('./atom/text')(component, CommonStyle, CONFIG); // Load Text Component
    component['Icon'] = require('./atom/icon')(component, CommonStyle, CONFIG); // Load Icon Component
    component['View'] = require('./atom/view')(component, CommonStyle, CONFIG); // Load View Component
    component['ButtonAtom'] = require('./atom/button')(component, CommonStyle, CONFIG); // Load ButtonAtom Component
    component['TextInputAtom'] = require('./atom/textInput')(component, CommonStyle, CONFIG); // Load TextInputAtom Component
    component['Separator'] = require('./atom/separator')(component, CommonStyle, CONFIG); // Load Separator Component
    component['ProgressIndicator'] = require('./atom/progressIndicator')(component, CommonStyle, CONFIG); // Load Progress Indicator Component
    component['CardWrapper'] = require('./atom/cardWrapper')(component, CommonStyle, CONFIG); // Load Card Wrapper Component
    component['Checkbox'] = require('./atom/checkbox')(component, CommonStyle, CONFIG); // Load CheckboxWrapper(Checkbox Atom) Component
    component['Image'] = require('./atom/image')(component, CommonStyle, CONFIG);  // Load Image Component

    
    // Import All Public Component from molecule
    component['Button'] = require('./molecule/button')(component, CommonStyle, CONFIG); // Load Button Component
    component['TextInput'] = require('./molecule/textInput')(component, CommonStyle, CONFIG); // Load TextInput Component
    component['CheckboxPrimary'] = require('./molecule/checkboxPrimary')(component, CommonStyle, CONFIG); // Load CheckboxPrimary Component
    component['CheckboxSecondary'] = require('./molecule/checkboxSecondary')(component, CommonStyle, CONFIG); // Load CheckboxPrimary Component
    component['CheckboxTertiary'] = require('./molecule/checkboxTertiary')(component, CommonStyle, CONFIG); // Load CheckboxPrimary Component
    component['Drawer'] = require('./molecule/drawer')(component, CommonStyle, CONFIG); // Load Drawer Component
    component['Radio'] = require('./molecule/radio')(component, CommonStyle, CONFIG); // Load Radio Component
    component['SearchBar'] = require('./molecule/searchBar')(component, CommonStyle, CONFIG); // Load SearchBar Component

    // Return Component
    return component;

  },

};//////////////////////////Public Functions End////////////////////////////////



//////////////////////////////UI Functions START////////////////////////////////
const _Component = { // Private functions accessible within this module only
// None
};/////////////////////////////UI Functions END/////////////////////////////////