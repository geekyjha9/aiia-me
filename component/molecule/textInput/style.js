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
    size: {
      // style for size props
      XS: {
        width: config?.DIMENSION?.XS * 10,
        height: config?.DIMENSION?.XS * 3,
      },
      SMALL: {
        width: config?.DIMENSION?.SMALL * 10,
        height: config?.DIMENSION?.SMALL * 3,
      },
      REGULAR: {
        width: config?.DIMENSION?.REGULAR * 10,
        height: config?.DIMENSION?.REGULAR * 3,
      },
      LARGE: {
        width: config?.DIMENSION?.LARGE * 15,
        height: config?.DIMENSION?.LARGE * 3,
      },
      XL: {
        width: config?.DIMENSION?.XL * 15,
        height: config?.DIMENSION?.XL * 3,
      },
      XXL: {
        width: config?.DIMENSION?.XXL * 15,
        height: config?.DIMENSION?.XXL * 3,
      },
      XXXL: {
        width: config?.DIMENSION?.XXXL * 15,
        height: config?.DIMENSION?.XXXL * 3,
      },
    },
  });
};
///////////////////////////  Module Export END ////////////////////////
