/*!
 * Government of Canada Digital Playbook / Guide numérique du gouvernment du Canada
 * https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/LICENSE.md
 *
 */
( function( $ ) {
"use strict";

$( document ).on( "click", "#dpgn-filter-form input:checkbox", function( event )  {
  var target = event.target;
  
  // If the checkbox has children checkboxes, then check/uncheck them all when the parent checkbox is checked/unchecked
  $( target ).siblings( "ul" ).find( "input:checkbox" ).prop( "checked", target.checked );
} );

$( document ).on( "click", "#filter-button", function( ) {
	var $filterForm = $( "#dpgn-filter-form" ),
		$groups = $filterForm.find( "fieldset" ),
		groupsLen = $groups.length,
		showSelector = "",
		hideSelector = "",
		hideClass = "hidden",
		groupShowSelector, groupHideSelector, $group, filter, filtersEnabledLen, filtersDisabledLen, groupIndex, filterIndex, $filters, $filtersEnabled, $filtersDisabled;

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
				groupShowSelector += ", ." + $filtersEnabled[ filterIndex ].id;
			}
			groupShowSelector = groupShowSelector.substr( 2 );
			showSelector += ", " + groupShowSelector.substr( 2 );
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
console.log( "showSelector: " + showSelector );
  console.log( "hideSelector: " + hideSelector );
	// Make visible any content that should be visible but is currently hidden
	$( showSelector ).filter( "." + hideClass ).not( hideSelector ).removeClass( hideClass );

	// Hide any content that should be hidden but is currently visible
	$( hideSelector ).not( hideClass ).addClass( hideClass );
} );
} )( jQuery );
