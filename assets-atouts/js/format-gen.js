/**
 * @title Format download generator
 * @overview Generates a download in a different format (e.g., CSV) using content on the page
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
    defaults = {
      filename: "data"
    },

    /**
     * @method init
     * @param {jQuery Event} event Event that triggered the function call
     * @param {string} string Optional selector for the checked filter checkboxes (if triggered manually)
     */
    init = function( event, contentfilter ) {

      // Start initialization
      // returns DOM object = proceed with init
      // returns undefined = do not proceed with init (e.g., already initialized)
      wb.init( event, componentName, selector );
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
          if ( colContent.indexOf( "," ) != -1 ) {
            colContent = '"' + colContent + '"';
          }
          rowOutput.push( colContent );
        }
        output.push( rowOutput.join( "," ) );
      }

      return output.join( "\n" );
    },

    /**
     * @method toJSON (to build)
     * @param ?
     * @return {String} JSON output
     */
    toJSON = function() {
      return;
    },

    /**
     * @method toXML (to build)
     * @param ?
     * @return {String} XML output
     */
    toXML = function() {
      return;
    },

    /**
     * @method outputFile
     * @param fileData {String} String containing the data for the file
     * @param mimeType {String} MIME type of the output file (e.g., "text/csv;charset=utf-8;")
     * @param filename {String} Filename for the file to output (excluding file extension)
     * @return {String} CSV output
     */
    outputFile = function( fileData, mimeType, filename ) {
      var blobOutput, urlOutput, outputLink;
      try {
        blobOutput = new Blob( [ fileData ], { type: mimeType } );

        try {
          urlOutput = URL.createObjectURL( blobOutput );
        } catch ( e ) {
          if (navigator.msSaveBlob) {
            // Backwards compatibility for IE10
            navigator.msSaveBlob( blobOutput, filename );
            return;
          }
          // Trigger the fallback approach
          throw "Use fallback";
        }
      } catch ( e ) {
        // Fallback for where Blob support doesn't exist
        urlOutput = encodeURI( "data:" + mimeType.slice( 0, -1 ) + "," + fileData );
      }

      outputLink = document.createElement( "a" );
      if ( outputLink.download !== undefined ) {
        outputLink.setAttribute( "href", urlOutput );
        outputLink.setAttribute( "download", filename );
        outputLink.style.visibility = "hidden";
        document.body.appendChild( outputLink );
        outputLink.click();
        document.body.removeChild( outputLink );
      } else {
        // Last resort fallback
        window.open( urlOutput );
      }
    };


$document.on( "click", selector, function( event ) {
  // Extend the settings with window[ "wb-format-gen" ] then data-wb-format-gen
  var settings = $.extend(
    true,
    defaults,
    window[ componentName ],
    wb.getData( $( event.target ), componentName )
  ),
  type = settings[ "type" ].toLowerCase(),
  filename = settings[ "filename" ],
  fileData, mimeType;

  if ( type === "csv" ) {
    fileData = toCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ] );
    mimeType = "text/csv;charset=utf-8;"
  } else if ( type === "json" ) {
    fileData = toJSON(); // To build
    mimeType = "application/json;charset=utf-8;"
  } else if ( type === "xml" ) {
    fileData = toXML(); // To build
    mimeType = "application/xml;charset=utf-8;"
  }

  outputFile( fileData, mimeType, filename );
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
