'use strict';
/********************************************************************
// Info: Component specific Styles

@author - None
@contributor - None
*********************************************************************/

// React native base component (Private Scope)
import { StyleSheet, Dimensions } from 'react-native';


//////////////////////////// Module Exports START /////////////////////////////
module.exports = function(config){

  // Create and Export Style-Sheet
  return StyleSheet.create({
    container : {
      height: Dimensions.get('window').height,
    },

    drawer : {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      backgroundColor: '#fff',
      borderRightWidth: 1,
      borderRightColor: '#ccc',
      zIndex: 1,
      padding: 10
    },

    icon : {
      flexDirection:'row',
      justifyContent:'flex-end',
      // alignItems:'flex-end',
      width:25,
      height:25
    }
  });

};//////////////////////////// Module Exports END //////////////////////////////
