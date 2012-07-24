StartTest(function(t) {
    t.diag('Combo field');
    
    t.testExtJS(
        {
            // do not reduce the `actionDelay` 
            actionDelay    : t.actionDelay
        },
        function (t) {
            
            var store = new Ext.data.ArrayStore({
                fields: ['text'],
                data: [
                    ['Form'],
                    ['Grid'],
                    ['Dirty']
                ]
            });
           
            var cmp = new Ext.form.ComboBox({
                fieldLabel      : 'Combo',
                allowBlank      : false,
                displayField    : 'text',
                editable        : true,
                forceSelection  : true,
                mode       : 'local', // Ext 3
                queryMode       : 'local',
                selectOnFocus   : true,
                store           : store,
                typeAhead       : true,
                valueField      : 'text',
                triggerAction   : 'all',
                renderTo        : Ext.getBody()
            });
           
            t.pass('Rendered');
           
            t.chain(
                function (next) {
                    t.click(cmp, next)
                },
                function (next) {
                    t.type(cmp, 'Dir', next);
                },
                function (next) {
                    //simulate tab key for auto-complete
                    t.type(cmp, '[TAB]', next);
                },
                {
                    waitFor :  function () {
                        return cmp.getValue() === 'Dirty';
                    }
                }
            )
            
        }
    );
});