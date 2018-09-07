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
     * @overview Generates CSV data from specific content in the current page
     * @param rowSelector {String} CSS selector for the rows (e.g., "tr:not(.hidden)")
     * @param colSelector {String} CSS selector for the cells within the row (e.g., "td:not(.hidden)")
     * @param container {String} CSS selector for the container to look in (e.g., "#table-id")
     * @param outputAsString {Boolean} (Optional, defaults to false) Controls the returned value. false = return array, true = return string.
     * @return {String/Array} CSV output
     */
    htmlToCSV = function( rowSelector, colSelector, container, outputAsString ) {
      var output = [],
          source = document.querySelector( container ),
          rows = source.querySelectorAll( rowSelector ),
          numRows = rows.length,
          rowIndex, cols, numCols, colIndex, colContent, rowOutput;

      for ( rowIndex = 0; rowIndex < numRows; rowIndex += 1 ) {
        rowOutput = [];
        cols = rows[ rowIndex ].querySelectorAll( colSelector );
        numCols = cols.length;
        for ( colIndex = 0; colIndex < numCols; colIndex += 1 ) {
          colContent = cols[ colIndex ].textContent.replace( /"/g, '""' ).trim();
          if ( colContent.indexOf( "," ) != -1 ) {
            colContent = '"' + colContent + '"';
          }
          rowOutput.push( colContent );
        }
        output.push( outputAsString === true ? rowOutput.join( "," ) : rowOutput );
      }

      return outputAsString === true ? output.join( "\n" ) : output;
    },

    /**
     * @method htmlToJSON
     * @overview Generates JSON data from specific content in the current page
     * @param container {HTML node} Container of the data to output to JSON
     * @param structure {String} Defines the structure of the JSON to output. The following is an example: 
     * {
     *   "type": "array",
     *   "selector": "input",
     *   "items": {
     *     "type": "object",
     *     "properties": {
     *       "id": {
     *         "type": "string",
     *         "valueSource": "id"
     *       },
     *       "checked": {
     *         "type": "boolean",
     *         "valueSource": "checked"
     *       }
     *     }
     *   }
     * }
     * @param outputAsString {Boolean} (Optional, defaults to false) Controls the returned value. false = return object, true = return string.
     * @return {String/Object} JSON output
     */
    htmlToJSON = function( container, structure, outputAsString ) {
      var selector = structure.selector, 
          nodes, length, node, items, properties, property, index, itemType, subContainer, valueSource, key, value;

      if ( structure.type.toLowerCase() === "array" ) {
        nodes = container.querySelectorAll( selector );
        length = nodes.length;
        items = structure.items;
        itemType = items.type.toLowerCase();
        subContainer = [];

        if ( itemType === "array" || itemType === "object" ) {
          for ( index = 0; index < length; index += 1 ) {
            subContainer.push( htmlToJSON( nodes[ index ], items ) );
          }
        } else {
          // String, number or boolean
          valueSource = structure.valueSource;
          for ( index = 0; index < length; index += 1 ) {
            node = nodes[ index ];           

            if ( !valueSource ) {
              value = node.textContent.trim();
            } else if ( valueSource in node ) {
              value = node[ valueSource ];
            } else {
              value = node.getAttribute( valueSource );
            }
            subContainer.push( value );
          }
        }
      } else {
        if ( selector ) {
          container = container.querySelector( selector );
        }
        properties = structure.properties;
        subContainer = {};

        for ( key in properties ) {
          if ( properties.hasOwnProperty( key ) ) {
            property = properties[ key ];
            itemType = property.type.toLowerCase();

            if ( property.selector ) {
              node = container.querySelector( property.selector );
            } else {
              node = container;
            }

            if ( itemType === "array" || itemType === "object" ) {
              subContainer[ key ] = htmlToJSON( node, property );
            } else {
              // String, number or boolean
              valueSource = property.valueSource;

              if ( !valueSource ) {
                value = node.textContent;
              } else if ( valueSource === "attributes" ) {

                // Special handling for the attributes property.
                // It iterates through all the attributes and outputs them.
                nodes = node.attributes;
                length = nodes.length;

                for ( index = 0; index < length; index += 1 ) {
                  node = nodes[ index ];
                  subContainer[ node.name ] = value;
                }
              } else if ( valueSource in node ) {

                // Property is on the node so output the property
                value = node[ valueSource ];
              } else {

                // Output the attribute
                value = node.getAttribute( valueSource );
              }

              if ( valueSource !== "attributes" ) {
                if ( itemType === "number" ) {
                  // Convert a number string to an actual number
                  if ( value.indexOf( "." ) !== -1 ) {
                    value = parseFloat( value );
                  } else {
                    value = parseInt( value );
                  }
                } else if ( itemType === "boolean" && typeof value === "string" ) {
                  // Convert a boolean string to an actual boolean
                  value = value.toLowerCase() === "true";
                }
                subContainer[ key ] = value;
              }
            }
          }
        }
      }
      return outputAsString ? JSON.stringify( subContainer ) : subContainer;
    },

    /**
     * @method csvToArray
     * @overview Converts a CSV string to nested arrays
     * @param fileText {String} Text retrieved from the CSV file
     * @return {Array} CSV as nested arrays
     */
    csvToArray = function( fileText ) {
      var csvRows = fileText.split( "\n" ),
          length = csvRows.length,
          csvCells, outputArray, index;

      for ( index = 0; index < length; index += 1 ) {
        csvRows[ index ] = csvRows[ index ].split( "," );
      }

      return csvRows;
    },

    /**
     * @method dataToTableArray
     * @overview Converts data in an object or array to a table array
     * @param data {Object/Array} Object/array containing all of the data for the table.
     * @param tableColSpecs {Array} Specification objects for each column, where each object includes the following information:
     *    relativeToColumn {Integer} (defaults to -1) Index of column that this column is relative to. A 0 or higher index means it has 
     *      a 1 to many relationship with the specified column (and as a result each row as well) while -1 means it is relative to the row 
     *      (so has a 1 to 1 relationship with each row).
     *    dataContainerSource {Array} Source of the column data array within the passed data object/array in the form of a series of
     *      indexes/keys applied sequentially. If relativeToColumn is not -1, then the indexes/keys are relative to the data source of     
     *      the specified column, otherwise they are relative to the passed data object/array. 
     *    dataElementSource {Array} (optional, defaults to empty array) Source of the data within each column data array element if 
     *      the data is not the column data array element itself. Indexes/keys are relative to the column data array element.
     * @param repeatValues {Boolean} (defaults to false) Whether or not to repeat values in one to many relationships (i.e., repeat value on each row rather than having the value span multiple rows)
     * @return {Array} Table array which is an array of rows containing the following object for each of the columns:
     *    data {Primitive/Array} Data as a primitive (e.g., number, string, boolean) or as an array of primitives 
     *      or arrays (multiple-levels of nesting is supported)
     *    rowspan {Integer} Number of rows the column data spans (defaults to 1)
     */
    dataToTableArray = function( data, tableColSpecs, repeatValues ) {
      var tableArray = [],
          sourceArray = [],
          tableColSpecsLength = tableColSpecs.length,
          rowIndex, numOuterRows, numInnerRows, rowArray, tableColSpec, tableColSpecIndex, relativeToColumn,
          index, index2, length, length2, indexesKeys, indexKey, indexKeyIndex, indexesKeysLength, indexesKeysArray, dataNode,
          columnSourceArray, relativeToArray, columnDataArray, rowspan, result, resultTotalCount, resultElementCounts,
          elementArray, element, countArray, count, mostColsIndex;

      // Create an array of source arrays for generating the table array 
      // (only for relativeToColumn = -1 columns since other columns will need to be retrieved dynamically)
      for ( tableColSpecIndex = 0; tableColSpecIndex < tableColSpecsLength; tableColSpecIndex += 1 ) {
        tableColSpec = tableColSpecs[ tableColSpecIndex ];
        if ( tableColSpec.relativeToColumn === -1 ) {
          indexesKeys = tableColSpec.dataContainerSource;
          indexesKeysLength = indexesKeys.length;
          dataNode = data;

          // Find the column data array and push into the source Array
          for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
            dataNode = dataNode[ indexKey ];
          }
          sourceArray.push( dataNode );

          // Determine the number of top-level table rows (exluding sub-rows in 1 to many relationships) if not already determined
          // Needed to determine how many iterations through column data arrays are needed when generating the table
          if ( !numOuterRows ) {
            numOuterRows = dataNode.length;
          }
        } else {
          // Push empty array into sourceArray so elements of sourceArray line up with elements of tableColSpecs (same indexes)
          sourceArray.push( [] );
        }
      }

      // Generate the table array
      for ( rowIndex = 0; rowIndex < numOuterRows; rowIndex += 1 ) {
        rowArray = [];
        countArray = [];
        resultTotalCount = 1;
        mostColsIndex = 0;
        numInnerRows = 1;

        for ( tableColSpecIndex = 0; tableColSpecIndex < tableColSpecsLength; tableColSpecIndex += 1 ) {
          tableColSpec = tableColSpecs[ tableColSpecIndex ];
          relativeToColumn = tableColSpec.relativeToColumn;

          if ( relativeToColumn === -1 ) {
            // Get element to push into the row array
            dataNode = sourceArray[ tableColSpecIndex ][ rowIndex ];
console.log( "sourceArray dataNode: " + JSON.stringify( dataNode ) );
            indexesKeys = tableColSpec.dataElementSource;
console.log( "indexesKeys: " + JSON.stringify( indexesKeys ) );
            indexesKeysLength = indexesKeys.length;

            for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
              dataNode = dataNode[ indexesKeys[ indexKeyIndex ] ];
            }

            rowArray.push( dataNode );
          } else {
            // Need to find the column data array first since it is relative to another column
            relativeToArray = [];
            indexesKeysArray = [ tableColSpec.dataContainerSource, tableColSpec.dataElementSource ];
console.log( "relativeToColumn: " + relativeToColumn );

            while ( typeof relativeToColumn !== "undefined" && relativeToColumn !== -1 ) {
              relativeToArray.unshift( relativeToColumn )
console.log( "dataContainerSource: " + JSON.stringify( tableColSpecs[ relativeToColumn ].dataContainerSource ) );
              indexesKeysArray.unshift( tableColSpecs[ relativeToColumn ].dataContainerSource );
              relativeToColumn = tableColSpecs[ relativeToColumn ].relativeToColumn;
            }

console.log( "indexesKeysArray: " + JSON.stringify( indexesKeysArray ) );
            dataNode = findData( data, indexesKeysArray );
            result = getNestedArrayElementCounts( dataNode );
console.log( "getNestedArrayElementCounts result: " + JSON.stringify( result ) );
            rowArray.push( dataNode );
            countArray.push( result );

            // Determine which column has the most cells in the current row
            if ( result[ 0 ] > resultTotalCount ) {
              resultTotalCount = result [ 0 ];
              resultElementCounts = result[ 1 ];
              mostColsIndex = tableColSpecIndex;
            }
          }
        }
console.log( "rowArray: " + JSON.stringify( rowArray ) );
        // Set rowspans for each of the columns
        for ( tableColSpecIndex = 0; tableColSpecIndex < tableColSpecsLength; tableColSpecIndex += 1 ) {
          tableColSpec = tableColSpecs[ tableColSpecIndex ];
          relativeToColumn = tableColSpec.relativeToColumn;
          dataNode = rowArray[ tableColSpecIndex ];

          if ( resultTotalCount === 1 || relativeToColumn === -1 ) {
            rowArray[ tableColSpecIndex ] = { data: dataNode, rowspan: resultTotalCount };
          } else {
            // Determine the array depth on which to apply rowspans
            count = 0;
            while ( relativeToColumn !== -1 ) {
              relativeToColumn = tableColSpecs[ relativeToColumn ].relativeToColumn;
              count += 1;
            }

            if ( count === 1 ) {
              length = dataNode.length;

              for ( index = 0; index < length; index += 1 ) {
console.log( "resultElementCounts: " + JSON.stringify( resultElementCounts ) );
                dataNode[ index ] = { data: dataNode[ index ], rowspan: resultElementCounts[ count ][ index ] };
              }
            } else {
              // Retrieve the arrays that need rowspan applied
              elementArray = getElementsAtSpecificArrayDepth( dataNode, count - 1 );
              countArray = getElementsAtSpecificArrayDepth( resultElementCounts, count );
              length = elementArray.length;

              for ( index = 0; index < length; index += 1 ) {
                element = elementArray[ index ];
                length2 = element.length;

                for ( index2 = 0; index2 < length2; index2 += 1 ) {
                  element[ index2 ] = { data: element[ index2 ], rowspan: resultElementCounts[ count ][ index ] };
                }
              }
            }
          }
        }        

        tableArray.push( rowArray );
      }

      return tableArray;
    },

    /**
     * @method findData
     * @overview Retrieve data from an array or object using a series of keys/indexes
     * @param data {Object/Array} Object/array on which to apply a series of keys/indexes to retrieve specific data
     * @param indexesKeysArray {Array} Either an array of indexes/keys or nested arrays of indexes keys (could be multiple levels deep)
     * @return {Primitive/Array} Either a data primitive, an array of primitives or an array of array (could be multiple levels deep)
     */
    findData = function( data, indexesKeysArray ) {
      var typeofResults = typeof indexesKeysArray[ 0 ] === "object",
          currentIndexesKeys = typeofResults ? indexesKeysArray[ 0 ] : indexesKeysArray,
          indexesKeysLength = currentIndexesKeys.length,
          dataNode = data,
          indexKeyIndex, index, length, dataResults, result;
console.log( "findData: indexesKeysArray: " + JSON.stringify( indexesKeysArray ) );
console.log( "findData: indexesKeysArray[ 0 ]: " + JSON.stringify( indexesKeysArray[ 0 ] ) );
console.log( "findData: typeofResults: " + typeofResults + ", currentIndexesKeys: length: " + currentIndexesKeys.length + ", 1st element: " + currentIndexesKeys[ 0 ] + ", 2nd element: "  + currentIndexesKeys[ 1 ] );

      // Apply the keys/indexes to the current data node
      for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
console.log( "findData: dataNode indexKey: " + currentIndexesKeys[ indexKeyIndex ] );
        dataNode = dataNode[ currentIndexesKeys[ indexKeyIndex ] ];
console.log( "findData: dataNode result: " + ( typeof dataNode ) );
console.log( "findData: dataNode data: " + JSON.stringify( dataNode ) );
        if ( typeof dataNode === "undefined" ) {
          return [];
        }
      }
