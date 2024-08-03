"use strict";
/************************************************************************
Info: Text Component specific styles

@author - Ankit Singh
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (config) {
  // Create & Export StyleSheet
  return StyleSheet.create({

    textAlign: { // Text Align Styling
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
      justify: {
        textAlign: "justify",
      },
      auto: {
        textAlign: "auto",
      },
    },

    fontStyle: { // Font Style Styling
      normal: {
        fontStyle: "normal",
      },
      italic: {
        fontStyle: "italic",
      },
    },

    textDecorationLine: { // Font Text Decoration Line
      underline: {
        textDecorationLine: "underline",
      },
      lineThrough: {
        textDecorationLine: "line-through",
      },
      underlineLineThrough: {
        textDecorationLine: "underline line-through",
      },
    },

    writingDirection: { // IOS Only: Set writing direction used for Arabic Languages
      ltr: {
        writingDirection: "ltr",
      },
      rtl: {
        writingDirection: "rtl",
      },
    },

  });
};
///////////////////////////  Module Export END ////////////////////////
