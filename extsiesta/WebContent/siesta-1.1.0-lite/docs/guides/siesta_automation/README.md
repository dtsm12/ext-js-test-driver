Intro
---------

Running the test suite manually in browsers is very convenient as it allows you to easily debug your tests. However, when
setting up a continuous integration process, it quickly becomes time-consuming - ideally you should to run the test suite
in each and every browser after (or before) each and every commit.

This guide describes how you can automate the launching of a Siesta test suite.

**Please note:** This functionality is only available in the Siesta Standard package.  


Running tests in PhantomJS
---------

Using PhantomJS allows you to run your tests in a headless Webkit browser. It's very suitable for Linux servers w/o any graphical interface or browsers installed. 

{@img images/phantomjs.png}

To launch the test suite in PhantomJS, run the following command.

On MacOS and Linux:

    > __SIESTA__/bin/phantomjs http://yourproject/tests/index.html [OPTIONS]
    
On Windows:

    > __SIESTA__\bin\phantomjs http://yourproject/tests/index.html [OPTIONS]
    
Here, the `__SIESTA__` placeholder is the path to your siesta package. The launch script `bin/phantomjs` accepts 2 arguments - the URL to your html wrapper for the Siesta harness (`index.html`)
and an several optional options.

All options should start with double minus, e.g: `--host 8081`:

- `help` - prints help message with all available options
- `filter regexp`      - a regexp to filter the urls of tests. When provided, only the tests with urls matching this filter be executed.
- `verbose` - will include the information about every individual assertions to the output. By default, only failed assertions will be shown
- `report-format` - the format of the report, see the "Reporting the results of a test suite execution in a structured format" section below
- `report-file` - the file to save the report to
    
In case of any failures in the test suite, the command will exit with a non-zero exit code.


Running tests in several browsers using Selenium WebDriver
---------

This is a recommended way of using Siesta with Selenium, as we found that WebDriver is much more stable part of the Selenium project than Selenium RC.

**Important**. Using the WebDriver requires some manual configuration step for IE and Safari. Please refer to these pages <http://code.google.com/p/selenium/wiki/InternetExplorerDriver> and
<http://code.google.com/p/selenium/wiki/SafariDriver>.

**Known issue** Chrome driver crashes on Windows right after test suite completion.  

You can automate the launching of your test suite in several browsers, using Selenium WebDriver. Unlike PhantomJS, it requires the presence of actual browsers in the operation system.  

On MacOS and Linux:

    > __SIESTA__/bin/webdriver http://yourproject/tests/index.html [OPTIONS]
    
On Windows:

    > __SIESTA__\bin\webdriver http://yourproject/tests/index.html [OPTIONS]
    
Here, the `__SIESTA__` placeholder is the path to your Siesta package. The launcher script `bin/webdriver` accepts the URL to your html wrapper for the Siesta harness (`index.html`)
and several optional options.

All options should start with double minus, e.g: `--browser chrome`:

- `help` - prints help message with all available options
- `browser browsername` - can be one of "firefox / chrome / ie / safari"'. This option can be repeated several times. Default value is `*`, meaning all available browsers.
- `filter regexp`      - a regexp to filter the urls of tests. When provided, only the tests with urls matching this filter be executed
- `verbose` - will include the information about every individual assertions to the output. By default, only failed assertions will be shown
- `debug` - will enable various debugging messages
- `report-format` - the format of the report, see the "Reporting the results of a test suite execution in a structured format" section below
- `report-file-prefix` - the prefix for file to save the report to

In case of any failures in the test suite the command will exit with non-zero exit code.



Running tests in several browsers using Selenium RC
---------

**Warning** This Selenium RC is considered to be an obsolete part of the Selenium project. You are recommended to use webdriver launcher instead. 

You can automate the launching of your test suite in several browsers, using Selenium RC. Unlike PhantomJS, it requires the presence of actual browsers in the operation system.  

On MacOS and Linux:

    > __SIESTA__/bin/selenium http://yourproject/tests/index.html [OPTIONS]
    
On Windows:

    > __SIESTA__\bin\selenium http://yourproject/tests/index.html [OPTIONS]
    
Here, the `__SIESTA__` placeholder is the path to your Siesta package. The launch script `bin/selenium` accepts the URL to your html wrapper for the Siesta harness (`index.html`)
and several optional options.

All options should start with double minus, e.g: `--host 8081`:

