var enableCanary = function(canaryId) {
  document.cookie = "_canary="+canaryId+";";
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
  jQuery('html').css({
    'height': 'auto',
    'margin-bottom': '60px'
  });

  var inputCanaryId = "<input id='canaryId' type='text' required='true' class='input-xs' />"
  var btnEnable = "<button id='btn-enable-canary' style='margin:0 5px;' class='button btn-primary btn-xs'>Enable</button>";
  var btnDisable = "<button id='btn-disable-canary' style='margin:0;' class='button btn-default btn-xs'>Disable</button>";

  var canary_ui = jQuery("<div id='canary-ui'><form>" + inputCanaryId + btnEnable + btnDisable + "</form></div>");
  canary_ui.css({
    'position': 'fixed',
    'padding' : '5px 10px',
    'left'    : '0',
    'right'   : '0',
    'bottom'  : '0',
    'background-color': 'rgba(0,0,0,0.75)'
  });

  canary_ui.find('#btn-enable-canary').on('click', function(e){
    enableCanary(jQuery('input#canaryId').val());
    e.preventDefault();
  });

  canary_ui.find('#btn-disable-canary').on('click', function(){
    disableCanary();
  });

  jQuery('body').append(canary_ui);
};

jQuery(document).ready(function(){
  initCanaryUi();
});
