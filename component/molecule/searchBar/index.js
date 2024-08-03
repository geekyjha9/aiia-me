"use strict";
/*********************************************************************************

Info: SearchBar Component

@author - Shivam Kumar Jha

@contributor - None

***********************************************************************************/

// Shared Dependencies (Managed by Loader)
var Component; // Reference to common React components
var CommonStyle; // Reference to common styles
var Style; // Reference to styles specific to SearchBar

// React (Private Scope)
import React, { useState } from "react";

// React Native Base Component (Private Scope)
import { TextInput, View, TouchableOpacity, Platform } from "react-native";


// Module Configuration (Managed by Loader)
var CONFIG;

/////////////////////////// Module-Loader START ////////////////////////////////
/********************************************************************
Load dependencies and Configurations

@param {Set} shared_libs - Reference to libraries already loaded in memory by other modules

*********************************************************************/
const loader = function (components, common_style, config) {
  // Shared Dependencies (Managed by Main Entry Module)

  Component = components; // Set common React components
  CommonStyle = common_style; // Set common styles
  CONFIG = config; // Set configuration options

  // Load component style.js in this module
  Style = require("./style")(CONFIG);
}; ////////////////////////// Module-Loader END /////////////////////////////////

///////////////////////////// Module Exports START /////////////////////////////
module.exports = function (components, common_style, config) {
  // Export Public Interfaces of this module

  // Execute loader
  loader(components, common_style, config);

  // Set default props for SearchBar
  _SearchBar.setDefaultProps();

  // Return Molecule (SearchBar)
  return SearchBar;
}; //////////////////////////// Module Exports END //////////////////////////////




//////////////////////////////// Molecule START ///////////////////////////////
/******************************************************************************
SearchBar Component

@param {Set} props - SearchBar Component Properties 
* @param {Number} fontSize - Font size for the search input
* @param {String} fontWeight - Font weight for the search input
* @param {String} placeholder - Placeholder text for the search input
* @param {String} placeholderTextColor - Color of the placeholder text
* @param {String} keyboardType - Type of keyboard to be displayed
* @param {Boolean} autoFocus - If true, the search input is focused on mount
* @param {Number} maxLength - Maximum number of characters allowed in the search input
* @param {Boolean} secureTextEntry - If true, the text input obscures the text
* @param {Boolean} multiline - If true, the text input can be multiple lines
* @param {Boolean} disabled - If true, the search input is disabled
* @param {String} color - Color of the text in the search input
* @param {Boolean} isBorder - If true, the search input has a border
* @param {Boolean} parentWidth - If true, the search input width is set to match its parent
* @param {String} defaultValue - Default initial value for the search input
* @param {Function} onFocus - Callback function when the search input is focused
* @param {Function} onBlur - Callback function when the search input loses focus
* @param {Function} onChangeText - Callback function when the search text changes
* @param {Function} onLeftIconPress - Callback function when the left icon is pressed
* @param {Function} onRightIconPress - Callback function when the right icon is pressed
* @param {Function} onSubmitEditing - Callback function when the search input is submitted
* @param {Number} gap - Gap between elements in the SearchBar
* @param {Number} hPadding - Horizontal padding for the SearchBar
* @param {Number} vPadding - Vertical padding for the SearchBar

@return {Jsx} - SearchBar Component
*******************************************************************************/

const SearchBar = function (props) {
  const [searchText, setSearchText] = useState("");


  return (

    <Component.ButtonAtom>
      {(state) => (
        <View
          style={[
            state.pressed
              ? CommonStyle.background_bg_secondary_pressed
              : state.hovered
              ? CommonStyle.background_bg_secondary_hovered
              : CommonStyle.background_bg_secondary,

            Style.searchBar,
            props.style,
            CommonStyle.flex_row,
            CommonStyle.a_i_center,
            CommonStyle.br_secondary,
            props.gap ? { gap: props.gap } : null,
            props.hPadding ? CommonStyle[`p_h_${props.hPadding}`] : null,
            props.vPadding ? CommonStyle[`p_v_${props.vPadding}`] : null,
            {
              ...Platform.select({
                ios: {
                  shadowColor: "rgba(0, 0, 0, 0.10)",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 1,
                  shadowRadius: 3,
                },
                android: {
                  elevation: 3,
                },
                default: {
                  boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.10)",
                },
              }),
            },
          ]}
        >
          {/* Left Icon */}
          {props.leftIcon && _SearchBarComponentUI.renderLeftIcon(props)}

          {/* Search Field */}
          {_SearchBarComponentUI.renderSearchInput(
            props,
            searchText,
            setSearchText
          )}

          {/* Right Icon */}
          {props.rightIcon && _SearchBarComponentUI.renderRightIcon(props)}
        </View>
      )}
    </Component.ButtonAtom>
  );
};
/////////////////////////////// Molecule END ////////////////////////////////

