/**
 * @title Content filtering
 * @overview Persistent content filtering through checkbox groups, query string and function call
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
var componentName = "wb-contentfilter",
    selector = "." + componentName,
    initEvent = "wb-init" + selector,
    $document = wb.doc,
    buttonId = "#filter-button",
    rememberId = "filters-remember",
    exclusiveFiltersClass = "dpgn-exclusive-filters",

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
          params = wb.pageUrlParts.params,
          $filters = $( selector + " input:checkbox:not(" + rememberId + ")" ),
          $exclusiveFilters = $( selector + " ." + exclusiveFiltersClass + " input:checkbox" ),
          exclusiveFiltersLen = $exclusiveFilters.length,
          rememberCheckbox = document.getElementById( rememberId ),
          fromStorage = false,
          eventData = event.data,
          filtersChecked, filterIndex, filterId, $filterTargets;

      // Replicate exclusive filter tag to all ancestors and descendents of the tagged element
      for ( filterIndex = 0; filterIndex < exclusiveFiltersLen; filterIndex += 1 ) {
        filterId = $exclusiveFilters[ filterIndex ].id;
        $filterTargets = $( "." + filterId );
        $filterTargets.find( "*" ).addClass( filterId + "-descendent" );
        $filterTargets.parentsUntil( "main" ).addClass( filterId + "-ancestor" );
      }

      if ( contentfilter ) {

        // Triggered manually through an event (e.g., $( "#dpgn-contentfilter" ).trigger( "wb-init.dpgn-contentfilter", [ "#dpgn-abc-123, #dpgn-def-456" ] );).
        filtersChecked = contentfilter;
      } else if ( elm ) {
        if ( params && params.contentfilter ) {

          // Supports query strings in the pattern contentfilter=dpgn-abc-123,dpgn-def-456,
          // where the strings are the ids of the filters without the number sign
          filtersChecked = "#" + params.contentfilter.replace( /,/g, ", #" );
        } else {
          fromStorage = true;
          try {

            // Retrieve the selector for the previously applied filters
            filtersChecked = localStorage.getItem( componentName )

            // If localStorage item doesn't exist, check sessionStorage instead
            if ( filtersChecked === null ) {
              filtersChecked = sessionStorage.getItem( componentName );
            } else if ( rememberCheckbox ) {
              rememberCheckbox.checked = true;
            }
          } catch ( error ) {
          }
        }
        wb.ready( $( elm ), componentName );
      }
      if ( filtersChecked && filtersChecked.length != 0 ) {

        // Restore the previously applied filters
        $filters.filter( filtersChecked ).prop( "checked", true );
        $filters.not( filtersChecked ).prop( "checked", false );
        $( buttonId ).trigger( "click", fromStorage );
      }
    };

$document.on( "click", selector + " input:checkbox", function( event )  {
  var target = event.target,
      $target = $( target ),
      $parentListItem = $target.parent(),
      $parentCheckbox = $parentListItem.parent().siblings( "input:checkbox" ),
      targetChecked = target.checked,
      $siblingCheckboxes, numChecked;

  // If the checkbox has children checkboxes, then check/uncheck them all when the parent checkbox is checked/unchecked
  $target.siblings( "ul" ).find( "input:checkbox" ).prop( "checked", targetChecked );

  // If the target checkbox has a parent checkbox
  if ( $parentCheckbox.length != 0 ) {
    $siblingCheckboxes = $parentListItem.siblings().find( "input:checkbox" );

    // If none of the sibling checkboxes are checked, then check/uncheck the parent when the target is checked/unchecked
    if ( $siblingCheckboxes.filter( ":checked" ).length == 0 ) {
      $parentCheckbox.prop( "checked", targetChecked );
    }
  }
} );

$document.on( "click", buttonId, function( event, fromStorage ) {
	var $filterForm = $( selector ),
		$groups = $filterForm.find( "fieldset" ),
		groupsLen = $groups.length,
		showSelector = "",
		hideSelector = "",
    filtersChecked = "",
		hideClass = "hidden",
    rememberCheckbox = document.getElementById( rememberId ),
		filterId, allDisabled, groupShowSelector, groupHideSelector, $group, filter, filtersEnabledLen, filtersDisabledLen,
    groupIndex, filterIndex, $filters, $filtersEnabled, $filtersDisabled, isExclusiveFiltersGroup, exclusiveNot;

	// If there are no groups (i.e., fieldsets), then consider the form itself to be the one group
	if ( groupsLen == 0 ) {
		$groups.add( $filterForm );
		groupsLen += 1;
	}

	// Iterate through each of the filter groups
	for ( groupIndex = 0; groupIndex < groupsLen; groupIndex += 1 ) {
		$group = $groups.eq( groupIndex )
    isExclusiveFiltersGroup = $group.hasClass( exclusiveFiltersClass );
		groupShowSelector = "";
		groupHideSelector = "";
		$filters = $group.find( "input:checkbox:not(" + rememberId + ")" );
		$filtersEnabled = $filters.filter( ":checked" );
		filtersEnabledLen = $filtersEnabled.length;
    allDisabled = filtersEnabledLen == 0;
    exclusiveNot = "";

		// If no filters are enabled or all filters are enabled, then treat the filters as all being enabled (excluding exclusive filters)
    if ( !isExclusiveFiltersGroup && ( $filters.length == filtersEnabledLen || filtersEnabledLen == 0 ) ) {
      $filtersEnabled = $filters;
      filtersEnabledLen = $filters.length;
      filtersDisabledLen = 0;
    } else {
      $filtersDisabled = $filters.not( ":checked" );
      filtersDisabledLen = $filtersDisabled.length;
    }

		// Create a selector for all the enabled filters in the group then append to the overall enabled filters selector
		if ( filtersEnabledLen !== 0 ) {
			for ( filterIndex = 0; filterIndex < filtersEnabledLen; filterIndex += 1 ) {
				filterId = $filtersEnabled[ filterIndex ].id;
        groupShowSelector += ", ." + filterId;
        if ( !allDisabled ) {
          filtersChecked += ", #"  + filterId;
          if ( isExclusiveFiltersGroup ) {
            exclusiveNot += ":not(." + filterId + "):not(." + filterId + "-descendent):not(." + filterId + "-ancestor)";
          }
        }
			} 
      groupShowSelector = groupShowSelector.substr( 2 );
			showSelector += ", " + groupShowSelector;
		} else if ( isExclusiveFiltersGroup ) {
      showSelector += ", [class*='dpgn-section'], [class*='dpgn-section'] *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)";
    }

		// Create a selector for all the disabled filters in the group, excluding the enabled filters, then append to the overall disabled filters selector
    if ( !isExclusiveFiltersGroup && filtersDisabledLen !== 0 ) {
      for ( filterIndex = 0; filterIndex < filtersDisabledLen; filterIndex += 1 ) {
        groupHideSelector += ", ." + $filtersDisabled[ filterIndex ].id + ":not(" + groupShowSelector + ")";
      }
      hideSelector += ", " + groupHideSelector.substr( 2 );
    } else if ( isExclusiveFiltersGroup && filtersEnabledLen !== 0 ) {

      // Hide all dpgn-section elements and their contents (excluding headings and tarets of the exclusive filter)
      hideSelector += ", [class*='dpgn-section']" + exclusiveNot + ", [class*='dpgn-section'] *:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)" + exclusiveNot;
    }
	}

	// Remove leading comma + space
	if ( showSelector.length != 0 ) {
		showSelector = showSelector.substr( 2 );
	}
	if ( hideSelector.length != 0 ) {
		hideSelector = hideSelector.substr( 2 );
	}
  if ( filtersChecked.length != 0 ) {
		filtersChecked = filtersChecked.substr( 2 );
	}

  if ( !fromStorage ) {
    // Store a selector for the applied filters
    try {
      if ( rememberCheckbox && rememberCheckbox.checked ) {
        localStorage.setItem( componentName, filtersChecked );
      } else {
        localStorage.removeItem( componentName );
        sessionStorage.setItem( componentName, filtersChecked );
      }
    } catch ( error ) {
    }
  }

	// Make visible any content that should be visible but is currently hidden
	$( showSelector ).filter( "." + hideClass ).not( hideSelector ).removeClass( hideClass );

	// Hide any content that should be hidden but is currently visible
	$( hideSelector ).not( hideClass ).addClass( hideClass );
} );
  
// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );
  
} )( jQuery, window, document, wb );
