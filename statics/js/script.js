var button='<button class="close" type="button" title="Remove this page">×</button>';
var homeID = 1;

function resetTab(){
	var tabs=$("#tab-list li:not(:first)");
	var len=1
	$(tabs).each(function(k,v){
		len++;
		$(this).find('a').html('home ' + len + button);
	})
	homeID--;
}

$(document).ready(function() {
    $('#btn-add-tab').click(function() {
        homeID++;
        $('#tab-list').append($('<li><a href="#home' + homeID + '" role="tab" data-toggle="tab"><span> 	&#127968;' + homeID + '</span> <span class="glyphicon glyphicon-pencil text-muted edit"></span> <button class="close" type="button" title="Remove this page">×</button></a></li>'));
        $('#tab-content').append($('<div class="tab-pane fade" id="home' + homeID + '">section of home ' + homeID + ' <p><button id="btn-add-section" type="button" class="btn btn-primary pull-right">&#43 </button></p></div>'));
        $(".edit").click(editHandler);
    });
    
    $('#tab-list').on('click', '.close', function() {
        var homeID = $(this).parents('a').attr('href');
        $(this).parents('li').remove();
        $(homeID).remove();
    });

    var list = document.getElementById("tab-list");
});

var editHandler = function() {
  var t = $(this);
  t.css("visibility", "hidden");
  $(this).prev().attr("contenteditable", "true").focusout(function() {
    $(this).removeAttr("contenteditable").off("focusout");
    t.css("visibility", "visible");
  });
};