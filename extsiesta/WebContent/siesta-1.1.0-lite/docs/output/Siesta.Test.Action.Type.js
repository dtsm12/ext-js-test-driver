Ext.data.JsonP.Siesta_Test_Action_Type({"tagname":"class","name":"Siesta.Test.Action.Type","extends":"Siesta.Test.Action","mixins":["Siesta.Test.Action.Role.HasTarget"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-Siesta.Test.Action.Type","members":{"cfg":[{"name":"el","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","meta":{},"id":"cfg-el"},{"name":"passTargetToNext","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","meta":{},"id":"cfg-passTargetToNext"},{"name":"target","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","meta":{},"id":"cfg-target"},{"name":"text","tagname":"cfg","owner":"Siesta.Test.Action.Type","meta":{},"id":"cfg-text"}],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Type.js","href":"Type.html#Siesta-Test-Action-Type"}],"html_meta":{},"component":false,"superclasses":["Siesta.Test.Action"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='docClass'>Siesta.Test.Action</a><div class='subclass '><strong>Siesta.Test.Action.Type</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='docClass'>Siesta.Test.Action.Role.HasTarget</a></div><h4>Files</h4><div class='dependency'><a href='source/Type.html#Siesta-Test-Action-Type' target='_blank'>Type.js</a></div></pre><div class='doc-contents'><p>This action will <a href=\"#!/api/Siesta.Test.Browser-method-type\" rel=\"Siesta.Test.Browser-method-type\" class=\"docClass\">type</a> provided <a href=\"#!/api/Siesta.Test.Action.Type-cfg-text\" rel=\"Siesta.Test.Action.Type-cfg-text\" class=\"docClass\">text</a> in the provided <a href=\"#!/api/Siesta.Test.Action.Type-cfg-target\" rel=\"Siesta.Test.Action.Type-cfg-target\" class=\"docClass\">target</a>.\nTarget can be a DOM element or, in case you are using the <a href=\"#!/api/Siesta.Test.ExtJS\" rel=\"Siesta.Test.ExtJS\" class=\"docClass\">Siesta.Test.ExtJS</a> class - an instance of Ext.Component (field component for example).</p>\n\n<p>This action can be included in the <code>t.chain</code> call with \"type\" shortcut:</p>\n\n<pre><code>t.chain(\n    {\n        action      : 'type',\n        target      : someDOMElement,\n        text        : 'Some text'\n    }\n)\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-el' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-el' class='name not-expandable'>el</a><span> : Object</span></div><div class='description'><div class='short'><p>An alias for <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target\" rel=\"Siesta.Test.Action.Role.HasTarget-cfg-target\" class=\"docClass\">target</a></p>\n</div><div class='long'><p>An alias for <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target\" rel=\"Siesta.Test.Action.Role.HasTarget-cfg-target\" class=\"docClass\">target</a></p>\n</div></div></div><div id='cfg-passTargetToNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-passTargetToNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-passTargetToNext' class='name expandable'>passTargetToNext</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether to pass ...</div><div class='long'><p>Whether to pass</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-target' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target' class='name expandable'>target</a><span> : <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a>/Function</span></div><div class='description'><div class='short'>A target for action. ...</div><div class='long'><p>A target for action. See <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a> for various values that can be provided.</p>\n\n<p><strong>Important.</strong> If the function is provided for this config, it will be called and returning value used as actual target.\nThis is useful, since sometimes target for the action depends from the previous step and\nis not yet available during <code>t.chain</code> call.</p>\n\n<p>For example, you want to click on the button which opens a window and then click on something in the window. Compare:</p>\n\n<pre><code>t.chain(\n    // clicking on button opens the window\n    {\n        action      : 'click',\n        target      : buttonComp        \n    },\n    // FRAGILE: `windowComp` could not be rendered yet - `buttonComp` is not yet clicked!\n    {\n        action      : 'click',\n        target      : windowComp.el.down('.clickArea')  \n    }\n\n    // MORE ROBUST: taking the \"el\" right before this action starts\n    {\n        action      : 'click',\n        target      : function () {\n            return windowComp.el.down('.clickArea')\n        } \n    }\n)\n</code></pre>\n\n<p>Target will be available in the next step as the 2nd argument. See <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget\" rel=\"Siesta.Test.Action.Role.HasTarget\" class=\"docClass\">Siesta.Test.Action.Role.HasTarget</a></p>\n\n<p>This config option can also be provided as \"el\"</p>\n</div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.Type'>Siesta.Test.Action.Type</span><br/><a href='source/Type.html#Siesta-Test-Action-Type-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Type-cfg-text' class='name expandable'>text</a><span> : String</span></div><div class='description'><div class='short'>The text to type into the target ...</div><div class='long'><p>The text to type into the target</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div></div></div></div></div>"});