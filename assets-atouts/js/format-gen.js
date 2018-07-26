/**
 * @title Format generator
 * @overview Generates a different format (e.g., CSV) using content on the page
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
var componentName = "wb-format-gen",
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
            }, $eventElement, type, linkSelector;

        // Extend the settings with window[ "wb-format-gen" ] then data-wb-format-gen
        settings = $.extend(
          true,
          settings,
          window[ componentName ],
          wb.getData( $elm, componentName )
        );

        type = settings[ "type" ];
        linkSelector = settings[ "linkSelector" ];

        if ( type === "csv" ) {
          $( linkSelector).attr( "href", encodeURI( toCSV( currentSettings[ "rowSelector" ], currentSettings[ "colSelector" ], currentSettings[ "container" ] ) ) );        }
      }
    },

    /**
     * @method toCSV
     * @param rowSelector {String} CSS selector for the rows (e.g., "tr:not(.hidden)")
     * @param colSelector {String} CSS selector for the cells within the row (e.g., "td:not(.hidden)")
     * @param container {String} (Optional, defaults to document) CSS selector for the container to look in (e.g., "#table-id")
     * @return {String} CSV output
     */
    toCSV = function( rowSelector, colSelector, container ) {
      var output = [],
          $source = container ? $( container ) : wb.doc,
          $rows = $source.find( rowSelector ),
          numRows = $rows.length,
          rowIndex, $cols, numCols, colIndex, colContent, rowOutput;

      for ( rowIndex = 0; rowIndex < numRows; rowIndex += 1 ) {
        rowOutput = [];
        $cols = $rows.eq( rowIndex ).find( colSelector );
        numCols = $cols.length;
        for ( colIndex = 0; colIndex < numCols; colIndex += 1 ) {
          colContent = $cols.eq( colIndex ).text().replace( /"/g, '""' );
          if ( colContent.index( "," ) != -1 ) {
            colContent = '"' + colContent + '"';
          }
          rowOutput.push( colContent );
        }
        output.push( rowOutput.join( "," ) );
      }

      return output.join( "\n" );
    };

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