//////////////// Private Utility Function for SearchBar START //////////////////
const _SearchBar = {
  // Private Scope accessible in this module only

  /*****************************************************************************
   * Sets the default properties of SearchBar.
   *
   * No Param
   *
   * @return {void} None
   ******************************************************************************/
  setDefaultProps: function () {
    // Set default properties for SearchBar
    SearchBar.defaultProps = {
      fontSize: "regular", // Default font size for search input
      fontColor: "primary_subtle", // Default font Color for search input
      fontWeight: "normal", // Default font weight for search input
      placeholder: "Search Symptoms..Eg: Cold, Caugh...", // Default placeholder text
      placeholderTextColor: "primary_xsubtle", // Default placeholder text color
      keyboardType: "default", // Default keyboard type
      autoFocus: false, // Default autofocus
      maxLength: undefined, // Default max length for input
      secureTextEntry: false, // Default secure text entry
      multiline: false, // Default multiline input
      disabled: false, // Default disabled state
      isBorder: false, // Default border state
      parentWidth: false, // Default parent width state
      defaultValue: undefined, // Default initial value for input
      onFocus: false, // Default focus event handler
      onBlur: false, // Default blur event handler
      onLeftIconPress: undefined, // Default left icon press event handler
      onRightIconPress: undefined, // Default right icon press event handler
      onSearchTextChange: undefined, // Default search text change event handler
      onSubmitEditing: undefined, // Default submit editing event handler
      gap: 8, // Default gap between elements
      hPadding: 16, // Default horizontal padding
      vPadding: 8, // Default vertical padding
    };
  },
};
//////////////// Private Utility Function for SearchBar END ////////////////////

//////////////// Private Utility Function for SearchBarComponent START /////////////
const _SearchBarComponent = {
  // Private Scope accessible in this module only

  /*****************************************************************************
   * Handles changes in the search text input and invokes the external onChangeText callback.
   *
   * @param {string} text - The new value of the search text
   * @param {function} setSearchText - The state setter for the search text
   * @param {object} props - Component properties
   *
   * @return {void} None
   ******************************************************************************/
  handleSearchChange: function (text, setSearchText, props) {
    setSearchText(text);
    props.onChangeText && props.onChangeText(text);
  },

  /*****************************************************************************
   * Handles the submission of the search input and invokes the external onSubmitEditing callback.
   *
   * @param {object} props - TextInput Component Properties
   * @param {string} searchText - The current value of the search text
   *
   * @return {void} None
   ******************************************************************************/
  handleSearchSubmit: function (props, searchText) {
    props.onSubmitEditing && props.onSubmitEditing(searchText);
  },

}
//////////////// Private Utility Function for SearchBarComponent END ///////////////

///////////////////////// UI Function & Properties START ///////////////
const _SearchBarComponentUI = {
  /********************************************************************
  It renders the left icon button within the SearchBar component.

  @param {Set} props - React props passed from screen
  
  @return {Jsx} - Component
  *********************************************************************/
  renderLeftIcon: function (props) {
    

    return (
      <Component.ButtonAtom
        style={[Style.iconContainer, CommonStyle.p_4]}
        onPress={props.onLeftIconPress}
      >
        {() => <Component.Icon name={props.leftIcon} />}
      </Component.ButtonAtom>
    );
  },

  /********************************************************************
  It renders the search input field within the SearchBar component.

  @param {Set} props - React props passed from component
  @param {string} searchText - The current value of the search text
  @param {function} setSearchText - The state setter for search text
  
  @return {Jsx} - Component
  *********************************************************************/
  renderSearchInput: function (props, searchText, setSearchText) {
    return (
      <Component.View
        style={[CommonStyle.justify_flex_start, CommonStyle.flex_one]}
      >
        <Component.TextInputAtom
          borderWidth={"none"}
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          style={[CommonStyle.flex_1]}
          placeholder={props.placeholder || "Search"}
          placeholderTextColor={props.placeholderTextColor || "#888"}
          value={searchText}
          onChangeText={(text) => {
            _SearchBarComponent.handleSearchChange(text, setSearchText, props);
          }}
          onSubmitEditing={() => {
            _SearchBarComponent.handleSearchSubmit(props, searchText);
          }}
          keyboardType={props.keyboardType}
          autoFocus={props.autoFocus}
          maxLength={props.maxLength}
          secureTextEntry={props.secureTextEntry}
          multiline={props.multiline}
          disabled={props.disabled}
          fontColor={props.fontColor}
          parentWidth={props.parentWidth}
          defaultValue={props.defaultValue}
        />
      </Component.View>
    );
  },

  /********************************************************************
  It renders the right icon button within the SearchBar component.

  @param {Set} props - React props passed from screen
  
  @return {Jsx} - Component
  *********************************************************************/
  renderRightIcon: function (props) {
    return (
      <Component.ButtonAtom
        style={[Style.iconContainer, CommonStyle.p_4]}
        onPress={props.onRightIconPress}
      >
        {() => <Component.Icon name={props.rightIcon} />}
      </Component.ButtonAtom>
    );
  },
};
//////////////////////// UI Function & Properties END ///////////////////
