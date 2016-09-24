# notific8-image

[![Build Status](https://travis-ci.org/willsteinmetz/notific8-image.svg?branch=master)](https://travis-ci.org/willsteinmetz/notific8-image)

Image module for the [notific8](https://github.com/ralivue/notific8) JavaScript plug-in. The module adds an image option to the configuration which takes the URL to an image to display in the notification.

## Install with Bower

    $ bower install notific8-image --save

## Install with NPM

    $ npm install notific8-image --save

## Demo page

An interactive demo page can be found in the root directory. It can be launched by running `npm start demo` after installing the node modules required for development.

## Browser support

Currently supported and testing:

* Chrome
* Firefox
* Safari (Mac only)
* IE 10+
* Edge

While not tested, this plug-in should work on Opera versions released after the rewrite on the Blink rendering engine.

### Browser version support

As a rule of thumb, only the most recent plus one version older of a browser is supported unless marked otherwise. While it may work in IE8 and IE9, notific8 will not be tested or officially supported in legacy browsers such as versions of IE older than 10.

## Styles

The styles are written in Scss format and available in the `src/sass` directory. Development will continue in Scss only - please do not open issues or pull requests to change the default style format.

## Contributing

When contributing, create a feature branch from `develop`. Ensure that all existing tests are still passing. If appropriate, be sure to write new tests. When a pull request is created, ensure that it is requested to go into `develop` and not `master`.

## License

The notific8 plug-in is released under the BSD license.

(c) 2013-2016 [Will Steinmetz](http://willsteinmetz.net)
