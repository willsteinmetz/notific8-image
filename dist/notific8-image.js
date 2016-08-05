'use strict';

/**
 * @author Will Steinmetz
 * Image module for the notific8 notification plug-in
 * Copyright (c)2013-2016, Will Steinmetz
 * Licensed under the BSD license.
 * http://opensource.org/licenses/BSD-3-Clause
 */

(function (window) {
  var buildClasses,
      buildHtml,
      hasImage,
      imageCallback,
      notific8Data = null;

  /**
   * Check whether or not a valid image is set for this notification
   * @return boolean
   */
  hasImage = function hasImage() {
    return notific8Data.settings.image !== null && typeof notific8Data.settings.image === 'string';
  };

  /**
   * Build the HTML for the image
   * @return string
   */
  buildHtml = function buildHtml() {
    if (hasImage()) {
      return '<div class="' + notific8Data.settings.namespace + '-image">        <img src="' + notific8Data.settings.image + '" alt="notification">      </div>';
    }

    return '';
  };

  /**
   * Build the array of classes that need to be attached to the notification
   * @return array
   */
  buildClasses = function buildClasses() {
    if (hasImage()) {
      return ['has-image'];
    }

    return [];
  };

  /**
   * Setup the callback for the notification
   * @return object
   */
  imageCallback = function imageCallback(data) {
    notific8Data = data;
    return {
      classes: buildClasses(),
      html: buildHtml()
    };
  };

  window.notific8('registerModule', 'image', 'beforeContent', {
    image: false
  }, imageCallback);
})(window);
//# sourceMappingURL=notific8-image.js.map
