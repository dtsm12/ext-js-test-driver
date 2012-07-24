Ext.data.JsonP.Siesta_Test_ExtJS_Store({"tagname":"class","name":"Siesta.Test.ExtJS.Store","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Siesta.Test.ExtJS.Store","members":{"cfg":[],"property":[],"method":[{"name":"isStoreEmpty","tagname":"method","owner":"Siesta.Test.ExtJS.Store","meta":{},"id":"method-isStoreEmpty"},{"name":"loadStoresAndThen","tagname":"method","owner":"Siesta.Test.ExtJS.Store","meta":{},"id":"method-loadStoresAndThen"},{"name":"waitForStoresToLoad","tagname":"method","owner":"Siesta.Test.ExtJS.Store","meta":{},"id":"method-waitForStoresToLoad"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Store.js","href":"Store.html#Siesta-Test-ExtJS-Store"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test.ExtJS","Siesta.Test.SenchaTouch"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test.ExtJS' rel='Siesta.Test.ExtJS' class='docClass'>Siesta.Test.ExtJS</a></div><div class='dependency'><a href='#!/api/Siesta.Test.SenchaTouch' rel='Siesta.Test.SenchaTouch' class='docClass'>Siesta.Test.SenchaTouch</a></div><h4>Files</h4><div class='dependency'><a href='source/Store.html#Siesta-Test-ExtJS-Store' target='_blank'>Store.js</a></div></pre><div class='doc-contents'><p>This is a mixin, with helper methods for testing functionality relating to Ext.data.Store class. This mixin is being consumed by <a href=\"#!/api/Siesta.Test.ExtJS\" rel=\"Siesta.Test.ExtJS\" class=\"docClass\">Siesta.Test.ExtJS</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-isStoreEmpty' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Store'>Siesta.Test.ExtJS.Store</span><br/><a href='source/Store.html#Siesta-Test-ExtJS-Store-method-isStoreEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Store-method-isStoreEmpty' class='name expandable'>isStoreEmpty</a>( <span class='pre'>Ext.data.AbstractStore store, String description</span> )</div><div class='description'><div class='short'>Passes if the passed store has no data. ...</div><div class='long'><p>Passes if the passed store has no data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore<div class='sub-desc'>\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>The description of the assertion</p>\n</div></li></ul></div></div></div><div id='method-loadStoresAndThen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Store'>Siesta.Test.ExtJS.Store</span><br/><a href='source/Store.html#Siesta-Test-ExtJS-Store-method-loadStoresAndThen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Store-method-loadStoresAndThen' class='name expandable'>loadStoresAndThen</a>( <span class='pre'>Ext.data.AbstractStore store1, Ext.data.AbstractStore store2, Ext.data.AbstractStore storeN, Function callback</span> )</div><div class='description'><div class='short'>This method is a wrapper around waitForStoresToLoad method - it waits for the provided stores to fire the \"load\" event. ...</div><div class='long'><p>This method is a wrapper around <a href=\"#!/api/Siesta.Test.ExtJS.Store-method-waitForStoresToLoad\" rel=\"Siesta.Test.ExtJS.Store-method-waitForStoresToLoad\" class=\"docClass\">waitForStoresToLoad</a> method - it waits for the provided stores to fire the \"load\" event.\nIn addition to <a href=\"#!/api/Siesta.Test.ExtJS.Store-method-waitForStoresToLoad\" rel=\"Siesta.Test.ExtJS.Store-method-waitForStoresToLoad\" class=\"docClass\">waitForStoresToLoad</a> this method also calls the <code>load</code> method of each passed store.</p>\n\n<p>This method accepts either variable number of arguments:</p>\n\n<pre><code> t.loadStoresAndThen(store1, store2, function () { ... })\n</code></pre>\n\n<p>or array of stores:</p>\n\n<pre><code> t.loadStoresAndThen([ store1, store2 ], function () { ... })\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store1</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>store2</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>storeN</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>A function to call when the condition has been met.</p>\n</div></li></ul></div></div></div><div id='method-waitForStoresToLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.ExtJS.Store'>Siesta.Test.ExtJS.Store</span><br/><a href='source/Store.html#Siesta-Test-ExtJS-Store-method-waitForStoresToLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.ExtJS.Store-method-waitForStoresToLoad' class='name expandable'>waitForStoresToLoad</a>( <span class='pre'>Ext.data.AbstractStore store1, Ext.data.AbstractStore store2, Ext.data.AbstractStore storeN, Function callback</span> )</div><div class='description'><div class='short'>Waits until all the passed stores have been loaded (fires the \"load\" event) and calls the provided callback. ...</div><div class='long'><p>Waits until all the passed stores have been loaded (fires the \"load\" event) and calls the provided callback.</p>\n\n<p>This method accepts either variable number of arguments:</p>\n\n<pre><code> t.waitForStoresToLoad(store1, store2, function () { ... })\n</code></pre>\n\n<p>or array of stores:</p>\n\n<pre><code> t.waitForStoresToLoad([ store1, store2 ], function () { ... })\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store1</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>store2</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>storeN</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to load.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>A function to call when the condition has been met.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});