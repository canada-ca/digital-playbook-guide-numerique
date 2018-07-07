/**
 * @title Calculate
 * @overview Calculates values through basic math operations
 * @license open.canada.ca/en/open-government-licence-canada / http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada
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
            };

        // Extend the settings with window[ "wb-calculate" ] then data-wb-calculate
        settings = $.extend(
          true,
          settings,
          window[ componentName ],
          wb.getData( $elm, componentName )
        );

        $document.on( settings[ "eventTrigger" ], function( event) {
          iterate( settings[ "operations" ] );
        } );

        if ( !settings[ "ignoreInit" ] ) {
          iterate( settings[ "operations" ] );
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
     * @param operation {Object} Operation object to process
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
     * decimalPlaces {Integer} Optional (defaults to unlimited). Number of decimal plays to allow for the result.
     * value {Number} Optional (can be used instead of "query", only permitted for "number" type). The value of the number to use.
     * query {String} Optional (required for "count" type and "number" type when "value" is not specified) The CSS query for where to retrieve the number (uses first result) or for the items to count.
     * items {Array} Optional (required for "add", "subtract", "multiply", "divide", "power" and "modulus" types). Array of operations that provide the values to use in the current operation.
     * increment {Integer} Optional (can only be used with "count" type). The size of the increment to use for each item counted.
     */
    calculate = function( operation ) {

      var type = operation[ "type" ],
          value = operation[ "value" ],
          query = operation[ "query" ],
          $query = value || !query ? null : $( query ),
          inputs = operation[ "inputs" ],
          inputsLength = inputs ? inputs.length : null,
          decimalPlaces = operation[ "decimalPlaces" ],
          index;

      if ( type === "number" ) {
        if ( $query ) {
          value = $query.text();
          if ( value.indexOf( "." ) > -1 ) {
            value = parseFloat( value );
          } else {
            value = parseInt( value );
          }
        }
      } else if ( type === "count" ) {
        value = $query.length;
        if ( operation[ "increment" ] ) {
          value = value * operation[ "increment" ];
        }
      } else if ( type === "percent" ) {
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
