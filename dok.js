/**
 * dok
 * Version: 0.0.1
 * Created by: Ragnar Þór Valgeirsson (rthor)
 * URL: http://github.com/rthor/dok
 * License: MIT
 */
var dok = {
	// Query a string for first DOM element
	query: function ( selector ) {
		return document.querySelector( selector );
	},

	// Query a string for all DOM element
	queryAll: function ( selector ) {
		return document.querySelectorAll( selector );
	},

	// Get DOM element by tag name
	getTag: function ( tagName ) {
		return document.getElementsByTagName( tagName );
	},

	// Get DOM element by class name
	getClass: function ( className ) {
		return document.getElementsByClassName( className );
	},

	// Get DOM element by ID
	getId: function ( id ) {
		return document.getElementById( id );
	}
};