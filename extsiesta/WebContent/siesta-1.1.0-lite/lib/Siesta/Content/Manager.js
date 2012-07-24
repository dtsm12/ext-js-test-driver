/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
Class('Siesta.Content.Manager', {
    
    has : {
        disabled        : false,
        
        presets         : {
            require     : true
        },
        
        urls            : Joose.I.Object
    },
    
    
    methods : {
        
        cache : function (callback, errback, ignoreErrors) {
            if (this.disabled) {
                callback && callback()
                
                return
            }
            
            var urls    = this.urls
            var me      = this
            
            Joose.A.each(this.presets, function (preset) {
                
                preset.eachResource(function (resource) {
                    
                    if (resource.url) urls[ resource.url ] = null
                })
            })
            
            var loadCount   = 0
            var errorCount  = 0
            
            var total       = 0
            Joose.O.each(urls, function () { total++ })
            
            if (total) 
                Joose.O.each(urls, function (value, url) {
                    
                    me.load(url, function (content) {
                        if (errorCount) return
                        
                        urls[ url ] = content
                        
                        if (++loadCount == total) callback && callback()
                    
                    }, ignoreErrors ? function () {
                        
                        if (++loadCount == total) callback && callback()
                        
                    } : function () {
                        errorCount++
                        
                        errback && errback(url)
                    })
                })
            else
                callback && callback()
        },
        
        
        load : function (url, callback, errback) {
            throw "abstract method `load` called"
        },
        
        
        hasContentOf : function (url) {
            if (url instanceof Siesta.Content.Resource) url = url.url
            
            return typeof this.urls[ url ] == 'string'
        },
        
        
        getContentOf : function (url) {
            if (url instanceof Siesta.Content.Resource) url = url.url
            
            return this.urls[ url ]
        }
    }
})

