/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**
@class Siesta.Test.Action

Base class for {@link Siesta.Test#chain} actions.

*/
Class('Siesta.Test.Action', {
    
    has : {
        args                : null, 
        
        desc                : null,
        test                : { required : true },
        next                : { required : true },
        
        requiredTestMethod  : null
    },

    
    methods : {
        
        initialize : function () {
            var requiredTestMethod  = this.requiredTestMethod
            
            // additional sanity check
            if (requiredTestMethod && !this.test[ requiredTestMethod ]) 
                throw new Error("Action [" + this + "] requires `" + requiredTestMethod + "` method in your test class") 
        },
        
        
        process : function () {
            this.next()
        }
    }
});
