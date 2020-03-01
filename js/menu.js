( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button"style="padding:0;top:0px;"><center><a href=index.html><img src="img/index/LiSlogo.png" height="40px"></a></center></div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
