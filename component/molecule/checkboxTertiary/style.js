"use strict";
/********************************************************************
// Info: Component specific Styles

@author - None
@contributor - None
*********************************************************************/

// React native base component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Exports START /////////////////////////////
module.exports = function (config) {
  // Create and Export Style-Sheet
  return StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      gap:10,
    },

    checkbox:{
      justifyContent: "center",
      alignItems: "center",
    }
  });
}; //////////////////////////// Module Exports END //////////////////////////////
