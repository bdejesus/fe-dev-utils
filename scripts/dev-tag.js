// ==UserScript==
// @name       Localhost Testing
// @namespace  http://localhost:3000/*
// @version    0.1
// @description  enter something useful
// @match        http://localhost:3000/*
// @include      http://localhost:3001/*
// @copyright  2015+, Jose Benedicto de Jesus
// @grant unsafeWindow
// ==/UserScript==


jQuery(document).ready( function(){
  var tagHtml = jQuery("<div class='dev-tag'>DEVELOPMENT</div>");
  tagHtml.css({
      'position': 'fixed',
      'top': '25px',
      'right' : '-60px',
      'padding' : '5px 0',
      'width': '200px',
      'text-align': 'center',
      'font-size': '10px',
      'background' : '#f00',
      'color': '#fff',
      'pointer-events' : 'none',
      'z-index': '1000',
      'transform': 'rotate(45deg)'
  });

  jQuery('body').append(tagHtml);
});


