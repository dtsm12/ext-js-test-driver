var Harness = Siesta.Harness.Browser.ExtJS

Harness.configure({
    title       : 'Siesta self-hosting test suite',
    
    testClass   : Class({
        
        isa     : Siesta.Test.ExtJS,
        
        does    : Siesta.Test.Self
    }),
    
    preload : [
        '../../extjs-4.1.0/resources/css/ext-all.css',
        '../../extjs-4.1.0/ext-all-debug.js',
        '../siesta-all.js',
        'lib/Siesta/Test/AssertionsTranslator.js',
        {
            // copy the feature test results from the harness
            text        : 'Siesta.supports = JSON.parse(JSON.stringify((window.opener || window.parent).Siesta.supports.results))'
        }
    ],
    
    overrideSetTimeout  : false
})


Harness.start(
    '010_sanity.t.js',
    '020_test.t.js',
    '021_assertions_1.t.js',
    '030_test_more.t.js',
    '031_test_more_chain.t.js',
    '040_keyevent_simulation.t.js',
    '041_keyevent_simulation2.t.js',
    '042_keyevent_simulation3.t.js',
    '043_special_keys.t.js',
    '044_text_selection.t.js',
    '201_function.t.js',
    {
        group               : 'Visual tests',
        
        items               : [
            '050_mouse_click.t.js',
            '050_mouse_click_jquery.t.js',
            '051_mouse_overout.t.js',
            '051_mouse_overout_with_span.t.js',
            '052_mouse_move.t.js',
            '060_element.t.js',
            '061_element_wait_for_selectors.t.js',
            '062_element_wait_for_event.t.js',
            {
                hostPageUrl : 'blank.html',
                url : '063_hashchange.t.js'
            },
            '070_chaining_with_actions.t.js',
            '071_chain_click.t.js',
            '072_chaining_arguments.t.js'
        ]
    },
    
    '100_util_queue.t.js',
    {
        url             : '110_util_serializer.t.js',
        // need to reach the "done" call, since in FF, serializing the `window.location` property
        // may cause a silent and undetectable exception
        needDone        : true
    },
    '120_util_xml_node.t.js',
    
    {
        group               : 'Ext JS 4 layer',
        
        items               : [
            '500_extjs_observable.t.js?Ext4',
            {
                url         : '501_extjs_combo_autocomplete.t.js?Ext4',
                speedRun    : false
            },
            '502_extjs_component.t.js?Ext4',
            '502_extjs_wait_for_cq.t.js?Ext4',
            '503_extjs_dataview.t.js?Ext4',
            '504_extjs_element.t.js?Ext4',
            '505_extjs_grid.t.js?Ext4',
            '506_extjs_observable.t.js?Ext4',
            '510_extjs_require_singleton.t.js?Ext4',
            '530_extjs_composite_query.t.js?Ext4',
            '540_extjs_type.t.js?Ext4',
            '550_extjs_store.t.js?Ext4'
        ]
    },

    {
        group               : 'Ext JS 3 layer',
        preload             : [
            "../../ext-3.4.0/resources/css/ext-all.css",
            "../../ext-3.4.0/adapter/ext/ext-base-debug.js",
            "../../ext-3.4.0/ext-all-debug.js",
            '../siesta-all.js',
            'lib/Siesta/Test/AssertionsTranslator.js',
            {
                // copy the feature test results from the harness
                text        : 'Siesta.supports = jQuery.extend({}, (window.opener || window.parent).Siesta.supports.results)'
            }
        ],
        
        items               : [
            '500_extjs_observable.t.js?Ext3',
            {
                url         : '501_extjs_combo_autocomplete.t.js?Ext3',
                speedRun    : false
            },
            '502_extjs_component.t.js?Ext3',
            '503_extjs_dataview.t.js?Ext3',
            '504_extjs_element.t.js?Ext3',
            '505_extjs_grid.t.js?Ext3',
            '506_extjs_observable.t.js?Ext3',
            '540_extjs_type.t.js?Ext3',
            '550_extjs_store.t.js?Ext3'
        ]
    },
    {
        group               : 'Siesta UI',
        preload             : [],        
        hostPageUrl         : '601_siesta_ui.html',
        items               : [
            '601_siesta_ui_line_number.t.js',
            '602_siesta_ui_recursive_self.t.js',
            '603_siesta_ui.t.js'
        ]
    },
    '300_iframe_events.t.js'
)