- `help` - prints help message with all available options
- `browser browsername` - can be one of "firefoxproxy / googlechrome / iexploreproxy / safariproxy / opera"'. This option can be repeated several times. Default value is `*`, meaning all available browsers.
- `host localhost`           - host for the Selenium server.
- `port 4444`                - port for the Selenium server. If a server cannot be found on the specified host/port, this command will try to launch it. 
- `filter regexp`      - a text of regexp to filter the urls of tests. When provided, only the tests with urls matching this filter be executed.
- `verbose` - will include the information about every individual assertions to the output. By default, only failed assertions will be shown
- `debug` - will enable various debugging messages
- `report-format` - the format of the report, see the "Reporting the results of a test suite execution in a structured format" section below
- `report-file-prefix` - the prefix for file to save the report to

In case of any failures in the test suite the command will exit with non-zero exit code.


Running a distributed test suite using Selenium RC Grid
---------

You can also distribute the machines running your test suite across your network, using Selenium Grid. This will greatly speed up the tests execution. You will need to:

1. Launch the Selenium Hub - central point managing all nodes.

2. Launch several Selenium RC nodes (possibly on different machines) and register them in the hub.

3. Use the same `bin/selenium` command to launch your test suite, specifying the `host` and `port` of the Hub.

Please refer to this manual for further instructions: <http://code.google.com/p/selenium/wiki/Grid2>


Reporting the results of a test suite execution in a structured format.
---------

You can easily export the results of a test suite execution in the structured format. To do that, provide the `--report-format` option to the PhantomJS or Selenium launcher.
When providing this option for phantomjs you also need to provide the `--report-file` option, indicating the filename of the report to be written.

Currently the only supported formats are "JSON" and "JUnit". Using the JSON option looks like this:

	C:\siesta\phantomjs http://localhost/YourApplication/tests --report-format JSON --report-file foo.json

And this will generate a file named foo.json containing the following JSON structure:

    {
        "testSuiteName": "Siesta self-hosting test suite",
        "startDate": 1328175530085,
        "endDate": 1328175531472,
        "status": "PASS",
        "testCases": [{
            "url": "010_sanity.t.js",
            "startDate": 1328175531445,
            "endDate": 1328175531452,
            "status": "PASS",
            "assertions": [{
                "status": "PASS",
                "description": "Siesta is here",
                "annotation": "",
                "isTodo": false
            }, {
                "status": "PASS",
                "description": "Siesta.Test is here",
                "annotation": "",
                "isTodo": false
            }, {
                "status": "PASS",
                "description": "Siesta.Harness is here",
                "annotation": "",
                "isTodo": false
            }]
        }]
    }

Using the JUnit report option looks like this:

	C:\siesta\phantomjs http://localhost/YourApplication/tests --report-format JUnit --report-file foo.xml

This will generate a file named foo.xml containing the following JUnit XML structure:

	<testsuite errors="0" failures="1" hostname="localhost:8085" name="Ext Scheduler Test Suite" tests="2" time="3.594" timestamp="2012-06-06T08:55:21.520">
		
		<testcase classname="Bryntum.Test" name="lifecycle/040_schedulergrid.t.js" time="1.238">
			<failure message="Oops" type="FAIL"></failure>
		</testcase>

		<testcase classname="Bryntum.Test" name="lifecycle/042_schedulergrid_right_columns.t.js" time="0.818"></testcase>
	</testsuite>

When providing this option for Selenium you will also need to provide the `--report-file-prefix` option. It has slightly different meaning from PhantomJS, since the Selenium launcher can run the
test suite in several browsers, effectively generating several reports. These reports will be saved into different files, and the first part of the filename will be specified with the `report-file-prefix`
option, and the browser name will also be included in the filename. The value for this option may have an extension, which will be preserved.

For example, specifying: `--report-file-prefix=report_.json` will save the reports to: `report_firefoxproxy.json`, `report_iexploreproxy.json`, etc.
 

Buy this product
---------

Visit our store: <http://bryntum.com/store/siesta>

Support
---------

Ask a question in our community forum: <http://www.bryntum.com/forum/viewforum.php?f=20>

Share your experience in our IRC channel: [#bryntum](http://webchat.freenode.net/?randomnick=1&channels=bryntum&prompt=1)

Please report any bugs through the web interface at <https://www.assembla.com/spaces/bryntum/support/tickets>


See also
---------

Web page of this product: <http://bryntum.com/products/siesta>

Other Bryntum products: <http://bryntum.com/products>


COPYRIGHT AND LICENSE
---------

Copyright (c) 2009-2012, Bryntum AB & Nickolay Platonov

All rights reserved.