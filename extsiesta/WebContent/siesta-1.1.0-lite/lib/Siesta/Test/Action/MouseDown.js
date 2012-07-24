/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
/**

@class Siesta.Test.Action.MouseDown
@extends Siesta.Test.Action
@mixin Siesta.Test.Action.Role.HasTarget

This action can be included in a `t.chain` call with "mouseDown" shortcut:

    t.chain(
        {
            action      : 'mouseDown',
            target      : someDOMElement
        }
    )

This action will perform a {@link Siesta.Test.Browser#MouseDown MouseDown} on the provided {@link #target}. 

*/
Class('Siesta.Test.Action.MouseDown', {
    
    isa         : Siesta.Test.Action,
    
    does        : Siesta.Test.Action.Role.HasTarget,
        
    has : {
        requiredTestMethod  : 'mouseDown'
    },

    
    methods : {
        
        process : function () {
            // This method is synchronous
            this.test.mouseDown(this.getTarget());

            setTimeout(this.next, 100);
        }
    }
});


Siesta.Test.ActionRegistry.registerAction('mouseDown', Siesta.Test.Action.MouseDown)
Siesta.Test.ActionRegistry.registerAction('fingerDown', Siesta.Test.Action.MouseDown)
