"use strict";
/************************************************************************
Info: Separator Component specific styles

@author - Ankit Singh
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (config) {
  // Create & Export StyleSheet
  return StyleSheet.create({
    border_width_primary: {
      borderWidth: config.DIMENSION.BORDER_WIDTH_PRIMARY / 2,
    },
    border_width_secondary: {
      borderWidth: config.DIMENSION.BORDER_WIDTH_SECONDARY / 2,
    },
    border_width_tertiary: {
      borderWidth: config.DIMENSION.BORDER_WIDTH_TERTIARY / 2,
    },
    border_style_solid: {
      borderStyle: "solid",
    },
    border_style_dotted: {
      borderStyle: "dotted",
    },
    border_style_dashed: {
      borderStyle: "dashed",
    },
  });
};
///////////////////////////  Module Export END ////////////////////////
