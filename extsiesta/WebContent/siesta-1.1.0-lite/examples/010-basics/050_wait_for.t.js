StartTest(function(t) {
    //==================================================
    t.diag('Some simple waitFor tests, check the docs to learn how to wait for different conditions')

    t.waitForSelector('.some-css-class', function() { 
        
        t.waitForSelectorNotFound('.some-css-class', function() { 
            // Do some cool stuff 
        });

        setTimeout(function() { document.body.className = ''; }, 3000);
    });

    setTimeout(function() { document.body.className = 'some-css-class'; }, 3000);

//    t.diag('Waiting for user (you) to move the mouse in the test frame area');
//
//    // Or as a step in a chain 
//    t.chain(
//        { waitFor : 'event', args : [document, 'mousemove'] }
//    );
});