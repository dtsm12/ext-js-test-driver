/*

Siesta 1.1.0
Copyright(c) 2009-2012 Bryntum AB
http://bryntum.com/contact
http://bryntum.com/products/siesta/license

*/
// consuming harness need to use `sequential` run core

Role('Siesta.Role.ConsoleReporter', {
    
    requires    : [ 'log', 'exit', 'allPassed' ],
    
    
    does        : Siesta.Role.CanStyleOutput,
    
    
    after : {
        
        onTestSuiteStart : function () {
        },
        
        
        onTestSuiteEnd : function () {
            this.log(this.getSummaryMessage())
            
            this.exit(this.getExitCode())
        },
        
        
        onTestEnd : function (test) {
            this.log('[' + (test.isPassed() ? this.style().green('PASS') : this.style().red('FAIL')) + ']  ' + test.url) 
        },
        
        
        onTestFail : function (test, exception, stack) {
            var text = stack ? stack.join('\n') : exception + ''
                
            this.log(this.style().bold(this.style().red(text)))
        },
        
        
        onTestUpdate : function (test, result) {
            var text            = result + ''
            var needToShow      = this.verbosity > 0
            
            if ((result instanceof Siesta.Result.Assertion) || result.meta.name == 'Siesta.Result.Assertion') {
                if (result.isWaitFor && !result.completed) return;

                if (result.isTodo) {
                    text = this.styled(text, result.passed ? 'magenta' : 'yellow')
                    
                    if (result.passed) needToShow = true
                    
                } else {
                    text = this.styled(text, result.passed ? 'green' : 'red')
                    
                    if (!result.passed) needToShow = true
                }
            }
            
            if (result instanceof Siesta.Result.Diagnostic) text = this.styled(text, 'bold')
            
            if (needToShow) this.log(text)
        }            
    },
    
    
    methods : {
        
        getSummaryMessage : function (lineBreaks) {
            var allPassed = this.allPassed()
            
            return allPassed ? this.style().bold(this.style().green('All tests passed')) : this.style().bold(this.style().red('There are failures'))
        },
        
        
        getExitCode : function () {
            return this.allPassed() ? 0 : 1
        }
    }
    
})


