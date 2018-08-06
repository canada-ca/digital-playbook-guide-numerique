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
              ignoreInit: false,
              returnFalse: false,
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

          if ( settings[ "returnFalse" ] === true ) {
            return false;
          }
        } );

        if ( !settings[ "ignoreInit" ] ) {
          iterate( settings[ "operations" ], $eventElement );
        }
      }
    },
    /**
     * @method iterate
     * @param operations {Array} Operation objects to iterate through, process and output
     * @return {Number} Result of the last operation
     */
    iterate = function( operations ) {

      var operationsLength = operations.length,
          operationsIndex, operation, outputTarget, $target, result;
      for ( operationsIndex = 0; operationsIndex < operationsLength; operationsIndex += 1 ) {
        operation = operations[ operationsIndex ];
        outputTarget = operation[ "outputTarget" ];
        result = calculate( operation );


        if ( outputTarget ) {
          $target = $( outputTarget );
          if ( operation[ "outputAttribute" ] ) {
            $target.attr( operation[ "outputAttribute" ], result ); 
          } else if ( operation[ "outputData" ] ) {
            $target.data( operation[ "outputData" ], result ); 
          } else {
            $target.text( result );
          }
        }
      }

      return result;
    },

    /**
     * @method calculate
     * @param operation {Object or Number} Operation object or number to process
     * @return {Number} Calculated value
     * Operation object has the following constraints:
     * type {String} Operation to perform. Following types are supported:
     * - number: Retrieve a number as is
     * - string: Retrieve a string as is
     * - count: Retrieve a count of items
     * - percent: Calculate the percentage using two numbers (i.e., (a / b) * 100)
     * - add: Calculate the result of adding two or more numbers in sequence (e.g., a + b + c)
     * - subtract: Calculate the result of subtracting two or more numbers in sequence (e.g., a - b - c) 
     * - multiply: Calculate the result of multiplying two or more numbers in sequence (e.g., a * b * c)
     * - divide: Calculate the result of dividing two or more numbers in sequence (e.g., a / b / c)
     * - pow: Calculate the result of the powers of two or more numbers in sequence (e.g., ab = Math.pow( a, b ), abc = Math.pow( ab, c ))
     * - sqrt: Calculate the result of the square root of two or more numbers in sequence (e.g., ab = Math.sqrt( a, b ), abc = Math.sqrt( ab, c ))
     * - modulus: Calculate the result of the modulus of two or more numbers in sequence (e.g., a % b % c )
     * - abs: Calculate the absolute value of a number (e.g., Math.abs( a ))
     * - round: Calculate the value of a number rounded to its nearest integer (e.g., Math.round( a ))
     * - ceil: Calculate the value of a number rounded up to its nearest integer (e.g., Math.ceil( a ))
     * - floor: Calculate the value of a number rounded down to its nearest integer (e.g., Math.floor( a ))
     * - min: Calculate the value of the lowest number in a set of numbers (e.g., Math.min( a, b, c, d ))
     * - max: Calculate the value of the highest number in a set of numbers (e.g., Math.max( a, b, c, d ))
     * - random: Generate a random number between 0 and 1 (e.g., Math.random)
     * - conditional: Perform an action of "actionType" if all conditions in "inputs" are met. 
     * decimalPlaces {Integer} Optional (defaults to unlimited). Number of decimal plays to allow for the result.
     * value {Number/String/Boolean} Optional (can be used instead of "query", only permitted for "number" and "string" types; can also be used for "outputValue" action). The value of the number to use for the calculation or the string to use for a non-mathematical operation. Alternatively can use a number or string directly (instead of an object of type "number" or "string"). For action type "outputValue", can use a number or a string.
     * query {String} Optional (required for "count" type, "number" type when "value" is not specified and other types when "inputs" is not specified) The CSS query for where to retrieve the numbers (uses first result for "number") or for the items to count.
     * inputs {Array} Optional (used for "conditional" type, including condition objects, and can also be used for other operations such as"add", "subtract", "multiply", "divide", "power" and "modulus" types in place of query). Array of operations that provide the values to use in the current operation, or in the case of "conditional", an array of conditions that need to be met.
     * sourceAttribute {String} (optional, can be used with the "number" type). Attribute from which to retrieve the number.
     * increment {Integer} Optional (can only be used with "count" type). The size of the increment to use for each item counted.
     * actionsTrue {Array} Optional (required for "conditional" type). Actions to proceed with if all conditons are met (e.g., "event", "operations", "addClass", "removeClass", "conditional").
     * actionsFalse {Array} Optional (can only be used for "conditional" type). Actions to process with if one of the conditions is not met (e.g., "event", "operations", "addClass", "removeClass", "outputValue", "conditional").
     * outputEvent {String} Optional (required for action type of "event" for "conditional" type). Event type 
     * outputEventParameter {Array/Plain object} Optional (only used for action type of "event" for "conditional" type).
     * operations {Array} Optional (required for action type of "operations" for "conditional" type). Operations to execute.
     * class {String} Optional (required for action type of "addClass" or "removeClass" for "conditional" type). Class to add or remove.  
     * outputTarget {String} Optional (required for operations that output the result and for the action type of "event", "addClass", "removeClass" and "outputValue" and for the "conditional" type). CSS selector for where to output the result of the operation or for where to trigger the event.
     * outputAttribute {String} Optional (can be used for operations that output the result and the outputValue action). Attribute on the outputTarget to update.
     * outputType {String} (required for outputValue action type) Only "append", "prepend" or "replace" as possible types.
     */
    calculate = function( operation ) {

      // Return right away if operation is a number or a string (nothing to process)
      if ( typeof operation === "number" || typeof operation === "string" || typeof operation === "boolean" ) {
        return operation;
      }

      var type = operation[ "type" ],
          value = operation[ "value" ],
          query = operation[ "query" ],
          $query = value || !query ? null : $( query ),
          queryResultsSize = !$query ? null : $query.length, 
          decimalPlaces = operation[ "decimalPlaces" ],
          inputs, inputsLength, values, item, index, conditionMet, actions, actionsLength, action, actionType,
          outputTargets, outputTarget, outputAttribute, outputType, currentValue, outputTargetIndex, outputTargetsLength;

      if ( type === "number" || type === "string" ) {
        if ( $query ) {
          if ( operation[ "sourceAttribute" ] ) {
            value = $query.attr( operation[ "sourceAttribute" ] );
          } else {
            value = $query.eq( 0 ).text();
          }

          if ( type === "number" ) {
            if ( value.indexOf( "." ) > -1 ) {
              value = parseFloat( value );
            } else {
              value = parseInt( value );
            }
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
        } else if ( type === "pow" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = Math.pow( value, calculate( inputs[ index ] ) );
          }
        } else if ( type === "sqrt" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = Math.sqrt( value, calculate( inputs[ index ] ) );
          }
        } else if ( type === "modulus" ) {
          value = calculate( inputs[ 0 ] );
          for ( index = 1; index < inputsLength; index += 1 ) {
            value = value % calculate( inputs[ index ] );
          }
        } else if ( type === "abs" ) {
          value = Math.abs( calculate( inputs[ 0 ] ) );
        } else if ( type === "round" ) {
          value = Math.round( calculate( inputs[ 0 ] ) );
        } else if ( type === "ceil" ) {
          value = Math.ceil( calculate( inputs[ 0 ] ) );
        } else if ( type === "floor" ) {
          value = Math.floor( calculate( inputs[ 0 ] ) );
        } else if ( type === "min" ) {
          values = [];
          for ( index = 0; index < inputsLength; index += 1 ) {
            values.push( calculate( inputs[ index ] ) );
          }
          value = Math.min.apply( Math, values );
        } else if ( type === "max" ) {
          values = [];
          for ( index = 0; index < inputsLength; index += 1 ) {
            values.push( calculate( inputs[ index ] ) );
          }
          value = Math.max.apply( Math, values );
        } else if ( type === "random" ) {
          value = Math.random();
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

          actions = conditionMet ? operation[ "actionsTrue" ] : operation[ "actionsFalse" ];
          actionsLength = actions ? actions.length : 0;

          for ( index = 0; index < actionsLength; index += 1 ) {
            action = actions[ index ];
            actionType = action[ "type" ];
            if ( actionType === "event" ) {
              $( action[ "outputTarget" ] ).trigger( action[ "outputEvent" ], action[ "outputEventParameters" ] );
            } else if ( actionType === "operations" ) {
              value = iterate( action[ "operations" ] );
            } else if ( actionType === "addClass" ) {
              $( action[ "outputTarget" ] ).addClass( action[ "class" ] );
            } else if ( actionType === "removeClass" ) {
              $( action[ "outputTarget" ] ).removeClass( action[ "class" ] );
            } else if ( actionType === "outputValue" ) {
              if ( action[ "operations" ] ) {
                value = iterate( action[ "operations" ] );
              } else {
                value = action[ "value" ];
              }

              if ( action[ "outputTarget"] ) {
                outputTargets = document.querySelectorAll( action[ "outputTarget" ] );
                outputTargetsLength = outputTargets.length;
                outputType = action[ "outputType" ];

                for ( outputTargetIndex = 0; outputTargetIndex < outputTargetsLength; outputTargetIndex += 1 ) {
                  outputTarget = outputTargets[ outputTargetIndex ];
                  outputAttribute = action[ "outputAttribute" ];

                  if ( outputAttribute ) {
                    currentValue = outputTarget.getAttribute( outputAttribute );
                  } else {
                    currentValue = outputTarget.textContent;
                  }

                  if ( currentValue ) {
                    if ( outputType === "append" ) {
                      value = currentValue + value;
                    } else if ( outputType === "prepend" ) {
                      value = value + currentValue;
                    }
                  }

                  if ( outputAttribute ) {
                    outputTarget.setAttribute( outputAttribute, value );
                  } else {
                    outputTarget[ outputTargetIndex ].textContent = value;
                  }
                }
              }
            } else if ( actionType === "conditional" ) {
              calculate( action );
            }
          }
        }
      }

      if ( Math.floor( value ) != value && Math.floor( decimalPlaces ) === decimalPlaces && decimalPlaces >= 0 ) {
        if ( decimalPlaces > 0 ) {
          let modifier = Math.pow( 10, decimalPlaces );
          value = Math.round( value * modifier ) / modifier;
        } else {
          value = Math.round( value );
        }
      }

      return value;
    };

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
