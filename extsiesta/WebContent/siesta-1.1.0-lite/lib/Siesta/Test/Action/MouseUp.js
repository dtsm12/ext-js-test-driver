/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.MouseUp
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in a `t.chain` call with "mouseUp" shortcut:

    t.chain(
        {
            action      : 'mouseUp',
            target      : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.Browser#mouseUp mouseUp} on the provided {@link #target}. 

*/
Class('Siesta.Test.Action.MouseUp', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod  : 'mouseUp'
    },

    
    methods : {
        
        process : function () {
            // This method is synchronous
            this.test.mouseUp(this.getTarget());

            setTimeout(this.next, 100);
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('mouseUp', Siesta.Test.Action.MouseUp)
Siesta.Test.ActionRegistry.registerAction('fingerUp', Siesta.Test.Action.MouseUp)
