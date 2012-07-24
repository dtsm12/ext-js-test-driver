StartTest(function(t) {
    
    var Ext     = t.Ext()
    
    t.type(Ext.getCmp('loginPanel').query('textfield')[ 0 ], "CharlieJohnson", function () {
        
        t.type(Ext.getCmp('loginPanel').query('textfield')[ 1 ], "secret", function () {
            
            t.waitForPageLoad(function (window, Ext) {
                
                var panel   = Ext.getCmp('authResult')
                
                t.is(panel.authResult, 'success', 'Correct authentication result')
                
                t.done()
            })
            
            t.click(Ext.getCmp('loginPanel').down('button'))
        })
    })
})    