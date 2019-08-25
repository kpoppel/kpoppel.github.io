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
	    ['R', 'Create Cloud Variable %s', 'create_cloud_variable', 'myName'],
	    ['R', 'Get Cloud Variable %s', 'get_cloud_variable', 'variableURL'],
	    ['w', 'Set %s to %s', 'set_cloud_variable', 'variableURL', 'value'],
	    ['R', 'New %s', 'create_cloud_variable', 'myName'],
	    ['R', '%s', 'get_cloud_variable', 'variableURL'],
	    ['r', 'eload Extension', 'reload'],
		
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

    ext._getStatus = function() {
      return { status:2, msg:'Ready' };
    };

    ext.reload = function() {
		ScratchExtensions.unregister('CloudVariable');
		descriptor.blocks.push(['R', 'mynewvariable', get_cloud_variable, 'myVariable']);
		descriptor.menus.k = ['editor', 'player', 'fullscreen'];
		descriptor.blocks.push(['r', 'Menu! %m.k']);
		ScratchExtensions.register('CloudVariable', descriptor, ext);
	}	
	
    ScratchExtensions.register('CloudVariable', descriptor, ext);
})({});

//(myext)({});