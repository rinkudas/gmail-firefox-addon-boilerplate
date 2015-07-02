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

Your can see a ommand prompt similar to the following:

```1. (addon-sdk)~/mozilla/addon-sdk >```

Run the following command at prompt:

```1. cfx```

If everything is ok it should produce output something like the below line, followed by many lines of usage information:

```1. Usage: cfx [options] [command]```


