"use strict";
/************************************************************************
Info: TextInput Component specific styles

@author - Ankit Singh
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (config) {
  // Create & Export StyleSheet
  return StyleSheet.create({
    textInputParentContainer: {
      base: {
        padding: 8
      },
      hovered: {},
      focused: {},
    },
    borderColor: {
      primary: {
        base: { borderColor: config?.COLOR?.BORDER_PRIMARY?.BASE },
        pressed: { borderColor: config?.COLOR?.BORDER_PRIMARY?.PRESSED },
        hovered: { borderColor: config?.COLOR?.BORDER_PRIMARY?.HOVERED },
        disabled: { borderColor: config?.COLOR?.BORDER_PRIMARY?.DISABLED },
      },
      secondary: {
        base: { borderColor: config?.COLOR?.BORDER_SECONDARY?.BASE },
        pressed: { borderColor: config?.COLOR?.BORDER_SECONDARY?.PRESSED },
        hovered: { borderColor: config?.COLOR?.BORDER_SECONDARY?.HOVERED },
        disabled: { borderColor: config?.COLOR?.BORDER_SECONDARY?.DISABLED },
      },
      success: {
        base: { borderColor: config?.COLOR?.STATUS_SUCCESS?.BASE },
        pressed: { borderColor: config?.COLOR?.STATUS_SUCCESS?.PRESSED },
        hovered: { borderColor: config?.COLOR?.STATUS_SUCCESS?.HOVERED },
        disabled: { borderColor: config?.COLOR?.STATUS_SUCCESS?.DISABLED },
      },
      danger: {
        base: { borderColor: config?.COLOR?.STATUS_DANGER?.BASE },
        pressed: { borderColor: config?.COLOR?.STATUS_DANGER?.PRESSED },
        hovered: { borderColor: config?.COLOR?.STATUS_DANGER?.HOVERED },
        disabled: { borderColor: config?.COLOR?.STATUS_DANGER?.DISABLED },
      },
    },
  });
};
///////////////////////////  Module Export END ////////////////////////
