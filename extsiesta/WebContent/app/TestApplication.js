Ext.define('app.TestApplication', {
    extend: 'app.Application',

    constructor: function() {
        
        this.superclass.constructor();
        
        // only hook AJAX calls once
        if(!Ext.Ajax.request_hooked)
        {
	        Ext.Ajax.request_hooked = true;
	    	Ext.Ajax.request_forReal = Ext.Ajax.request;     
	    	Ext.Ajax.request = function test_ajax(o)
	    			{         
	    				// fix local file calls for JsTestDriver - uses a "test" context root
	    				if(/^data/i.test(o.url))
	    				{             
	    			    	o.url = o.url.replace(/^data/i, '/test/data');
	    				}         
	    				Ext.Ajax.request_forReal.apply(this, arguments);     
	    			};
        }    	
    },

});