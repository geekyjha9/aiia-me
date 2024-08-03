"use strict";
/************************************************************************
Info:  Progress Indicator Component specific styles

@author - Ankit Singh
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (config) {
  // Create & Export StyleSheet
  return StyleSheet.create({
    size:{ /* We are using scale property to increase the size. Bydefault size of ActivityIndicator is small (Diameter 20 units), thats why we are scaling(Magnifying) in respect to 20 units  */
        small:{ // For small Size
            transform:[{scaleX: config.DIMENSION.SMALL*3/20}, {scaleY: config.DIMENSION.SMALL*3/20}]
        },
        regular:{ // For regular Size
            transform:[{scaleX: config.DIMENSION.REGULAR*3/20}, {scaleY: config.DIMENSION.REGULAR*3/20}]
        },
        large:{ // For large Size
            transform:[{scaleX: config.DIMENSION.LARGE*3/20}, {scaleY: config.DIMENSION.LARGE*3/20}]
        },
        xl:{ // For xl Size
            transform:[{scaleX: config.DIMENSION.XL*3/20}, {scaleY: config.DIMENSION.XL*3/20}]
        },
        xxl:{ // For xxl Size
            transform:[{scaleX: config.DIMENSION.XXL*3/20}, {scaleY: config.DIMENSION.XXL*3/20}]
        },
        xxxl:{ // For xxxl Size
            transform:[{scaleX: config.DIMENSION.XXXL*3/20}, {scaleY: config.DIMENSION.XXXL*3/20}]
        }
    }
  });
};
///////////////////////////  Module Export END ////////////////////////
