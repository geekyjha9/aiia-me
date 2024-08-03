"use strict";
/************************************************************************
Info: Separator Component specific styles

@author - Swati Priya
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet, Platform } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (config) {
  // Create & Export StyleSheet
  return StyleSheet.create({
    container:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 6,
        },
        android: {
          elevation: 4,
        },
        web: {
          boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.08)',
        },
      }),

    },

    borderRadius: {
      PRIMARY: {
        borderRadius: config?.DIMENSION?.BORDER_RADIUS_PRIMARY,
      },
      SECONDARY: {
        borderRadius: config?.DIMENSION?.BORDER_RADIUS_SECONDARY,
      }
    },
  });
};
///////////////////////////  Module Export END ////////////////////////
