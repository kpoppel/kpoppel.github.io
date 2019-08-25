// ==UserScript==
// @name       Extension - Scratch
// @namespace  http://scratch.mit.edu
// @version    1.0
// @description  An extension for scratch using keyvalue.xyz to transfer values between projects.
// @match      *://scratch.mit.edu/projects/*
// @author kpoppel
// ==/UserScript==

(function(ext) {
//var myext = function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Installed'
        }
    };

    var descriptor = {
        blocks: [
	    ['R', '☁ New %s', 'create_cloud_variable', 'myName'],
	    ['R', '☁ Get %s ', 'get_cloud_variable', 'variableURL'],
	    ['w', '☁ Set %s to %s', 'set_cloud_variable', 'variableURL', 'value'],
		['R', '☁ Get list element %n in %s', 'get_cloud_variable_from_list', 1, 'variableURL'],
		['w', '☁ Set list element %n in %s to %s', 'set_cloud_variable_from_list', 1, 'variableURL', 'value'],
		[' ', 'Get list element %n in %s', 'get_element_from_space_delimited_list', 1, 'list'],
		[' ', 'Get list length of %s', 'get_space_delimited_list_length', 'list']
        ],

	menus: {
//	    k: ['editor', 'player', 'fullscreen']
	}

    };

   ext.create_cloud_variable = function(varname, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "POST",
              url: 'https://api.keyvalue.xyz/new/'+varname,
			  data: "",
              success: function( variable_url ) {
                  callback(variable_url.substring(25));
              }
        });
    };

   ext.get_cloud_variable = function(varname, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "GET",
              url: 'https://api.keyvalue.xyz/'+varname,
              success: function( variable_value ) {
                  callback(variable_value);
              }
        });
    };

   ext.set_cloud_variable = function(varname, value, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "POST",
              url: 'https://api.keyvalue.xyz/'+varname+'/'+value,
			  data: "",
              success: function( variable_url ) {
                  callback(variable_url);
              }
        });
    };

    ext.get_cloud_variable_from_list =  function(index, varname) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "GET",
              url: 'https://api.keyvalue.xyz/'+ext.get_element_from_space_delimited_list(index, varname),
              success: function( variable_value ) {
                  callback(variable_value);
              }
        });

	}

    ext.set_cloud_variable_in_list =  function(index, varname, value) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "POST",
              url: 'https://api.keyvalue.xyz/'+ext.get_element_from_space_delimited_list(index, varname)+'/'+value,
			  data: "",
              success: function( variable_url ) {
                  callback(variable_url);
              }
        });
	}

    ext.get_element_from_space_delimited_list =  function(index, varname) {
		return varname.split(' ')[index-1];
	}

    ext.get_space_delimited_list_length =  function(varname) {
		return varname.split(' ').length;
	}

    ext._getStatus = function() {
      return { status:2, msg:'Ready' };
    };

    ScratchExtensions.register('CloudVariable', descriptor, ext);
})({});

//(myext)({});