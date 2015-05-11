// ==UserScript==
// @name       Canary UI
// @version    1.0.0
// @description  Canary UI
// @copyright  2015, Jose Benedicto de Jesus
// @grant unsafeWindow
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==


var enableCanary = function(canaryId) {
  document.cookie = "_canary="+canaryId+"$;path=/;";

  if (document.cookie.indexOf(canaryId) >= 0) {
    location.reload();
  } else {
    alert("'Doh!");
  }
};

var disableCanary = function(){
  document.cookie = "_canary=nil; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  setTimeout(location.reload(), 1000);
};

var initCanaryUi = function() {
  var btnToggle = "<button id='btn-toggle-canary-ui' class='btn-alt btn-xs'>Canary</button>"
  var inputCanaryId = "<input id='canaryId' type='text' required='true' class='input-xs' />"
  var btnEnable = "<button id='btn-enable-canary' style='margin:0 5px;' class='button btn-primary btn-xs'>Enable</button>";
  var btnDisable = "<button id='btn-disable-canary' style='margin:0;' class='button btn-default btn-xs'>Disable</button>";

  var canaryUi = $("<div id='canary-ui'>" + btnToggle + "<form id='canary-ui-form'>" + inputCanaryId + btnEnable + btnDisable + "</form></div>");
  var canaryUiForm = canaryUi.find('form');
  var canaryUiToggle = canaryUi.find('#btn-toggle-canary-ui');

  canaryUiToggle.css({
    'color'   : '#fff',
    'border'  : 'none',
    'display' : 'block',
    'background-color': 'rgba(0,0,0,0.75)'
  });

  canaryUi.css({
    'display' : 'block',
    'position': 'fixed',
    'padding' : '5px 10px',
    'left'    : '0',
    'right'   : '0',
    'bottom'  : '0px',

  });

  canaryUiForm.css({
    'display': 'none',
    'background-color': 'rgba(0,0,0,0.75)',
    'padding' : '5px 10px'
  })

  canaryUiToggle.on('click', function(){
    canaryUiForm.toggle();
  });

  canaryUi.find('#btn-enable-canary').on('click', function(e){
    enableCanary(jQuery('input#canaryId').val());
    e.preventDefault();
  });

  canaryUi.find('#btn-disable-canary').on('click', function(){
    disableCanary();
  });

  jQuery('body').append(canaryUi);
};

jQuery(document).ready(function(){
  initCanaryUi();
});
