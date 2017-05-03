$(document).scroll(function(){
	$y = $(document).scrollTop();	
    
		if ($y >= 800) {
			$("#up").fadeIn();
		}

		else {
			$("#up").fadeOut();
		}
    
});
    
    $(document).ready(function() {
    
    $("#up").click(function() {
        $('html, body').animate({scrollTop: $("#test").offset().top}, 900);
        return false;
    });
    
    
    

});