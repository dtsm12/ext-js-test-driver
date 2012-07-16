ExtAsynchTest = new AsyncTestCase('ExtAsynchTest');

ExtAsynchTest.prototype.testAppExists = function(queue) {

	queue.call('Ext ready', function(callbacks) {
		var onReadyCallBack = callbacks.add(function() {alert('test 1');Ext.onReady(function() {assertTrue(HelloExtRef);});});
		Ext.onReady(onReadyCallBack);
	});

	alert('test step 1 ready');

	queue.call('HelloExtRef exists', function() {alert('test 2'); assertTrue(HelloExtRef);});
};