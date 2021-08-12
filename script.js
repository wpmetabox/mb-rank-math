( function( $, fields, document ) {
	var module = {
		timeout: undefined,

		// Load plugin and add hooks.
		load: function() {
			// Make sure clone fields are added.
			getClonedFields();

			$( 'input[class^="rwmb"], textarea[class^="rwmb"], select[class^="rwmb"], button[class^="rwmb"]' ).each( module.addNewField );

			// Update SEO By Rank Math analyzer when fields are updated.
			fields.map( module.listenToField );

			wp.hooks.addFilter( 'rank_math_content', 'rank-math', module.addContent );

			// Make the SEO By Rank Math analyzer works for existing content when page loads.
			module.update();
		},

		// Add content to SEO By Rank Math Analyzer.
		addContent: function( content ) {
			fields.map( function( fieldId ) {
				content += ' ' + getFieldContent( fieldId );
			} );
			return content;
		},

		// Listen to field change and update SEO By Rank Math analyzer.
		listenToField: function( fieldId ) {
			if ( isEditor( fieldId ) ) {
				tinymce.get( fieldId ).on( 'keyup', module.update );
				return;
			}
			var field = document.getElementById( fieldId );
			if ( field ) {
				field.addEventListener( 'keyup', module.update );
			}
		},

		// Update the SEO By Rank Math result. Use debounce technique, which triggers only when keys stop being pressed.
		update: function() {
			clearTimeout( module.timeout );
			module.timeout = setTimeout( function() {
				rankMathEditor.refresh( 'content' );
			}, 250 );
		},

		/**
		 * Add new cloned field to the list and listen to its change.
		 */
		addNewField: function() {
			if ( -1 === fields.indexOf( this.id ) ) {
				fields.push( this.id );
				module.listenToField( this.id );
			}
		}
	};

	/**
	 * Get clone fields.
	 */
	function getClonedFields() {
		fields.map( function( fieldId ) {
			var elements = document.querySelectorAll( '[id^=' + fieldId + '_]' );
			Array.prototype.forEach.call( elements, function( element ) {
				if ( -1 === fields.indexOf( element.id ) ) {
					fields.push( element.id );
				}
			} );
		} );
	}

	/**
	 * Get field content.
	 * Works for normal inputs and TinyMCE editors.
	 *
	 * @param fieldId The field ID
	 * @returns string
	 */
	function getFieldContent( fieldId ) {
		var field = document.getElementById( fieldId );
		if ( field ) {
			var content = isEditor( fieldId ) ? tinymce.get( fieldId ).getContent() : field.value;
			return content ? content : '';
		}
		return '';
	}

	/**
	 * Check if the field is a TinyMCE editor.
	 *
	 * @param fieldId The field ID
	 * @returns boolean
	 */
	function isEditor( fieldId ) {
		return typeof tinymce !== 'undefined' && tinymce.get( fieldId ) !== null;
	}

	// Run on document ready.
	$( function() {
		setTimeout( function() {
			$( module.load );
		}, 500 );
	} );

} )( jQuery, MBRankMath, document );
