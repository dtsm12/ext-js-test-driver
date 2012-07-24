/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Class('Siesta.Result.Diagnostic', {
    
    isa : Siesta.Result,
    
    has : {
        isSimulatedEvent : false,

        // Used by simulated events
        sourceX      : null,
        sourceY      : null,
        type         : null
    },

    methods : {
        
        toString : function () {
            var message = '# ' + this.description;
            return message;
        }
    }    
});

