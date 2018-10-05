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
    dataAttribute = "data-" + componentName,
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
          isArray = false,
          settings, eventTrigger, $listenerElement, eventElement, dataAttributeValue, index, length;

      if ( elm ) {
        dataAttributeValue = elm.getAttribute( dataAttribute );

        if ( dataAttributeValue && dataAttributeValue.length > 0 ) {
          dataAttributeValue = JSON.parse( dataAttributeValue );
          isArray = Array.isArray( dataAttributeValue );

          if ( !isArray ) {
            dataAttributeValue = [ dataAttributeValue ];
          }
        } else {
          dataAttributeValue = [ {} ];
        }

        length = dataAttributeValue.length;
        for ( index = 0; index < length; index += 1 ) {
          // Extend the settings with window[ "wb-format-gen" ] then data-wb-format-gen
          settings = $.extend(
            true, {},
            defaults,
            window[ componentName ],
            dataAttributeValue[ index ]
          );

          dataAttributeValue[ index ] = settings;

          // Set up event handler if specified in settings
          eventTrigger = settings[ "eventTrigger" ];
          if ( eventTrigger ) {
            if ( settings[ "listenerElement" ] ) {
              $listenerElement = $( settings[ "listenerElement" ] );
            } else {
              $listenerElement = $document;
            }

            eventElement = settings[ "eventElement" ];
            if ( eventElement ) {
              $listenerElement.on( eventTrigger, eventElement, function( event ) {
                handleEvent( event );
              } );
            } else {
              $listenerElement.on( eventTrigger, function( event ) {
                handleEvent( event, settings );
              } );
            }
          }

          if ( settings[ "resetForm" ] ) {
            clearFormFieldStatus( settings[ "resetForm" ] );
          }

          if ( settings[ "onInit" ] === true ) {
            handleEvent( event, settings );
          }
        }

        // Apply the extended settings to the element
        elm.setAttribute( dataAttribute, JSON.stringify( isArray ? dataAttributeValue : dataAttributeValue[ 0 ] ) );
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
     *      either a sibling relationship (1 to 1) or a parent/child relationship (1 to many) with the specified columnwhile -1 means it 
     *      is relative to the row (so has a 1 to 1 relationship with each row).
     *    dataContainerSource {Array} Source of the column data array within the passed data object/array in the form of a series of
     *      indexes/keys applied sequentially. If relativeToColumn is not -1, then the indexes/keys are relative to the data source of     
     *      the specified column (an empty array means a sibling relationship), otherwise they are relative to the passed data object/array.
     *    dataElementSource {Array} (optional, defaults to empty array) Source of the data within each column data array element if 
     *      the data is not the column data array element itself. Indexes/keys are relative to the column data array element.
     * @param repeatValues {Boolean} (defaults to false) Whether or not to repeat values in one to many relationships (i.e., repeat value on each row rather than having the value span multiple rows)
     * @return {Object} Object containing the following properties:
     *    tableArray {Array} Table array which is an array of rows containing an array of columns with each column containing a primitive value (e.g., number, string, boolean), an array of primitive values, or nested arrays of primitive values. Nesting denotes 1 to many relationships between a parent and child cells (where rowspan would be used).
     *    tableCountArray {Array} Array with the same structure as tableArray except it has rowspans instead of values for each of the cells
     */
    dataToTableArray = function( data, tableColSpecs, repeatValues ) {
      var tableArray = [],
          tableCountArray = [],
          tableColSpecsLength = tableColSpecs.length,
          rowIndex, numOuterRows, numInnerRows, rowArray, tableColSpec, tableColSpecIndex, relativeToColumn,
          index, index2, length, length2, indexesKeys, indexKey, indexKeyIndex, indexesKeysLength, indexesKeysArray, dataNode,
          columnSourceArray, relativeToArray, columnDataArray, rowspan, elementCounts, elementArray, element, countArray, count;

      // Handle no data being passed
      if ( !data || data.length === 0 ) {
        return {};
      }

      // Determine the number of outer rows (i.e., number of rows in the first column after rowspans are applied)
      for ( tableColSpecIndex = 0; tableColSpecIndex < tableColSpecsLength; tableColSpecIndex += 1 ) {
        tableColSpec = tableColSpecs[ tableColSpecIndex ];
        if ( tableColSpec.relativeToColumn === -1 ) {
          indexesKeys = tableColSpec.dataContainerSource;
          indexesKeysLength = indexesKeys.length;
          dataNode = data;

          // Find the column data array
          for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
            dataNode = dataNode[ indexKey ];
          }

          numOuterRows = dataNode.length;
          break;
        }
      }

      // Generate the table array
      for ( rowIndex = 0; rowIndex < numOuterRows; rowIndex += 1 ) {
        rowArray = [];
        numInnerRows = 1;

        for ( tableColSpecIndex = 0; tableColSpecIndex < tableColSpecsLength; tableColSpecIndex += 1 ) {
          tableColSpec = tableColSpecs[ tableColSpecIndex ];
          relativeToColumn = tableColSpec.relativeToColumn;

          if ( relativeToColumn === -1 ) {
            // Get element to push into the row array
            indexesKeys = tableColSpec.dataContainerSource.concat( [ rowIndex ], tableColSpec.dataElementSource );
            indexesKeysLength = indexesKeys.length;
            dataNode = data;

            // Find the column data array and push into the source Array
            for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
              dataNode = dataNode[ indexesKeys[ indexKeyIndex ] ];
            }
          } else {
            // Need to find the column data array first since it is relative to another column
            relativeToArray = [];

            indexesKeysArray =  [];
            if ( tableColSpec.dataContainerSource.length > 0 ) {
              indexesKeysArray.push( tableColSpec.dataContainerSource );
            }
            if ( tableColSpec.dataElementSource.length > 0 ) {
              indexesKeysArray.push( tableColSpec.dataElementSource );
            }

            while ( typeof relativeToColumn !== "undefined" && relativeToColumn !== -1 ) {
              relativeToArray.unshift( relativeToColumn );
              columnDataArray = tableColSpecs[ relativeToColumn ].relativeToColumn === -1 ?
                tableColSpecs[ relativeToColumn ].dataContainerSource.concat( [ rowIndex ] ) : 
                tableColSpecs[ relativeToColumn ].dataContainerSource;

              if ( columnDataArray && columnDataArray.length > 0 ) {
                indexesKeysArray.unshift( columnDataArray );
              }

              relativeToColumn = tableColSpecs[ relativeToColumn ].relativeToColumn;
            }

            dataNode = findData( data, indexesKeysArray );
          }

          rowArray.push( dataNode );
        }

        // Determine rowspans for each column
        countArray = new Array( tableColSpecsLength );
        for ( tableColSpecIndex = tableColSpecsLength - 1; tableColSpecIndex > -1; tableColSpecIndex -= 1 ) {
          tableColSpec = tableColSpecs[ tableColSpecIndex ];
          relativeToColumn = tableColSpec.relativeToColumn;
          count = countArray[ tableColSpecIndex ];

          if ( !count && relativeToColumn !== -1 ) {
            if ( tableColSpec.dataContainerSource.length === 0 && countArray[ relativeToColumn ] ) {
              // Sibling relationship so will have the same rowspan
              countArray[ tableColSpecIndex ] = countArray[ relativeToColumn ];
            } else {
              // Parent/child relationship
              dataNode = rowArray[ tableColSpecIndex ];
              countArray[ tableColSpecIndex ] = getNestedArrayElementCounts( dataNode ).subElementCount;

              // Determine the array depth on which to apply rowspans
              relativeToArray = [];
              while ( relativeToColumn !== -1 ) {
                relativeToArray.push( relativeToColumn );
                relativeToColumn = tableColSpecs[ relativeToColumn ].relativeToColumn;
              }

              for ( index = 0, length = relativeToArray.length; index < length; index += 1 ) {
                relativeToColumn = relativeToArray[ index ];

                countArray[ relativeToColumn ] = getNestedArrayElementCounts( dataNode, length - index - 1 ).subElementCount;
              }
            }
          } else if ( !count ) {
            countArray[ tableColSpecIndex ] = 1;
          }
        }

        // Flatten column arrays
        length = rowArray.length;
        for ( index = 0; index < length; index += 1 ) {
          element = rowArray[ index ];
          if ( Array.isArray( element ) ) {
            rowArray[ index ] = flattenArray( element );
            countArray[ index ] = flattenArray( countArray[ index ] );
          }
        }

        tableArray.push( rowArray );
        tableCountArray.push( countArray );
      }

      return { tableArray: tableArray, tableCountArray: tableCountArray };
    },

    /**
     * @method flattenArray
     * @overview Flattens a multi-dimensional array
     * @param array {Array} Array to flatten
     * @return {Array} Flattened array
     */
    flattenArray = function( array ) {
      var length = array.length,
          flattenedArray = [],
          index, element;

      for ( index = 0; index < length; index += 1 ) {
        element = array[ index ];
        if ( Array.isArray( element ) ) {
          flattenedArray = flattenedArray.concat( flattenArray( element ) );
        } else {
          flattenedArray.push( element );
        }
      }
      return flattenedArray;
    },

    /**
     * @method findData
     * @overview Retrieve data from an array or object using a series of keys/indexes
     * @param data {Object/Array} Object/array on which to apply a series of keys/indexes to retrieve specific data
     * @param indexesKeysArray {Array} Either an array of indexes/keys or nested arrays of indexes keys (could be multiple levels deep)
     * @return {Primitive/Array} Either a data primitive, an array of primitives or an array of arrays (could be multiple levels deep)
     */
    findData = function( data, indexesKeysArray ) {
      var typeofResults = typeof indexesKeysArray[ 0 ] === "object",
          currentIndexesKeys = typeofResults ? indexesKeysArray[ 0 ] : indexesKeysArray,
          indexesKeysLength = currentIndexesKeys.length,
          dataNode = data,
          emptyResult = "",
          indexKeyIndex, index, length, dataResults, result;

      // Apply the keys/indexes to the current data node
      for ( indexKeyIndex = 0; indexKeyIndex < indexesKeysLength; indexKeyIndex += 1 ) {
        dataNode = dataNode[ currentIndexesKeys[ indexKeyIndex ] ];

        if ( typeof dataNode === "undefined" ) {
          return emptyResult;
        }
      }

      // If there are more keys/indexes to process, then call this function recursively for each element in the dataNode array
      if ( indexesKeysArray.length > 1 ) {
        length = dataNode.length;

        if ( length > 0 ) {
          dataResults = [];
     
          for ( index = 0; index < length; index += 1 ) {
            result = findData( dataNode[ index ], indexesKeysArray.slice( 1 ) );
            dataResults.push( result );
          }
        } else {
          return emptyResult;
        }

        // Return the element instead of the array for single element arrays
        return dataResults.length > 1 ? dataResults : dataResults[ 0 ];
      }

      return dataNode;
    },

    /**
     * @method getNestedArrayElementCounts
     * @overview Determines the non-array element count in nested arrays and the sum of element counts for the parent array
     * @param data {Array} Array for determining the node count (could have multiple nested arrays)
     * @param maxCountArrayLevels {Number} (Optional, defaults to 1000 which is no maximum) Maximum number of count array levels allowed (any beyond are summed together)
     * @return {Object} Object containing the following properties:
     *    totalElementCount {Number} Total number of primitive elements within data
     *    subElementCount {Array/Number} Count of number of primitive elements within each array element
     */
    getNestedArrayElementCounts = function( data, maxCountArrayLevels ) {
      var totalElementCount = 0,
          currMaxCountArrayLevels = maxCountArrayLevels !== null ? maxCountArrayLevels : 1000,
          arrayLength, elementCount, result, resultTotalCount, resultElementCounts, descendantElementCountArray, index, length, dataNode;

      if ( !Array.isArray( data ) ) {
        totalElementCount = 1;
        elementCount = 1;
      } else {
        arrayLength = data.length;
        elementCount = [];

        for ( index = 0; index < arrayLength; index += 1) {
          dataNode = data[ index ];
          if ( Array.isArray( dataNode ) && dataNode.length > 0 ) {
            result = getNestedArrayElementCounts( dataNode, ( currMaxCountArrayLevels !== 1000 ? currMaxCountArrayLevels - 1 : 1000 ) );
            totalElementCount += result.totalElementCount;
            elementCount.push( result.subElementCount );
          } else {
            totalElementCount += 1;
            elementCount.push( 1 );
          }
        }
      }

      if ( currMaxCountArrayLevels < 1 ) {
        elementCount = totalElementCount;
      }

      return { totalElementCount: totalElementCount, subElementCount: elementCount };
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
          element = settings[ "element" ],
          fileData, mimeType, blobOutput, urlOutput, action, key, indexesKeys, storedData;

      if ( type === "csv" ) {
        if ( source === "sessionStorage" || source === "localStorage" || source === "dataAttribute" ) {
          key = settings[ "key" ];
          indexesKeys = settings[ "indexesKeys" ];

          // Ensure indexesKeys is an array
          if ( indexesKeys && typeof indexesKeys === "string" ) {
            indexesKeys = JSON.parse( indexesKeys );
          }

          storedData = retrieveData( key, indexesKeys, source, false, element );

          if ( !settings[ "tableColSpecs" ] ) {
            fileData = generateTableRows( storedData, "csv" );
          } else {
            let result = dataToTableArray( storedData, settings[ "tableColSpecs" ], true );
            fileData = generateTableRows( result.tableArray, "csv", result.tableCountArray );
          }
        } else {
          fileData = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ], true );
        }

        mimeType = "text/csv;charset=utf-8;";
      } else if ( type === "json" ) {
        if ( source === "form-state" ) {
          fileData = JSON.stringify( getFormFieldStatus( settings[ "container" ] ) );
        } else if ( source === "sessionStorage" || source === "localStorage" || source === "dataAttribute" ) {
          fileData = retrieveData( settings[ "key" ], settings[ "indexesKeys" ] , source, true, element );
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
    inputFile = function( settings, elm, returnAsString ) {
      if ( typeof ( FileReader ) !== "undefined" ) {
        var fileReader = new FileReader();

        fileReader.onload = function ( event ) {
           var type = settings[ "type" ],
               action = settings[ "action" ],
               fileText = event.target.result,
               fileData;

           if ( !returnAsString ) {
             if ( type === "csv" ) {
               fileData = csvToArray( fileText );
             } else if ( type === "json" ) {
               fileData = JSON.parse( fileText );
             } else {
               return fileText;
             }

             if ( action === "restore-form-state" ) {
               setFormFieldStatus( settings[ "container" ], fileData, settings[ "noEvent" ] );
             } else if ( action === "restore-storage" ) {
               storeData( "replace", settings[ "key" ], settings[ "indexesKeys" ], settings[ "target" ], fileData, settings[ "element" ] );
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
     * @overview Perform actions on data in sessionStorage, localStorage or a data attribute (including storing and deleting)
     * @param Store or remove data in storage (e.g., append data, delete data)
     * @param settings {Object} Settings object for the data to store in or remove from storage
     */
    outputStorage = function( settings ) {
      var type = settings[ "type" ],
          source = settings[ "source" ],
          action = settings[ "action" ],
          key = settings[ "key" ],
          indexesKeys = settings[ "indexesKeys" ],
          data = settings[ "data" ];

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
      } else if ( typeof source === "object" ) {
        data = retrieveData( source[ "key" ], source[ "indexesKeys" ], source[ "type" ], false, source[ "element" ] );
      }

      // Store the data
      storeData( action, key, indexesKeys, type, data, settings[ "element" ] );
    },

    /**
     * @method inputStorage
     * @overview Perform actions using data in sessionStorage, localStorage or a data attribute
     * @param Use data in storage (e.g., data to restore the state of a form or table)
     * @param settings {Object} Settings object for what to do with data in storage
     */
    inputStorage = function( settings ) {
      var type = settings[ "type" ],
          source = settings[ "source" ],
          action = settings[ "action" ],
          key = settings[ "key" ],
          indexesKeys = settings[ "indexesKeys" ],
          storedData, tableRows;

      // Ensure indexesKeys is an array
      if ( indexesKeys && typeof indexesKeys === "string" ) {
        indexesKeys = JSON.parse( indexesKeys );
      }

      storedData = retrieveData( key, indexesKeys, source ? source : type, false, settings[ "element" ] );

      if ( action === "restore-form-state" ) {
        // Restore the form state from the stored data, or clear it if no data was found
        if ( storedData && storedData.length > 0 ) {
          setFormFieldStatus( settings[ "container" ], storedData, settings[ "noEvents" ] );
        } else {
          clearFormFieldStatus( settings[ "container" ] );
        }
      } else if ( action === "set-table-rows" ) {
        // Set table data rows (normally with tbody as the container) using the stored data
        if ( !settings[ "tableColSpecs" ] ) {
          tableRows = generateTableRows( storedData, "html" );
        } else {
          let result = dataToTableArray( storedData, settings[ "tableColSpecs" ], true );
          tableRows = generateTableRows( result.tableArray, "html", result.tableCountArray );
        }

        // Replace the contents of the container with the new table rows
        document.querySelector( settings[ "container" ] ).innerHTML = tableRows;
      }
    },

    /**
     * @method storeData
     * @overview Stores data in sessionStorage, localStorage or a data attribute using a key and optionally in nested arrays/objects
     * @param action {String} Action to take on the stored data (options: replace, append, prepend, delete, increment, decrement)
     * @param key {String} Key for storing the data
     * @param indexesKeys {Array} (defaults to empty array) Indexes and/or keys used to store data in nested arrays/objects in the data
     * @param storageType {String} (defaults to "sessionStorage") Where to store the data (e.g., "sessionStorage", "localStorage", "dataAttribute")
     * @param data {String/Array/Object/Other} (not used for "delete" action) Data to store
     * @param elements {String/DOM node/jQuery object} (optional, required for dataAttribute storage type) Elements containing the data attribute (only used for dataAttribute storage type)
     * @fires Fires either the storage-updated.wb-format-gen or data-attribute-updated.wb-format-gen event on the document node once complete
     */
    storeData = function( action, key, indexesKeys, storageType, data, elements ) {
      var currAction = action ? action : "replace",
          currIndexesKeys = indexesKeys ? indexesKeys : [],
          currStorageType = storageType ? storageType : "sessionStorage",
          indexesKeysLength = currIndexesKeys.length,
          storedData, storedDataFragment, parentStoredDataFragment, index, length, typeofResult, indexKey, nextIndexKey,
          currElement, currElements, elementsIndex, elementsLength, resultData;

      // Retrieve and parse any stored data
      if ( currStorageType === "sessionStorage" ) {
        currElements = [ sessionStorage.getItem( key ) ];
      } else if ( currStorageType === "localStorage" ) {
        currElements = [ localStorage.getItem( key ) ];
      } else {
        // Convert to DOM nodes and then retrieve the data attribute
        if ( elements instanceof jQuery ) {
          currElements = elements.get();
        } else if ( typeof elements === "string" ) {
          currElements = document.querySelectorAll( elements );
        } else {
          currElements = elements;
        }
      }

      elementsLength = currElements.length;
      for ( elementsIndex = 0; elementsIndex < elementsLength; elementsIndex += 1 ) {
        currElement = currElements[ elementsIndex ];
        storedData = currStorageType === "dataAttribute" ? currElement.getAttribute( key ) : currElement;

        if ( storedData && storedData.length > 0 ) {
          storedData = JSON.parse( storedData );
          storedDataFragment = storedData;

          if ( indexesKeysLength > 0 ) {
            // Find the nested data to manipulate or delete
            for ( index = 0; index < indexesKeysLength; index += 1 ) {
              indexKey = currIndexesKeys[ index ];

              if ( index === indexesKeysLength - 1 && currAction === "delete" ) {
                // Delete only specified data
                if ( Array.isArray( storedDataFragment ) ) {
                  storedDataFragment.splice( indexKey, 1 );
                } else {
                  delete storedDataFragment[ indexKey ];
                }
                break;
              } else {
                // Retrieve the nested data or create it if it doesn't already exist and is needed
                parentStoredDataFragment = storedDataFragment;

                storedDataFragment = storedDataFragment[ indexKey ];

                if ( !storedDataFragment && storedDataFragment !== 0 ) {
                  nextIndexKey = currIndexesKeys[ index + 1 ];

                  if ( nextIndexKey !== null ) {
                    storedDataFragment = typeof nextIndexKey === "string" ? {} : [];
                  } else if ( currAction === "append" || currAction === "prepend" ) {
                    storedDataFragment = [];
                  } else {
                    break;
                  }
                  parentStoredDataFragment[ indexKey ] = storedDataFragment;
                }
              }
            }
          } else if ( currAction === "delete" ) {
            // Not working with nested data so delete all the stored data referenced by the key
            if ( currStorageType === "sessionStorage" ) {
              sessionStorage.removeItem( key );
            } else if ( currStorageType === "localStorage" ) {
              localStorage.removeItem( key );
            } else {
              currElement.setAttribute( key, "" );
            }
            return;
          }

          if ( currAction !== "delete" ) {
            if ( Array.isArray( storedDataFragment ) ) {
              if ( currAction === "append" ) {
                storedDataFragment.push( data );
              } else if ( currAction === "prepend" ) {
                storedDataFragment.unshift( data );
              } else {
                if ( indexesKeysLength > 0 ) {
                  parentStoredDataFragment[ currIndexesKeys[ index - 1 ] ] = data;
                } else {
                  storedData = data;
                }
              }
              resultData = storedData;
            } else {
              if ( currAction === "increment" ) {
                resultData = storedDataFragment + 1;
              } else if ( currAction === "decrement" ) {
                resultData = storedDataFragment - 1;
              } else {
                // Make sure everything is a string
                if ( currAction !== "replace" && typeof storedDataFragment !== "string" ) {
                  storedDataFragment = storedDataFragment.toString();
                }

                resultData = typeof data !== "string" ? data.toString() : data;

                if ( currAction === "append" ) {
                  resultData = storedDataFragment + resultData;
                } else if ( currAction === "prepend" ) {
                  // Update the parent with the prepended data
                  resultData += storedDataFragment;
                }
              }

              // If parent exists, update it with the new data
              if ( parentStoredDataFragment ) {
                parentStoredDataFragment[ currIndexesKeys[ currIndexesKeys.length - 1 ] ] = resultData;
                resultData = storedData;
              }
            }
          } else {
            resultData = storedData;
          }
        } else if ( currAction === "delete" ) {
          // Delete all the stored data referenced by the key
          if ( currStorageType === "sessionStorage" ) {
            sessionStorage.removeItem( key );
          } else if ( currStorageType === "localStorage" ) {
            localStorage.removeItem( key );
          } else {
            currElement.setAttribute( key, "" );
          }
          return;
        } else if ( currAction === "append" || currAction === "prepend" ) {
          resultData = [ data ];
        }

        // Ensure the resulting data is a string
        if ( typeof resultData !== "string" ) {
          if ( resultData ) {
            if ( typeof resultData === "object" ) {
              if ( Array.isArray( resultData ) ) {
                length = resultData.length;
              } else {
                length = Object.keys( resultData ).length;
              }

              if ( length > 0 ) {
                resultData = JSON.stringify( resultData );
              } else {
                resultData = "";
              }
            } else {
              resultData = resultData.toString();
            }
          } else {
            resultData = "";
          }
        }

        if ( currStorageType === "sessionStorage" ) {
          sessionStorage.setItem( key, resultData );
        } else if ( currStorageType === "localStorage" ) {
          localStorage.setItem( key, resultData );
        } else {
          currElement.setAttribute( key, resultData );
        }
      }

      // Trigger an event indicating that the storage has been updated
      $document.trigger( ( currStorageType === "dataAttribute" ? "data-attribute" : "storage" ) + "-updated" + selector );
    },

    /**
     * @method retrieveData
     * @overview Retrieves data from sessionStorage, localStorage or a data attribute using a key and optionally from nested arrays/objects
     * @param key {String} Key for retrieving the data
     * @param indexesKeys {Array} (defaults to empty array) Indexes and/or keys used to retrieve data from nested arrays/objects in the data
     * @param storageType {String} (defaults to "sessionStorage") Where to store the data (e.g., "sessionStorage", "localStorage", "dataAttribute")
     * @param returnAsString {Boolean} (Defaults to false) Whether or not to return the data as a string
     * @param element {String/DOM node/jQuery object} (optional, required for dataAttribute storage type) Element containing the data attribute (only uses for dataAttribute storage type)
     * @return {String} Returns the stored data.
     */
    retrieveData = function( key, indexesKeys, storageType, returnAsString, element ) {
      var currIndexesKeys = indexesKeys ? indexesKeys : [],
          currStorageType = storageType ? storageType : "sessionStorage",
          indexesKeysLength = currIndexesKeys.length,
          data, index;

      // Retrieve and parse any stored data
      if ( currStorageType === "sessionStorage" ) {
        data = sessionStorage.getItem( key );
      } else if ( currStorageType === "localStorage" ) {
        data = localStorage.getItem( key );
      } else {
        // Convert to a DOM node and then retrieve the data attribute (assumption is retrieving from only one node)
        if ( element instanceof jQuery ) {
          data = element.get( 0 ).getAttribute( key );
        } else if ( typeof element === "string" ) {
          data = document.querySelector( element ).getAttribute( key );
        } else {
          data = element.getAttribute( key );
        }
      }

      if ( data && data.length > 0 ) {
        data = JSON.parse( data );

        for ( index = 0; index < indexesKeysLength; index += 1 ) {
          data = data[ currIndexesKeys[ index ] ];
        }

        if ( returnAsString ) {
          data = JSON.stringify( data );
        }
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
                    fieldObjects.push( { selector: "#" + field.id, state: true, value: field.value } );
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
              fieldObjects.push( { selector: "#" + field.id, state: field.checked, value: field.value } );
            } else if ( type !== "button" && type !== "reset" && type !== "submit" && type !== "image" ) {
              fieldObjects.push( { selector: "#" + field.id, state: field.value } );
            } 
          } else if ( nodeName === "select" ) {
            if ( field.selectedIndex !== -1 ) {
              fieldObjects.push( { selector: "#" + field.id + " option:nth-child(" + ( field.selectedIndex + 1 ) + ")", state: true, value: field.selectedValue, text: field.options[ field.selectedIndex ].text } );
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
     * @param noEvents {Boolean} true = don't generate events when setting form fields
     */
    setFormFieldStatus = function( formsSelector, fields, noEvents ) {
      var forms = document.querySelectorAll( formsSelector ),
          numForms = forms.length,
          numFields = fields.length,
          fireChangeEvent = false,
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
                    fireChangeEvent = true;
                  } else {
                    // Trigger a click event
                    if ( !noEvents ) {
                      subField.click();
                    } else {
                      subField.checked = false;
                    }
                  }
                }
              } else if ( type === "checkbox" ) {
                if ( !noEvents && subField.checked !== fieldObject.state ) {
                  subField.click();
                } else {
                  subField.checked = fieldObject.state;
                }
              } else if ( type !== "file" && type !== "button" && type !== "reset" && type !== "submit" && type !== "image" ) {
                subField.value = fieldObject.state;
                fireChangeEvent = true;
              } 
            } else if ( nodeName === "option" ) {
              if ( subField.selected !== fieldObject.state ) {
                subField.selected = fieldObject.state;
              }
              subField = subField.parentNode;
              fireChangeEvent = true;
            } else if ( nodeName === "textarea" ) {
              subField.value = fieldObject.state;
              fireChangeEvent = true;
            }

            if ( fireChangeEvent && !noEvents ) {
              if( typeof( Event ) === "function") {
                event = new Event( "change", { bubbles: true });
                subField.dispatchEvent( event );
              } else {
                // Special handling for IE
                event = document.createEvent( "Event" );
                event.initEvent( "change", true, true );
                subField.dispatchEvent( event );
              }
              fireChangeEvent = false;
            }
          }
        }
      }
    },

    /**
     * @method clearFormFieldStatus
     * @overview Clears all the form fields in the form(s). Can be triggered on init with:
     *   class="wb-format-gen" data-wb-format-gen='{ "resetForm": "#form-selector" }'
     * @param formSelector {String} Selector for the form for which to retrieve the statuses of the contained fields.
     */
    clearFormFieldStatus = function( formSelector ) {
      var forms = document.querySelectorAll( formSelector ),
          length = forms.length,
          index;

      for ( index = 0; index < length; index += 1 ) {
        forms[ index ].reset();
      }
    },

    /**
     * @method generateTableRows
     * @overview Generates table rows in the form of a string using the passed data
     * @param data {String / Array} Data to create the table rows with
     * @param outputFormat {String} Output format of the table (i.e., "html", "csv")
     * @param rowspans {Array} (Optional, defaults to rowspan of 1 for each table cell) Array of rowspans for each cell in data
     * @param splitRowspans {Boolean} (Optional, defaults to false, unless output type is CSV) Whether to implement rowspans as a single cell or multiple individual cells (e.g., for CSV rowspans have to be split up since CSV does not support rowspans)
     * @return {String} Generated table rows
     */
    generateTableRows = function( data, outputFormat, rowspans, splitRowspans ) {
      var tableRows = "",
          rowIndex, numRows, columns, column, columnIndex, numColumns, columnRowspans, rowspan, rowspanTracker,
          index, length, index2, length2, outputRow, cell, rowspanCells, rowOpen, rowClose, columnOpenStart, columnOpenEnd, columnClose;

      // Handle no data being passed
      if ( !data || data.length === 0 ) {
        return "";
      }

      // Set up format for rows/cols based on output format type
      if ( outputFormat === "html" ) {
        // HTML
        rowOpen = "<tr>\n";
        rowClose = "</tr>\n";
        columnOpenStart = "<td";
        columnOpenEnd = ">"
        columnClose = "</td>\n";
      } else {
        // CSV
        rowOpen = "";
        rowClose = "\n";
        columnOpenStart = "";
        columnOpenEnd = "";
        columnClose = ",";
        splitRowspans = true;
      }

      // Ensure the CSV data is converted to array format to make it easier to create table rows
      if ( typeof data === "string" ) {
        data = csvToArray( data );
      }

      // Generate the table rows string
      numRows = data.length;
      for ( rowIndex = 0; rowIndex < numRows; rowIndex += 1 ) {
        columns = data[ rowIndex ];
        numColumns = columns.length;

        if ( rowspans ) {
          columnRowspans = rowspans[ rowIndex ];

          // Create the rowspanTracker and rowspanCells if they don't exist
          if ( !rowspanTracker ) {
            rowspanTracker = new Array( numColumns );
            rowspanCells = new Array( columns.length );
          }

          // Set rowspanTracker to 1 for each column
          for ( index = 0; index < numColumns; index += 1 ) {
            rowspanTracker[ index ] = 1;
          }
        }

        if ( !columnRowspans ) {
          // Row has no cells with rowspans so just output each cell of the row
          tableRows += rowOpen;
          for ( columnIndex = 0; columnIndex < numColumns; columnIndex += 1 ) {
            tableRows += columnOpenStart + columnOpenEnd + columns[ columnIndex ] + columnClose;
          }
          tableRows += rowClose;
        } else {
          // Row has at least one cell with a rowspan
          outputRow = true;

          // Output all cells for the current row (including all cells from sub-rows)
          while ( outputRow ) {
            outputRow = false;

            // Process each of the columns for the current row
            for ( columnIndex = 0; columnIndex < numColumns; columnIndex += 1 ) {
              if ( rowspanTracker[ columnIndex ] > 1 ) {
                // Output the opening table row if it hasn't already been output
                if ( !outputRow ) {
                  tableRows += rowOpen;
                  outputRow = true;
                }

                // Don't output a cell if still in scope of the most recent rowspan and splitRowspans is not true
                if ( splitRowspans ) {
                  tableRows += columnOpenStart + columnOpenEnd + rowspanCells[ columnIndex ] + columnClose;
                }
                rowspanTracker[ columnIndex ] -= 1;
              } else {
                column = columns[ columnIndex ];

                // If column is not null, then output the opening row tag once
                if ( column !== null ) {
                  // Output the opening table row if it hasn't already been output
                  if ( !outputRow ) {
                    tableRows += rowOpen;
                    outputRow = true;
                  }

                  if ( typeof column !== "object" ) {
                    // Column does not contain an array so retrieve the cell value and rowspan and then set the column to null
                    cell = column;
                    rowspan = columnRowspans[ columnIndex ];
                    columns[ columnIndex ] = null;
                  } else {
                    // Column contains an array so remove the first cell value and rowspan
                    cell = column.shift();
                    rowspan = columnRowspans[ columnIndex ].shift();

                    // If there are no more cell values then set the column to null
                    if ( column.length === 0 ) {
                      columns[ columnIndex ] = null;
                    }
                  }

                  if ( rowspan > 1 ) {
                    // Cell spans more than one row, so output the rowspan attribute (unless splitRowspans is true) and set the rowspanTracker for this column
                    tableRows += columnOpenStart;
                    if ( splitRowspans ) {
                      rowspanCells[ columnIndex ] = cell;
                    } else {
                      tableRows += ' rowspan="' + rowspan.toString() + '"';
                    }
                    tableRows += columnOpenEnd;
                    rowspanTracker[ columnIndex ] = rowspan;
                  } else {
                    tableRows += columnOpenStart + columnOpenEnd;
                  }

                  tableRows += cell + columnClose;
                }
              }
            }

            if ( outputRow ) {
              tableRows += rowClose;
            }
          }
        }
      }

      return tableRows;
    },

    /**
     * @method handleEvent
     * @overview Handles most plugin events
     * @param event {Object} Event object
     * @param settingsParam {Object} (Optional, default is to get the settings from the event object) Settings to be used by the handler
     */
    handleEvent = function( event, settingsParam ) {
      var eventType = event.type,
          target = event.target,
          dataAttributeValue = settingsParam ? settingsParam : JSON.parse( target.getAttribute( dataAttribute ) ),
          returnFalse = false,
          settings, operations, eventTrigger, type, source, action, data, storedData, key, index, length, result,
          resetForm, settingsIndex, settingsLength;

      if ( !Array.isArray( dataAttributeValue ) ) {
        dataAttributeValue = [ dataAttributeValue ];
      }

      // Iterate through each of the settings objects
      settingsLength = dataAttributeValue.length;
      for ( settingsIndex = 0; settingsIndex < settingsLength; settingsIndex += 1 ) {
        settings = dataAttributeValue[ settingsIndex ];
        operations = settings[ "operations" ];
        eventTrigger = settings[ "eventTrigger" ];

        // If eventTrigger is specified, then ignore any event types that don't match the eventTrigger 
        if ( eventTrigger && eventTrigger !== eventType && eventTrigger !== ( eventType + "." + event.namespace ) ) {
          continue;
        }

        if ( operations ) {
          // Iterate through each settings array item
          length = operations.length;
          for ( index = 0; index < length; index += 1 ) {
            result = handleEvent( event, operations[ index ] );
            if ( result === false ) {
              returnFalse = true;
            }
          }
 
          if ( returnFalse ) {
            return false;
          }
        } else {
          if ( settings && type !== "change" ) {
            type = settings[ "type" ];
            source = settings[ "source" ];
            resetForm = settings[ "resetForm" ];

            if ( resetForm ) {
              clearFormFieldStatus( resetForm );
            } else if ( target.type !== "file" ) {
              if ( type === "sessionStorage" || type === "localStorage" || type === "dataAttribute" ) {
                outputStorage( settings );
              } else if ( source === "sessionStorage" || source === "localStorage" || source === "dataAttribute" ) {
                if ( type === "csv" || type === "json" ) {
                  outputFile( settings );
                } else {
                  inputStorage( settings );
                }
              } else {
                outputFile( settings );
              }
            }
          } else {
            if ( target.type === "file" ) {
              inputFile( settings, target );
            }
          }
        }

        if ( settings && settings[ "returnFalse" ] === true ) {
          return false;
        }
      }
    };

$document.on( "click change", selector, function( event ) {
  var data = event.target.getAttribute( dataAttribute ),
      settings, eventTrigger;

  // Ignore non-wb-format-gen nodes and ones where eventTrigger of "click" or "change" is specified
  if ( data ) {
    settings = JSON.parse( data );
    eventTrigger = settings[ "eventTrigger" ];
    if ( !eventTrigger || ( eventTrigger !== "click" && eventTrigger !== "change" ) ) {
      handleEvent( event, settings );
    }
  }
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
