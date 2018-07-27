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
      var elm = wb.init( event, componentName, selector ),
          settings, $elm;

      if ( elm ) {
        $elm = $( elm );

        // Extend the settings with window[ "wb-format-gen" ] then data-wb-format-gen
        settings = $.extend(
          true,
          defaults,
          window[ componentName ],
          wb.getData( $elm, componentName )
        );

        // Apply the extended settings to the element(s)
        $elm.data( componentName, settings );
      }
    },

    /**
     * @method htmlToCSV
     * @param rowSelector {String} CSS selector for the rows (e.g., "tr:not(.hidden)")
     * @param colSelector {String} CSS selector for the cells within the row (e.g., "td:not(.hidden)")
     * @param container {String} (Optional, defaults to document) CSS selector for the container to look in (e.g., "#table-id")
     * @return {String} CSV output
     */
    htmlToCSV = function( rowSelector, colSelector, container ) {
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
     * @method outputFile
     * @param fileData {String} String containing the data for the file
     * @param mimeType {String} MIME type of the output file (e.g., "text/csv;charset=utf-8;")
     * @param filename {String} Filename for the file to output (excluding file extension)
     * @param type {String} Type of file (used for the file extension for the msSaveBlob fallback)
     * @return {String} CSV output
     */
    outputFile = function( fileData, mimeType, filename, type ) {
      var outputLink = document.createElement( "a" ),
          isDownloadAttrSupported = outputLink.download !== undefined,
          blobOutput, urlOutput;

      try {
        blobOutput = new Blob( [ fileData ], { type: mimeType } );

        // Backwards compatibility for IE10+
        if ( !isDownloadAttrSupported && navigator.msSaveBlob ) {
            navigator.msSaveBlob( blobOutput, filename + "." + type );
            return;
        }

        urlOutput = URL.createObjectURL( blobOutput );
      } catch ( e ) {
        // Fallback for where Blob URL support doesn't exist
        urlOutput = encodeURI( "data:" + mimeType.slice( 0, -1 ) + "," + fileData );
      }

      outputLink.setAttribute( "href", urlOutput );
      if ( isDownloadAttrSupported ) {
        outputLink.setAttribute( "download", filename );
      }
      outputLink.style.visibility = "hidden";
      document.body.appendChild( outputLink );
      outputLink.click();
      document.body.removeChild( outputLink );
    };


$document.on( "click", selector, function( event ) {
  var settings = wb.getData( $( event.target ), componentName ),
      type = settings[ "type" ].toLowerCase(),
      filename = settings[ "filename" ],
      fileData, mimeType;

  if ( type === "csv" ) {
    fileData = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ] );
    mimeType = "text/csv;charset=utf-8;"
  } else {
    return;
  }

  outputFile( fileData, mimeType, filename, type );
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
