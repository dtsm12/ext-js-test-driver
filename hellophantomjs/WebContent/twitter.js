var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open(encodeURI("http://mobile.twitter.com/Sencha"), function (status) {
    if (status !== "success") {
        console.log("Unable to access network");
    } else {
        page.evaluate(function() {
            var list = document.querySelectorAll('.tweet-text');
            for (var i = 0; i < list.length; ++i) {
                console.log((i + 1) + ": " + list[i].innerHTML.replace(/<.*?>/g, ''));
            }
        });
    }
    phantom.exit();
});