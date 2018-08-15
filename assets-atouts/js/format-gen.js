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
          colContent = cols[ colIndex ].textContent.replace( /"/g, '""' );
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
              value = node.textContent;
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
     * @method outputFile
     * @param settings {Object} Settings object for the file to output
     */
    outputFile = function( settings ) {
      var outputLink = document.createElement( "a" ),
          isDownloadAttrSupported = outputLink.download !== undefined,
          type = settings[ "type" ].toLowerCase(),
          source = settings[ "source" ] ? setting[ "source" ].toLowerCase() : null,
          filename = settings[ "filename" ],
          fileData, mimeType, blobOutput, urlOutput;

      if ( type === "csv" ) {
        fileData = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ], true );
        mimeType = "text/csv;charset=utf-8;";
      } else if ( type === "json" ) {
        if ( source === "form-state" ) {
          fileData = JSON.stringify( getFormFieldStatus( settings[ "container" ] ) );
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
     * @param settings {Object} Settings object for the file to output
     * @param elm {HTML node} Input type="file" element that is being used to input a file
     * @param returnAsString {Boolean} (Defaults to false) Whether or not to return the data as a string
     * @return {Array/Object/String} Returned data
     */
    inputFile = function( settings, elm, outputAsString ) {
      if ( typeof ( FileReader ) !== "undefined" ) {
        var fileReader = new FileReader();

        fileReader.onload = function ( event ) {
           var fileText = event.target.result,
               fileData;

           if ( !outputAsString ) {
             if ( settings[ "type" ] === "csv" ) {
               fileData = csvToArray( fileText );
             } else if ( settings[ "type" ] === "json" ) {
               fileData = JSON.parse( fileText );
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
     * @method storeData
     * @param settings {Object} Settings object for the data to save
     */
    storeData = function( settings ) {
      var type = settings[ "type" ].toLowerCase(),
          dataKey = settings[ "dataKey" ],
          data;

      if ( type === "csv" ) {
        data = htmlToCSV( settings[ "rowSelector" ], settings[ "colSelector" ], settings[ "container" ], true );
      } else if ( type === "json" ) {
        data = htmlToJSON( document.querySelector( settings[ "container" ] ), settings[ "structure" ], true );
      } else {
        return;
      }

      if ( settings[ "useLocalStorage" ] === true ) {
        localStorage( dataKey, data );
      } else {
        sessionStorage( dataKey, data );
      }
    },

    /**
     * @method retrieveData
     * @param dataKey {String} Key for retrieving the data
     * @param useLocalStorage {Boolean} (defaults to false) Whether or not to retrieve the data from localStorage
     * @return {String} Returns the stored data.
     */
    retrieveData = function( dataKey, useLocalStorage ) {
      if ( useLocalStorage ) {
        return localStorage( dataKey );
      } else {
        return sessionStorage (dataKey );
      }
    },

    /**
     * @method getFormFieldStatus
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
            subField.selected = fieldObject.state;
          } else if ( nodeName === "textarea" ) {
            fieldObjects.push( { selector: "#" + field.id, state: field.value } );
          }
        }
      }

      return fieldObjects;
    },

    /**
     * @method setFormFieldStatus
     * @param formsSelector {String} Selector for the form(s) for which to set the statuses of the contained fields.
     * @param fields {Array} Array of objects with each containing a selector for a form field ("selector") and that status to set ("status").
     */
    setFormFieldStatus = function( formsSelector, fields ) {
      var forms = document.querySelectorAll( formsSelector ),
          numForms = forms.length,
          numFields = fields.length,
          form, formIndex, index, fieldObject, index2, subFields, numSubFields, subField, nodeName, type;

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
                    subField.checked = false;
                    subField.change();
                  } else {
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
                if ( subField.selected === true ) {
                  subField.selected = false;
                  subField.parentNode.change();
                } else {
                  subField.click();
                }
              }
            } else if ( nodeName === "textarea" ) {
              subField.value = fieldObject.state;
            }
          }
        }
      }
    }

$document.on( "click", selector, function( event ) {
  var target = event.target;

  if ( target.type !== "file" ) {
    outputFile( wb.getData( $( event.target ), componentName ) );
  }
} );

$document.on( "change", selector, function( event ) {
  var target = event.target;

  if ( target.type === "file" ) {
    inputFile( wb.getData( $( event.target ), componentName ), event.target );
  }
} );

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
