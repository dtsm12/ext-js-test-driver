StartTest(function(t) {
    t.diag('hasSize');
    
    var txt = new Ext.form.TextField({ height : 200, width : 200, renderTo : Ext.getBody() });

    t.expectPass(function (t) {
        t.hasSize(txt, 200, 200, 'hasSize OK');
    })
    
    t.expectFail(function (t) {
        t.hasSize(txt, 1, 200, 'hasSize fails OK');
        t.hasSize(txt, 200, 1, 'hasSize fails OK');
    });

    t.diag('hasPosition');

    var isIE67  = Ext.isIE6 || Ext.isIE7
    
    t.expectPass(function (t) {
        // Ext.Element.getXY() is not consistent for IE6/7
        t.hasPosition(txt, isIE67 ? 2 : 0, isIE67 ? 2 : 0, 'hasPosition OK');
    })
    
    t.expectFail(function (t) {
        t.hasSize(txt, 1, 0, 'hasPosition fails OK');
        t.hasSize(txt, 0, 1, 'hasPosition fails OK');
    });
    
    
//    var txt2 = new Ext.form.TextField({ height : 200, width : 200 });
//
//    var async   = t.beginAsync()
//    
//    t.expectFail(function (t) {
//        t.waitForTimeout = 100;
//    
//        t.waitForComponentVisible(txt2, function() {});
//    }, function () {
//        t.endAsync(async)
//    });

//    t.expectPass(function (t) {
//        t.defaultTimeout = 100;
//        var txt = new Ext.form.TextField();
//        t.waitForComponentVisible(txt, Ext.emptyFn);
//        txt.render(Ext.getBody());
//    });
});