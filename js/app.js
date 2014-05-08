function newTab( selected, expanded ) {
  var sel = "";
  if (selected) sel = "selected";
  var small = "small";
  if (expanded) small = ""
  return $('<div class="tab '+small+' '+sel+'">'+newTabContent()+'</div>');
}

function newTabContent() {
  return '<span class="caption">New Tab</span><div class="close"></div>';
}

function newSmallTab() {
  return $('<div class="tab small"><span class="caption">+</span></div>');
}

function openTabAtLastPosition(e) {
  $(e.currentTarget).closest('.window').find('.selected').removeClass('selected');
  $(e.currentTarget).html(newTabContent()).removeClass('plus');

  // animate tab size
  _.delay(function(){
    $(e.currentTarget).removeClass('small plus').addClass('selected');
  }, 25);

  // create new plus tab
  var nt = newSmallTab();
  $(e.currentTarget).after(nt);
  _.delay(function() {
    nt.addClass('plus');
  }, 25);
}


$(document).ready(function() {
  $('.plus:not(#almost-overflow)').click(openTabAtLastPosition);
});





