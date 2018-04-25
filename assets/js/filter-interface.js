/*!
 * Open Government Licence / Licence du gouvernement ouvert – Canada
 * Copyright (c) 2018 Government of Canada - Gouvernement du Canada
 * http://open.canada.ca/en/open-government-licence-canada / http://ouvert.canada.ca/fr/licence-du-gouvernement-ouvert-canada
 *
 */
( function( $ ) {
"use strict";

var formId = "dpgn-filter-form",
    buttonId = "#filter-button",
    rememberId = "filters-remember";

$( document ).on( "wb-ready.wb", function( event ) {

  // Check to see if the filter form exists
  if ( document.getElementById( formId ) ) {
    try {

      // Retrieve the selector for the previously applied filters
      var filtersChecked = localStorage.getItem( formId ),
          $filters = $( "#" + formId + " fieldset input:checkbox" ),
          rememberCheckbox = document.getElementById( rememberId );

      // If localStorage item doesn't exist, check sessionStorage instead
      if ( filtersChecked === null ) {
        filtersChecked = sessionStorage.getItem( formId );
      } else if ( rememberCheckbox ) {
        rememberCheckbox.checked = true;
      }

      if ( filtersChecked !== null ) {

        // Restore the previously applied filters
        $filters.filter( filtersChecked ).prop( "checked", true );
        $filters.not( filtersChecked ).prop( "checked", false );
        $( buttonId ).trigger( "click", true );
      }
    } catch ( error ) {
    }
  }    
});

$( document ).on( "click", "#" + formId + " input:checkbox", function( event )  {
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

$( document ).on( "click", buttonId, function( event, isInit ) {
	var $filterForm = $( "#" + formId ),
		$groups = $filterForm.find( "fieldset" ),
		groupsLen = $groups.length,
		showSelector = "",
		hideSelector = "",
    filtersChecked = "",
		hideClass = "hidden",
    rememberCheckbox = document.getElementById( rememberId ),
		filterId, allDisabled, groupShowSelector, groupHideSelector, $group, filter, filtersEnabledLen, filtersDisabledLen,
    groupIndex, filterIndex, $filters, $filtersEnabled, $filtersDisabled;

	// If there are no groups (i.e., fieldsets), then consider the form itself to be the one group
	if ( groupsLen == 0 ) {
		$groups.add( $filterForm );
		groupsLen += 1;
	}

	// Iterate through each of the filter groups
	for ( groupIndex = 0; groupIndex < groupsLen; groupIndex += 1 ) {
		$group = $groups.eq( groupIndex )
		groupShowSelector = "";
		groupHideSelector = "";
		$filters = $group.find( "input:checkbox" );
		$filtersEnabled = $filters.filter( ":checked" );
		filtersEnabledLen = $filtersEnabled.length;
    allDisabled = filtersEnabledLen == 0;

		// If no filters are enabled or all filters are enabled, then treat the filters as all being enabled
		if ( $filters.length == filtersEnabledLen || filtersEnabledLen == 0 ) {
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
        }
			}
      groupShowSelector = groupShowSelector.substr( 2 );
			showSelector += ", " + groupShowSelector;
		}

		// Create a selector for all the disabled filters in the group, excluding the enabled filters, then append to the overall disabled filters selector
		if ( filtersDisabledLen !== 0 ) {
			for ( filterIndex = 0; filterIndex < filtersDisabledLen; filterIndex += 1 ) {
				groupHideSelector += ", ." + $filtersDisabled[ filterIndex ].id + ":not(" + groupShowSelector + ")";
			}
			hideSelector += ", " + groupHideSelector.substr( 2 );
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

  if ( !isInit ) {
    // Store a selector for the applied filters
    try {
      if ( rememberCheckbox && rememberCheckbox.checked ) {
        localStorage.setItem( formId, filtersChecked );
      } else {
        localStorage.removeItem( formId );
        sessionStorage.setItem( formId, filtersChecked );
      }
    } catch ( error ) {
    }
  }

	// Make visible any content that should be visible but is currently hidden
	$( showSelector ).filter( "." + hideClass ).not( hideSelector ).removeClass( hideClass );

	// Hide any content that should be hidden but is currently visible
	$( hideSelector ).not( hideClass ).addClass( hideClass );
} );
} )( jQuery );
