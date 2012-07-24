StartTest(function(t) {
    t.getHarness([
        '601_siesta_ui_failing.t.js',
        '601_siesta_ui_passing.t.js'
    ]);
    
    t.diag('Verify code listing is shown, correct row highlighted');
    
    t.chain(
        { waitFor : 'rowsVisible', args : 'testgrid' },

        { action : 'doubleclick', target : 'testgrid => .x-grid-row' },
        
        { waitFor: 'selector', args : ['.siesta-assertion-grid .tr-row-failed-assertion'] },
            
        function(next, result) {
            t.contentLike(result[0], 'foo', 'Found failed text in assertion grid, awesome');
            t.doubleClick(result[0], next);
        },

        function(next, result) {
            // IE doesn't support stack traces for exceptions 
            if (!Ext.isIE) t.selectorExists('.line.number4.highlighted', 'Line 4 was highlighted');
            
            next();
        },

        { action : 'doubleclick', target : 'testgrid => .x-grid-row:last-child' },
        
        { waitFor: 'harnessEvent', args : 'testsuiteend' },

        function(next, result) {
            t.notOk(t.cq1('button[iconCls=view-source]').pressed, 'No pressed button exist (source btn)');
            next();
        },

        { action : 'click', target : '>>button[iconCls=view-source]' },

        function(next, result) {
            t.selectorNotExists('.line.highlighted', 'No line was highlighted');
            next();
        },

        { action : 'click', target : 'testgrid => .x-grid-row' },

        function(next, result) {
            t.selectorNotExists('.line.highlighted', 'No line was highlighted');
            t.selectorExists('.siesta-assertion-grid .x-grid-row', 'Found rows when switching back to first test');
        }
    );
});
