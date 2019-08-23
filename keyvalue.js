// ==UserScript==
// @name       Extension - Scratch
// @namespace  http://scratch.mit.edu
// @version    1.0
// @description  An extension for scratch using keyvalue.xyz to transfer values between projects.
// @match      *://scratch.mit.edu/projects/*
// @author kpoppel
// ==/UserScript==

(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {
            status: 2,
            msg: 'Installed'
        }
    };

    var descriptor = {
        blocks: [
	    ['R', 'Create Cloud Variable %s', 'create_cloud_variable', 'myVariable'],
	    ['R', 'Create Cloud Variable %s', 'create_cloud_variable', 'myVariable'],
	    ['R', 'Create Cloud Variable %s', 'create_cloud_variable', 'myVariable'],
        ],

	menus: {
	    k: ['editor', 'player', 'fullscreen']
	}
    };

   ext.create_cloud_variable = function(varname, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "POST",
              url: 'https://api.keyvalue.xyz/new/'+varname,
			  data: "",
              //dataType: 'jsonp',
              success: function( variable_url ) {
                  // Got the data - parse it and return the temperature
                  //temperature = weather_data['main']['temp'];
                  callback(variable_url);
              }
        });
    };

   ext.get_cloud_variable = function(varname, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "GET",
              url: 'https://api.keyvalue.xyz/'+varname,
			  data: "",
              //dataType: 'jsonp',
              success: function( variable_url ) {
                  // Got the data - parse it and return the temperature
                  //temperature = weather_data['main']['temp'];
                  callback(variable_url);
              }
        });
    };

   ext.set_cloud_variable = function(varname, value, callback) {
        // Make an AJAX call to the keyvalue.xyz API
        $.ajax({
			  type: "POST",
              url: 'https://api.keyvalue.xyz/'+varname+'/'+value,
			  data: "",
              //dataType: 'jsonp',
              success: function( variable_url ) {
                  // Got the data - parse it and return the temperature
                  //temperature = weather_data['main']['temp'];
                  callback(variable_url);
              }
        });
    };

    ext._getStatus = function() {
      return { status:2, msg:'Ready' };
    };
	
    ScratchExtensions.register('WebExt', descriptor, ext);
})({});
