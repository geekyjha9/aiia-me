"use strict";
/************************************************************************
Info: primaryButton Component specific styles

@author - Ankit Singh
@contributor - None
************************************************************************/

// React Native Component (Private Scope)
import { StyleSheet } from "react-native";

//////////////////////////// Module Export START ///////////////////////
module.exports = function (CONFIG) {

  // Create & Export StyleSheet
  return StyleSheet.create({

    TYPE : {

      PRIMARY : {

        VARIANT : {

          TEXT : {

            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.BASE,
              borderWidth : 0
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.HOVERED,
              borderWidth : 0
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
              borderWidth : 0
            },

            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
              borderWidth : 0
            }

          },

          OUTLINED : {

            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.BASE,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.BASE,
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.BACKGROUND_PRIMARY?.BASE,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.HOVERED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.HOVERED,
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.BACKGROUND_PRIMARY?.BASE,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
            },

            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
            }

          },

          CONTAINED : {

            BASE : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY?.BASE,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.BASE,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.BASE,
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY?.HOVERED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.HOVERED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.HOVERED,
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.PRESSED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.PRESSED,
            },

            DISABLED : {
              backgroundColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.DISABLED,
              borderColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
            }


          },

          DEPARTMENT : {

            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY?.BASE,
              borderWidth : 0
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.TEXT_PRIMARY_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY?.HOVERED,
              borderWidth : 0
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.TEXT_PRIMARY_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY?.PRESSED,
              borderWidth : 0
            },

            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY?.DISABLED,
              borderWidth : 0
            }

          },
          
        }

      },

      SUCCESS : {

        VARIANT : {
          TEXT : {

            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.BASE,
              borderWidth : 0
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.HOVERED,
              borderWidth : 0
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS_SUBTLE?.PRESSED,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
              borderWidth : 0
            },

            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
              borderWidth : 0
            }

          },

          OUTLINED : {

            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.BASE,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.BASE,
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.HOVERED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.HOVERED,
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
            },

            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_SUCCESS?.DISABLED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
            }

          },

          CONTAINED : {

            BASE : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS?.BASE,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.BASE,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.BASE,
            },

            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS?.HOVERED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.HOVERED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.HOVERED,
            },

            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.PRESSED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.PRESSED,
            },

            DISABLED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_SUCCESS?.DISABLED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.DISABLED,
              borderColor : CONFIG?.COLOR?.STATUS_SUCCESS?.DISABLED,
            }


          }
        }

      },

      DANGER : {

        VARIANT : {

          TEXT : {
    
            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.BASE,
              borderWidth : 0
            },
    
            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.HOVERED,
              borderWidth : 0
            },
    
            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER_SUBTLE?.PRESSED,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
              borderWidth : 0
            },
    
            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.APP_PRIMARY?.DISABLED,
              borderWidth : 0
            }
    
          },
    
          OUTLINED : {
    
            BASE : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.BASE,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.BASE,
            },
    
            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.HOVERED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.HOVERED,
            },
    
            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER_SUBTLE?.BASE,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
            },
    
            DISABLED : {
              backgroundColor : null,
              fontColor : CONFIG?.COLOR?.STATUS_DANGER?.DISABLED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
            }
    
          },
    
          CONTAINED : {
    
            BASE : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER?.BASE,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.BASE,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.BASE,
            },
    
            HOVERED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER?.HOVERED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.HOVERED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.HOVERED,
            },
    
            PRESSED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.PRESSED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.PRESSED,
            },
    
            DISABLED : {
              backgroundColor : CONFIG?.COLOR?.STATUS_DANGER?.DISABLED,
              fontColor : CONFIG?.COLOR?.TEXT_PRIMARY_CONTRAST?.DISABLED,
              borderColor : CONFIG?.COLOR?.STATUS_DANGER?.DISABLED,
            }
    
    
          }

        }
    
      }

    },
    
  });
};
///////////////////////////  Module Export END ////////////////////////
