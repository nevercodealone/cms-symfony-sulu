/**
 * ------------------------------------------------------------------------
 * resizeImage Plugin
 * ------------------------------------------------------------------------
 * Copyright (C) 2012-2013 SUNLAND Co., JSC. All Rights Reserved.
 * license - GNU/GPL, http://www.gnu.org/licenses/gpl.html
 * Author: Sonle
 * Email: sonlv@templaza.com
 * Websites: http://www.templaza.com
 * ------------------------------------------------------------------------
 */


var resizeImage = function (widthImage, heightImage, widthStage, heightStage) {
    var escImageX = widthStage / widthImage;
    var escImageY = heightStage / heightImage;

    var escalaImage = (escImageX > escImageY) ? escImageX : escImageY;

    var widthV = widthImage * escalaImage;
    var heightV = heightImage * escalaImage;
    var posImageY = 0;
    var posImageX = 0;

    if (heightV > heightStage) {
        posImageY = (heightStage - heightV) / 2;
    };

    if (widthV > widthStage) {
        posImageX = (widthStage - widthV) / 2;
    };

    return { top: posImageY, left: posImageX, width: widthV, height: heightV };
};
