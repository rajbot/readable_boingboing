// ==UserScript==
// @name           Readable Boing Boing
// @version        1.1
// @author         rajbot
// @description    Improve readability of boingboing.net by increasing the width of the Posts column and decreasing the width of the Features column.
// @grant          GM_addStyle
// @include        http://boingboing.net/
// ==/UserScript==

// This script was generated programatically by chromeext_to_greasemonkey.py

(function() {
    GM_addStyle('@media screen and (min-width:1020px) {    #posts-loop.home {        max-width: 620px !important;    }    #features-loop {        max-width: 320px !important;    }}@media screen and (min-width:728px) and (max-width:1020px) {    #posts-loop.home {        width: 60% !important;        max-width: 620px !important;    }    #features-loop.home {        width: calc(35% - 20px) !important;    }}#ad_leaderboard {    display: none !important;}');

})();
