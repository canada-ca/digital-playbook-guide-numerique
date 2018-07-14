/**
 * @title Calculate
 * @overview Calculates values through basic math operations and conditionally performs specified actions
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @pjackson28
 */
( function( $, window, document, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-calculate",
    selector = "." + componentName,
    initEvent = "wb-init" + selector,
    $document = wb.doc,

    /**
     * @method init
     * @param {jQuery Event} event Event that triggered the function call
     * @param {string} string Optional selector for the checked filter checkboxes (if triggered manually)
     */
    init = function( event, contentfilter ) {

      // Start initialization
      // returns DOM object = proceed with init
      // returns undefined = do not proceed with init (e.g., already initialized)
      var elm = wb.init( event, componentName, selector );

      if ( elm ) {

        var $elm = $( elm ),
            settings = {
              ignoreInit: false
            }, $eventElement;

        // Extend the settings with window[ "wb-calculate" ] then data-wb-calculate
        settings = $.extend(
          true,
          settings,
          window[ componentName ],
          wb.getData( $elm, componentName )
        );

        $document.on( settings[ "eventTrigger" ], settings[ "eventElement" ], function( event) {
          iterate( settings[ "operations" ], $eventElement );
        } );

        if ( !settings[ "ignoreInit" ] ) {
          iterate( settings[ "operations" ], $eventElement );
        }
      }
    },
    /**
     * @method iterate
     * @param operations {Array} Operation objects to iterate through, process and output
     */
    iterate = function( operations ) {

      var operationsLength = operations.length,
          operationsIndex, operation;
      for ( operationsIndex = 0; operationsIndex < operationsLength; operationsIndex += 1 ) {
        operation = operations[ operationsIndex ];
        $( operation[ "outputTarget" ] ).eq( 0 ).html( calculate( operation ) );
      } 
    },

    /**
     * @method calculate
     * @param operation {Object or Number} Operation object or number to process
     * @return {Number} Calculated value
     * Operation object has the following constraints:
     * type {String} Operation to perform. Following types are supported:
     * - number: Retrieve a number as is
     * - count: Retrieve a count of items
     * - percent: Calculate the percentage using two numbers (i.e., (a / b) * 100)
     * - add: Calculate the result of adding two or more numbers in sequence (e.g., a + b + c)
     * - subtract: Calculate the result of subtracting two or more numbers in sequence (e.g., a - b - c) 
     * - multiply: Calculate the result of multiplying two or more numbers in sequence (e.g., a * b * c)
     * - divide: Calculate the result of dividing two or more numbers in sequence (e.g., a / b / c)
     * - power: Calculate the result of the powers of two or more numbers in sequence (e.g., a ** b ** c)
     * - modulus: Calculate the result of the modulus of two or more numbers in sequence (e.g., a % b % c )
     * - conditional: Perform an action of "actionType" if all conditions in "inputs" are met. 
     * decimalPlaces {Integer} Optional (defaults to unlimited). Number of decimal plays to allow for the result.
     * value {Number} Optional (can be used instead of "query", only permitted for "number" type). The value of the number to use.
     * query {String} Optional (required for "count" type, "number" type when "value" is not specified and other types when "inputs" is not specified) The CSS query for where to retrieve the numbers (uses first result for "number") or for the items to count.
     * inputs {Array} Optional (used for "conditional" type, including condition objects, and can also be used for "add", "subtract", "multiply", "divide", "power" and "modulus" types in place of query). Array of operations that provide the values to use in the current operation, or in the case of "conditional", an array of conditions that need to be met.
     * increment {Integer} Optional (can only be used with "count" type). The size of the increment to use for each item counted.
     * actions {Array} Optional (required for "conditional" type). Actions to proceed with if all conditons are met (e.g., "event", "operations", "addClass", "removeClass", "conditional").
     * outputEvent {String} Optional (required for action type of "event" for "conditional" type). Event type 
     * outputEventParameter {Array/Plain object} Optional (only used for action type of "event" for "conditional" type).
     * operations {Array} Optional (required for action type of "operations" for "conditional" type). Operations to execute.
     * class {String} Optional (required for action type of "addClass" or "removeClass" for "conditional" type). Class to add or remove.  
     * outputTarget {String} Optional (required for operations that output the result and for action type of "event", "addClass" or "removeClass" for "conditional" type). CSS selector for where to output the result of the operation or for where to trigger the event.
     */
    calculate = function( operation ) {

      // Return right away if operation is a number (nothing to process)
      if ( typeof operation === "number" ) {
        return operation;
      }

      var type = operation[ "type" ],
          value = operation[ "value" ],
          query = operation[ "query" ],
          $query = value || !query ? null : $( query ),
          queryResultsSize = !$query ? null : $query.length, 
          decimalPlaces = operation[ "decimalPlaces" ],
          inputs, inputsLength, item, index, conditionMet;

      if ( type === "number" ) {
        if ( $query ) {
          value = $query.eq( 0 ).text();
          if ( value.indexOf( "." ) > -1 ) {
            value = parseFloat( value );
          } else {
            value = parseInt( value );
          }
        }
      } else if ( type === "count" ) {
        value = queryResultsSize;
        if ( operation[ "increment" ] ) {
          value = value * operation[ "increment" ];
        }
      } else {
        inputs = operation[ "inputs" ];

        if ( !inputs ) {
          inputs = [];
          for ( index = 0; index < queryResultsSize; index += 1 ) {
            item = $query.eq( index ).text();
            if ( item.indexOf( "." ) > -1 ) {
              inputs.push( parseFloat( item ) );
            } else {
              inputs.push( parseInt( item ) );
            }
          }
        }

        inputsLength = inputs.length;

        if ( inputsLength === 0 ) {
          return 0;
        }

        if ( type === "percent" ) {
          value = ( calculate( inputs[ 0 ] ) / calculate( inputs[ 1 ] ) ) * 100;
        } else if ( type === "add" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value += calculate( inputs[ index ] );
          }
        } else if ( type === "subtract" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value -= calculate( inputs[ index ] );
          }
        } else if ( type === "multiply" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = value * calculate( inputs[ index ] );
          }
        } else if ( type === "divide" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = value / calculate( inputs[ index ] );
          }
        } else if ( type === "power" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = value ** calculate( inputs[ index ] );
          }
        } else if ( type === "modulus" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = value % calculate( inputs[ index ] );
          }          
        } else if ( type === "conditional" ) {
          for ( index = 0; index < inputsLength; index += 1 ) {
            conditionMet = false;
            let condition = inputs[ index ],
                conditionType = condition[ "type" ],
                values = condition[ "inputs" ];

            if ( conditionType === "=" || conditionType === "==" ) {
              // Equal to
              conditionMet = calculate( values[ 0 ] ) == calculate( values[ 1 ] );
            } else if ( conditionType === ">" ) {
              // Greater than
              conditionMet = calculate( values[ 0 ] ) > calculate( values[ 1 ] );
            } else if ( conditionType === "<" ) {
              // Less than
              conditionMet = calculate( values[ 0 ] ) < calculate( values[ 1 ] );
            } else if ( conditionType === ">=" ) {
              // Greater than or equal to
              conditionMet = calculate( values[ 0 ] ) >= calculate( values[ 1 ] );
            } else if ( conditionType === "<=" ) {
              // Less than or equal to
              conditionMet = calculate( values[ 0 ] ) <= calculate( values[ 1 ] );
            } else if ( conditionType === "!=" ) {
              // Not equal to
              conditionMet = calculate( values[ 0 ] ) != calculate( values[ 1 ] );
            }

            if ( !conditionMet ) {
              break;
            }
          }

          if ( conditionMet ) {
            var actions = operation[ "actions" ],
                actionsLength = actions.length,
                action, actionType;

            for ( index = 0; index < actionsLength; index += 1 ) {
              action = actions[ index ];
              actionType = action[ "type" ];
              if ( actionType === "event" ) {
                $( action[ "outputTarget" ] ).trigger( action[ "outputEvent" ], action[ "outputEventParameters" ] );
              } else if ( actionType === "operations" ) {
                iterate( action[ "operations" ] );
              } else if ( actionType === "addClass" ) {
                $( action[ "outputTarget" ] ).addClass( action[ "class" ] );
              } else if ( actionType === "removeClass" ) {
                $( action[ "outputTarget" ] ).removeClass( action[ "class" ] );
              } else if ( actionType === "conditional" ) {
                calculate( action );
              }
            }
          }
        }
      }

      if ( !Number.isInteger( value ) && Number.isInteger( decimalPlaces ) && decimalPlaces >= 0 ) {
        if ( decimalPlaces > 0 ) {
          let modifier = 10 ** decimalPlaces;
          value = Math.round( value * modifier ) / modifier;
        } else {
          Math.round( value );
        }
      }

      return value;
    };

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