console.log( "indexesKeysArray.length: " + indexesKeysArray.length );
      // If there are more keys/indexes to process, then call this function recursively for each element in the dataNode array
      if ( indexesKeysArray.length > 1 ) {
        length = dataNode.length;
        dataResults = [];
     
        for ( index = 0; index < length; index += 1 ) {
console.log( "indexesKeysArray.slice( 1 ): " + JSON.stringify( indexesKeysArray.slice( 1 ) ) );
          result = findData( dataNode[ index ], indexesKeysArray.slice( 1 ) );
console.log( "findData result: " + JSON.stringify( result ) );
          dataResults.push( result );
        }

        return dataResults;
      }

      return dataNode;
    },

    /**
     * @method getNestedArrayElementCounts
     * @overview Determines the element count in nested arrays and the sum of element counts for the parent array
     * @param data {Array} Array for determining the node count (could have multiple nested arrays)
     * @param returnAsString {Boolean} (Defaults to false) Whether or not to return the data as a string
     * @return {Array/String} Array or comma/semi-colon separated string of node counts (for each parent node)
     */
    getNestedArrayElementCounts = function( data ) {
      var arrayLength = data.length,
          elementCountArray = [],
          totalElementCount = 0,
          result, resultTotalCount, resultElementCounts, descendantElementCountArray, index, length, dataNode;

      for ( index = 0; index < arrayLength; index += 1) {
        dataNode = data[ index ];
        if ( Array.isArray( dataNode ) && dataNode.length > 0 ) {
          result = getNestedArrayElementCounts( dataNode );

          if ( typeof result === "object" ) {
            // Array element is an array with descendant arrays so tally up the total number of elements and have an array of element counts
            resultTotalCount = result[ 0 ];
            resultElementCounts = result[ 1 ];
            totalElementCount += resultTotalCount;
            elementCountArray.push( resultTotalCount );

            if ( index === 0 ) {
              descendantElementCountArray = resultElementCounts;
            } else {
              // Concatenate the descendant element count arrays
              length = descendantElementCountArray.length;
              for ( index = 0; index < length; index += 1 ) {
                descendantElementCountArray[ index ].concat( resultElementCounts[ index ] );
              }
            }
          } else {
            // Array element is an array with no descendant arrays so just tally up the number of elements in that array
            totalElementCount += result;
            elementCountArray.push( result );
          }
        } else {
          // Array has no descendant arrays so just return the number of elements
          return data.length;
        }
      }

      if ( descendantElementCountArray ) {
        // Group the counts for each generation into separate array elements with the current generation as the first array element
        elementCountArray = [ elementCountArray ].concat( descendantElementCountArray );
      }

      return [ totalElementCount, elementCountArray ];
    },

    /**
     * @method getElementsAtSpecificArrayDepth
     * @overview Returns an array of all the elements at a specific depth within a multi-dimensional array
     * @param data {Array} Multi-dimensional array from which the elements will be retrievedArray
     * @param depth {Number} Number of levels deep to retrieve the elements (e.g., 2 = two levels deep (e.g., grandchildren of top-level array))
     * @return {Array} Array containing all the array elements at the specific depth
     */
    getElementsAtSpecificArrayDepth = function( data, depth ) {
      var elements, length, index, dataNode, result;

      if ( depth === 0 ) {
        return data;
      } else {
        elements = [];
        length = data.length;

        if ( depth === 1 ) {
          for ( index = 0; index < length; index += 1 ) {
            elements.push( data[ index ] );
          }
        } else {
          for ( index = 0; index < length; index += 1 ) {
            dataNode = data[ index ];
            if ( Array.isArray( dataNode ) ) {
              elements.concat( getElementsAtSpecificArrayDepth( dataNode, depth - 1 ) );
            }
          }
        }
      }

      return elements;
    },

    /**
     * @method outputFile
     * @overview Output data to a file and trigger the interface to download it
     * @param settings {Object} Settings object for the file to output
     */
    outputFile = function( settings ) {
      var outputLink = document.createElement( "a" ),
          isDownloadAttrSupported = outputLink.download !== undefined,
          type = settings[ "type" ],
          source = settings[ "source" ],
          filename = settings[ "filename" ],
          fileData, mimeType, blobOutput, urlOutput, action;

      if ( type === "csv" ) {
        fileData = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ], true );
        mimeType = "text/csv;charset=utf-8;";
      } else if ( type === "json" ) {
        if ( source === "form-state" ) {
          fileData = JSON.stringify( getFormFieldStatus( settings[ "container" ] ) );
        } else if ( source === "session-storage" || source === "local-storage" ) {
          fileData = retrieveData( settings[ "key" ], settings[ "indexesKeys" ] , source === "local-storage", true );
        } else {
          fileData = htmlToJSON( document.querySelector( settings[ "container" ] ), settings[ "structure" ], true );
        }
        mimeType = "application/json;charset=utf-8;";
      } else {
        return;
      }

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
    },

    /**
     * @method inputFile
     * @overview Read in content from a file (using input type="file") and return the contained data
     * @param settings {Object} Settings object for the file to output
     * @param elm {HTML node} Input type="file" element that is being used to input a file
     * @param returnAsString {Boolean} (Defaults to false) Whether or not to return the data as a string
     * @return {Array/Object/String} Returned data
     */
    inputFile = function( settings, elm, outputAsString ) {
      if ( typeof ( FileReader ) !== "undefined" ) {
        var fileReader = new FileReader();

        fileReader.onload = function ( event ) {
           var type = settings[ "type" ],
               fileText = event.target.result,
               fileData;

           if ( !outputAsString ) {
             if ( type === "csv" ) {
               fileData = csvToArray( fileText );
             } else if ( type === "json" ) {
               fileData = JSON.parse( fileText );
             } else {
               return fileText;
             }

             if ( settings[ "action" ] === "restore-form-state" ) {
               setFormFieldStatus( settings[ "container" ], fileData );
             }

             return fileData;
           } else {
             return fileText;
           }
        }

        fileReader.readAsText( elm.files[ 0 ] );
      } else {
        console.log( "Browser doesn't support the HTML5 FileReader API" );
      }
    },

    /**
     * @method outputStorage
     * @overview Perform actions on data in sessionStorage or localStorage (including storing and deleting)
     * @param Store or remove data in storage (e.g., append data, delete data)
     * @param settings {Object} Settings object for the data to store in or remove from storage
     */
    outputStorage = function( settings ) {
      var type = settings[ "type" ],
          source = settings[ "source" ],
          action = settings[ "action" ],
          key = settings[ "key" ],
          useLocalStorage = type === "local-storage",
          indexesKeys = settings[ "indexesKeys" ],
          data;

      // Ensure indexesKeys is an array
      if ( indexesKeys && typeof indexesKeys === "string" ) {
        indexesKeys = JSON.parse( indexesKeys );
      }

      // Retrieve the data to store
      if ( source === "html" ) {
        // HTML is the source of the data

        if ( settings[ "rowSelector" ] ) {
          // Store the data as CSV
          data = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ] );
        } else if ( settings[ "structure" ] ) {
          // Store the data as JSON
          data = htmlToJSON( document.querySelector( settings[ "container" ] ), settings[ "structure" ] );
        } else {
          // Store the data as text
          data = document.querySelector( settings[ "container" ] ).textContent;
        }
      } else if ( source === "form-state" ) {
        // Store the form state as JSON
        data = getFormFieldStatus( settings[ "container" ] );
      }

      // Store the data
      storeData( action, key, indexesKeys, useLocalStorage = false, data );
    },

    /**
     * @method inputStorage
     * @overview Perform actions using data in sessionStorage or localStorage
     * @param Use data in storage (e.g., data to restore the state of a form or table)
     * @param settings {Object} Settings object for what to do with data in storage
     */
    inputStorage = function( settings ) {
      var type = settings[ "type" ],
          action = settings[ "action" ],
          key = settings[ "key" ],
          useLocalStorage = type === "local-storage",
          indexesKeys = settings[ "indexesKeys" ],
          storedData;

      // Ensure indexesKeys is an array
      if ( indexesKeys && typeof indexesKeys === "string" ) {
        indexesKeys = JSON.parse( indexesKeys );
      }

      storedData = retrieveData( key, indexesKeys, useLocalStorage );

      if ( action === "restore-form-state" ) {
        // Restore the form state from the stored data
        setFormFieldStatus( settings[ "container" ], storedData );
      } else if ( action === "restore-table" ) {
        // Restore table data rows (normally with tbody as the container) using the stored data (in CSV format)
        setTableRows( settings[ "container" ], storedData );
      } else if ( action === "test-table" )  {
        console.log( JSON.stringify( dataToTableArray( storedData, settings[ "tableColSpecs" ], true ) ) );
      }
    },

    /**
     * @method storeData
     * @overview Stores data in sessionStorage or localStorage using a key and optionally in nested arrays/objects
     * @param action {String} Action to take on the stored data (options: replace, append, prepend, delete)
     * @param key {String} Key for storing the data
     * @param indexesKeys {Array} (defaults to empty array) Indexes and/or keys used to store data in nested arrays/objects in the data
     * @param useLocalStorage {Boolean} (defaults to false) Whether or not to store the data in localStorage
     * @param data {String/Array/Object/Other} (not used for "delete" action) Data to store
     */
    storeData = function( action = "replace", key, indexesKeys = [], useLocalStorage = false, data ) {
      var indexesKeysLength = indexesKeys.length,
          data, storedData, storedDataFragment, parentStoredDataFragment, index, typeofResult, indexKey, nextIndexKey;

      // Retrieve and parse any stored data
      storedData = useLocalStorage ? localStorage.getItem( key ) : sessionStorage.getItem( key );
      if ( storedData && storedData.length > 0 ) {
        storedData = JSON.parse( storedData );
        storedDataFragment = storedData;

        if ( indexesKeysLength > 0 ) {
          // Find the nested data to manipulate or delete
          for ( index = 0; index < indexesKeysLength; index += 1 ) {
            indexKey = indexesKeys[ index ];

            if ( index === indexesKeysLength - 1 && action === "delete" ) {
              // Delete only specified data
              if ( Array.isArray( storedDataFragment ) ) {
                storedDataFragment.splice( indexKey, 1 );
              } else {
                delete storedDataFragment[ indexKey ];
              }
            } else {
              // Retrieve the nested data or create it if it doesn't already exist and is needed
              parentStoredDataFragment = storedDataFragment;
              storedDataFragment = storedDataFragment[ indexKey ];

              if ( !storedDataFragment ) {
                nextIndexKey = indexesKeys[ index + 1 ];

                if ( nextIndexKey ) {
                  storedDataFragment = typeof nextIndexKey === "string" ? {} : [];
                } else if ( action === "append" || action === "prepend" ) {
                  storedDataFragment = [];
                } else {
                  break;
                }
                parentStoredDataFragment[ indexKey ] = storedDataFragment;
              }
            }
          }
        } else if ( action === "delete" ) {
          // Not working with nested data so delete all the stored data referenced by the key
          if ( useLocalStorage ) {
            localStorage.removeItem( key );
          } else {
            sessionStorage.removeItem( key );
          }
          return;
        }

        if ( action !== "delete" ) {
          if ( Array.isArray( storedDataFragment ) ) {
            if ( action === "append" ) {
              storedDataFragment.push( data );
            } else if ( action === "prepend" ) {
              storedDataFragment.unshift( data );
            } else {
              parentStoredDataFragment[ indexesKeys[ index - 1 ] ] = data;
            }
            data = storedData;
          } else {
            // Make sure everything is a string
            if ( action !== "replace" && typeof storedDataFragment !== "string" ) {
              storedDataFragment = storedDataFragment.toString();
            }
            if ( typeof data !== "string" ) {
              data = data.toString();
            }

            if ( action === "append" ) {
              data = storedDataFragment + data;
            } else if ( action === "prepend" ) {
              // Update the parent with the prepended data
              data += storedDataFragment;
            }

            // If parent exists, update it with the new data
            if ( parentStoredDataFragment ) {
              parentStoredDataFragment[ indexesKeys[ index - 1 ] ] = data;
              data = storedData;
            }
          }
        }
      } else if ( action === "delete" ) {
        // Delete all the stored data referenced by the key
        if ( useLocalStorage ) {
          localStorage.removeItem( key );
        } else {
          sessionStorage.removeItem( key );
        }
        return;
      } else if ( action === "append" || action === "prepend" ) {
        data = [ data ];
      }

      if ( typeof data !== "string" ) {
        data = JSON.stringify( data );
      }

      if ( useLocalStorage ) {
        localStorage.setItem( key, data );
      } else {
        sessionStorage.setItem( key, data );
      }
    },

    /**
     * @method retrieveData
     * @overview Retrieves data from sessionStorage or localStorage using a key and optionally from nested arrays/objects
     * @param key {String} Key for retrieving the data
     * @param indexesKeys {Array} (defaults to empty array) Indexes and/or keys used to retrieve data from nested arrays/objects in the data
     * @param useLocalStorage {Boolean} (defaults to false) Whether or not to retrieve the data from localStorage
     * @param returnAsString {Boolean} (Defaults to false) Whether or not to return the data as a string
     * @return {String} Returns the stored data.
     */
    retrieveData = function( key, indexesKeys = [], useLocalStorage = false, returnAsString ) {
      var data = useLocalStorage ? localStorage.getItem( key ) : sessionStorage.getItem( key ),
          indexesKeysLength = indexesKeys.length,
          index;

      if ( data && data.length > 0 ) {
        data = JSON.parse( data );

        for ( index = 0; index < indexesKeysLength; index += 1 ) {
          data = data[ indexesKeys[ index ] ];
        }
      }

      if ( returnAsString ) {
        data = JSON.stringify( data );
      }

      return data;
    },

    /**
     * @method getFormFieldStatus
     * @overview Get the current status of all the form fields in the specified form (normally for storage or output)
     * @param formsSelector {String} Selector for the form(s) for which to retrieve the statuses of the contained fields.
     * @return {Array} Returns an array of objects with each containing a selector for a form field ("selector") and the current status ("status").
     */
    getFormFieldStatus = function( formsSelector ) {
      var forms = document.querySelectorAll( formsSelector ),
          numForms = forms.length,
          fieldObjects = [],
          form, formIndex, fields, numFields, index, field, nodeName, type, radioButtons, name, hasChecked;

      for ( formIndex = 0; formIndex < numForms; formIndex += 1 ) {
        form = forms[ formIndex ];
        fields = form.querySelectorAll( "input, select, textarea" );
        numFields = fields.length;

        for ( index = 0; index < numFields; index += 1 ) {
          field = fields[ index ];
          nodeName = field.nodeName.toLowerCase();
          if ( nodeName === "input" ) {
            type = field.type.toLowerCase();
            if ( type === "radio" ) {
              name = field.name;
              hasChecked = false;

              while ( index < numFields ) {
                if (field.type === "radio" && field.name === name ) {
                  if ( field.checked === true ) {
                    fieldObjects.push( { selector: "#" + field.id, state: true } );
                    hasChecked = true;
                  }
                  index += 1;
                  field = fields[ index ];
                } else {
                  index -= 1;
                  break;
                }
              }

              if ( !hasChecked ) {
                fieldObjects.push( { selector: "input[name=" + name + "]", state: false } );
              }
            } else if ( type === "checkbox" ) {
              fieldObjects.push( { selector: "#" + field.id, state: field.checked } );
            } else if ( type !== "button" && type !== "reset" && type !== "submit" && type !== "image" ) {
              fieldObjects.push( { selector: "#" + field.id, state: field.value } );
            } 
          } else if ( nodeName === "select" ) {
            if ( field.selectedIndex !== -1 ) {
              fieldObjects.push( { selector: "#" + field.id + " option:nth-child(" + ( field.selectedIndex + 1 ) + ")", state: true } );
            } else {
              fieldObjects.push( { selector: "#" + field.id + " option", state: false } );
            }
          } else if ( nodeName === "textarea" ) {
            fieldObjects.push( { selector: "#" + field.id, state: field.value } );
          }
        }
      }

      return fieldObjects;
    },

    /**
     * @method setFormFieldStatus
     * @overview Update the status of the fields in the specified form using the passed data
     * @param formsSelector {String} Selector for the form(s) for which to set the statuses of the contained fields.
     * @param fields {Array} Array of objects with each containing a selector for a form field ("selector") and that status to set ("status").
     */
    setFormFieldStatus = function( formsSelector, fields ) {
      var forms = document.querySelectorAll( formsSelector ),
          numForms = forms.length,
          numFields = fields.length,
          form, formIndex, index, fieldObject, index2, subFields, numSubFields, subField, nodeName, type, event;

      for ( formIndex = 0; formIndex < numForms; formIndex += 1 ) {
        form = forms[ formIndex ];
        for ( index = 0; index < numFields; index += 1 ) {
          fieldObject = fields[ index ];
          subFields = form.querySelectorAll( fieldObject.selector );
          numSubFields = subFields.length;
          for ( index2 = 0; index2 < numSubFields; index2 += 1 ) {
            subField = subFields[ index2 ];
            nodeName = subField.nodeName.toLowerCase();
            if ( nodeName === "input" ) {
              type = subField.type.toLowerCase();
              if ( type === "radio" ) {
                if ( subField.checked !== fieldObject.state ) {
                  if ( subField.checked === true ) {
                    // Set the checked to false and trigger the change event
                    subField.checked = false;
                    if ( "createEvent" in document ) {
                      event = document.createEvent( "HTMLEvents" );
                      event.initEvent( "change", false, true );
                      subField.dispatchEvent( event );
                    } else {
                      subField.fireEvent( "onchange" );
                    }
                  } else {
                    // Trigger a click event
                    subField.click();
                  }
                }
              } else if ( type === "checkbox" ) {
                if ( subField.checked !== fieldObject.state ) {
                  subField.click();
                }
              } else if ( type !== "file" && type !== "button" && type !== "reset" && type !== "submit" && type !== "image" ) {
                subField.value = fieldObject.state;
              } 
            } else if ( nodeName === "option" ) {
              if ( subField.selected !== fieldObject.state ) {
                subField.selected = fieldObject.state;
                if ( "createEvent" in document ) {
                  event = document.createEvent( "HTMLEvents" );
                  event.initEvent( "change", false, true );
                  subField.parentNode.dispatchEvent( event );
                } else {
                  subField.parentNode.fireEvent( "onchange" );
                }
              }
            } else if ( nodeName === "textarea" ) {
              subField.value = fieldObject.state;
            }
          }
        }
      }
    },

    /**
     * @method clearFormFieldStatus
     * @overview Clears all the form fields in the form
     * @param formSelector {String} Selector for the form for which to retrieve the statuses of the contained fields.
     */
    clearFormFieldStatus = function( formSelector ) {
      var formElm = document.querySelector( formSelector ),
          fields = formElm.querySelectorAll( "input, option, textarea" ),
          numFields = fields.length,
          fieldObjects = [],
          index, field, nodeName, type, radioButtons, name, hasChecked;

      for ( index = 0; index < numFields; index += 1 ) {
        field = fields[ index ];
        nodeName = field.nodeName.toLowerCase();
        if ( nodeName === "input" ) {
          type = subField.type.toLowerCase();
          if ( type === "radio" || type === "checkbox" ) {
            field.checked = false;
          } else {
            field.value = "";
          }
        } else if ( type === "option" ) {
          option.selected = false;
        } else {
          field.value = "";
        }
      }
    },

    /**
     * @method setTableRows
     * @overview Replaces the rows in the container with rows created using the passed data (in CSV format)
     * @param container {String} Selector for the container in which to replace all nodes with table rows.
     * @param data {String / Array} Data in CSV format to create the table rows with
     * @param ignoreFirstDataRow {Boolean} (defaults to false) Whether or not to ignore the first row in the CSV data (e.g., ignore the header row)
     */
    setTableRows = function( container, data, ignoreFirstDataRow ) {
      var tableRows = "",
          rowIndex, numRows, columns, columnIndex, numColumns;

      // Ensure the CSV data is converted to array format to make it easier to create table rows
      if ( typeof data === "string" ) {
        data = csvToArray( data );
      }

      // Generate the table rows string
      numRows = data.length;
      for ( rowIndex = 0; rowIndex < numRows; rowIndex += 1 ) {
        cols = data[ rowIndex ];
        numCols = cols.length;
        tableRows += "<tr>";

        for ( colIndex = 0; colIndex < numCols; colIndex += 1 ) {
          tableRows += "<td>" + cols[ colIndex ] + "</td>";
        }

        tableRows += "</tr>";
      }

      // Replace the contents of the container with the new table rows
      document.querySelector( container ).innerHTML = tableRows;
    };

$document.on( "click", selector, function( event ) {
  var target = event.target,
      settings = wb.getData( $( target ), componentName ),
      type = settings[ "type" ],
      source = settings[ "source" ],
      action, data, storedData, key, useLocalStorage;

  if ( target.type !== "file" ) {
    if ( type === "session-storage" || type === "local-storage" ) {
      outputStorage( settings );
    } else if ( source === "session-storage" || source === "local-storage" ) {
      if ( type === "csv" || type === "json" ) {
        outputFile( settings );
      } else {
        inputStorage( settings );
      }
    } else {
      outputFile( settings );
    }
  }
} );

$document.on( "change", selector, function( event ) {
  var target = event.target,
      settings = wb.getData( $( target ), componentName );

  if ( target.type === "file" ) {
    inputFile( settings, target );
  }
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
