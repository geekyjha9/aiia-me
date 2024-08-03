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
    container : {
      flexDirection : 'row',
    },
    checkbox:{
      justifyContent: "center",
      alignItems: "center",
    }
  });
}; //////////////////////////// Module Exports END //////////////////////////////
