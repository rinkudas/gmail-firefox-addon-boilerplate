# gmail-firefox-addon-boilerplate
**Prerequisites:**
* [Python](http://www.python.org/) 2.5, 2.6 or 2.7.
* Firefox.
* Firefox addon-sdk. Obtain the latest stable version of the SDK as a [tarball](https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.tar.gz) or a [zip file](https://ftp.mozilla.org/pub/mozilla.org/labs/jetpack/jetpack-sdk-latest.zip).

**Installation of addon-sdk:**

Installation on OS X, FreeBSD, Linux. For other options visit [firefox addon-sdk installation.](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation)

Extract the file contents, and go to the root directory of the SDK with a shell/command prompt. 
For example:
```
1. tar -xf addon-sdk.tar.gz
2. cd addon-sdk
```
Then, if you're a Bash user, run:

```1. source bin/activate``` 

or If you're a non-Bash user, you should run: 

```1. bash bin/activate```

You can see a command prompt similar to the following:

```1. (addon-sdk)~/your-folder-path/addon-sdk >```

Run the following command at prompt:

```1. cfx```

If everything is ok it should produce output something like the below line, followed by many lines of usage information:

```1. Usage: cfx [options] [command]```

**Using this project:**

Now you can clone this repository using ```git clone``` command. Then ```cd``` to the project folder.

You can test this boilerplate in following two ways:
```
1. Within the project folder run cfx run. It runs a new instance of Firefox with the add-on installed, so we can try it out. Or
2. We can package it as an XPI file. This is the installable file format for Firefox add-ons. To build an XPI, execute the command cfx xpi from the project's directory. Then to install it by selecting the "Open" item from Firefox's "File" menu. This will bring up a file selection dialog; navigate to the "xxxx.xpi" file, open it and follow the prompts to install the add-on.
3. Open your gmail account.
4. Run these commands from developer console: var gmail = new Gmail(); gmail.get.user_email();
5. You can see your email-id as the output.
```
However if you wish to start from an empty project, follow this [Getting started](https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started) tutorial.

For details on apis used, see [High-Level APIs] (https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs)
