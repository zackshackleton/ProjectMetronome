$(document).ready(function(){
	var showDelay = 250;

	// Hide Everything Originally
	$('#tutorial').hide();
	$('#field').hide();
	$('#focal').hide();
	$('#time').hide();
	$('#loading').hide();
	$('#results').hide();

	function showTutorialTo() {
    	$('#tutorial').show();
    	$('#tutorial').addClass('animated fadeInLeft');
    	$('#tutorial').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#tutorial').removeClass('animated fadeInLeft');
    	});
    }

    function showMainTo() {
    	$('#main').show();
    	$('#main').addClass('animated fadeInRight');
    	$('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#main').removeClass('animated fadeInRight');
    	});
    }

    function showMainBack() {
    	$('#main').show();
    	$('#main').addClass('animated fadeInLeft');
    	$('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#main').removeClass('animated fadeInLeft');
    	});
    }

    function showMain() {
    	$('#main').show();
    	$('#main').addClass('animated fadeIn');
    	$('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#main').removeClass('animated fadeIn');
    	});
    }

    function showFieldTo() {
    	$('#field').show();
    	$('#field').addClass('animated fadeInRight');
    	$('#field').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#field').removeClass('animated fadeInRight');
    	});
    }

    function showFieldBack() {
    	$('#field').show();
    	$('#field').addClass('animated fadeInLeft');
    	$('#field').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#field').removeClass('animated fadeInLeft');
    	});
    }

    function showFocalTo() {
    	$('#focal').show();
    	$('#focal').addClass('animated fadeInRight');
    	$('#focal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#focal').removeClass('animated fadeInRight');
    	});
    }

    function showFocalBack() {
    	$('#focal').show();
    	$('#focal').addClass('animated fadeInLeft');
    	$('#focal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#focal').removeClass('animated fadeInLeft');
    	});
    }

    function showTimeTo() {
    	$('#time').show();
    	$('#time').addClass('animated fadeInRight');
    	$('#time').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#time').removeClass('animated fadeInRight');
    	});
    }

    function showTimeBack() {
    	$('#time').show();
    	$('#time').addClass('animated fadeInLeft');
    	$('#time').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#time').removeClass('animated fadeInLeft');
    	});
    }

    function showResultsTo() {
    	$('#results').show();
    	$('#results').addClass('animated fadeInRight');
    	$('#results').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#results').removeClass('animated fadeInRight');
    	});
    }

    function showLoading() {
    	$('#loading').show();
    	$('#loading').addClass('animated fadeInRight');
    	$('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    		$('#loading').removeClass('animated fadeInRight');
    	});
    }

    function hideLoading() {
    	$('#loading').addClass('animated fadeOutLeft');

	    $('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#loading').removeClass('animated fadeOutLeft');
	    	$('#loading').hide();
	    });
    }







	//Main <--> Tutorial
	$('#main-to-tutorial').click(function(){ 

	    $('#main').addClass('animated fadeOutRight');

	    $('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#main').removeClass('animated fadeOutRight');
	    	$('#main').hide();
	    });
	    setTimeout(showTutorialTo, showDelay);
	});

	$('#tutorial-back-main').click(function(){ 
	    $('#tutorial').addClass('animated fadeOutLeft');

	    $('#tutorial').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#tutorial').removeClass('animated fadeOutLeft');
	    	$('#tutorial').hide();
	    });
	    setTimeout(showMainTo, showDelay);
	}); 

	// Main <--> Field
	$('#main-to-field').click(function(){ 
	    $('#main').addClass('animated fadeOutLeft');

	    $('#main').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#main').removeClass('animated fadeOutLeft');
	    	$('#main').hide();
	    });  
	    setTimeout(showFieldTo, showDelay);
	});

	$('#field-back-main').click(function(){ 
	    $('#field').addClass('animated fadeOutRight');

	    $('#field').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#field').removeClass('animated fadeOutRight');
	    	$('#field').hide();
	    });
	    setTimeout(showMainBack, showDelay);
	}); 

	// Field <--> Focal
	$('#field-to-focal').click(function(){ 
	    $('#field').addClass('animated fadeOutLeft');

	    $('#field').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#field').removeClass('animated fadeOutLeft');
	    	$('#field').hide();
	    });
	    setTimeout(showFocalTo, showDelay);
	});

	$('#focal-back-field').click(function(){ 
	    $('#focal').addClass('animated fadeOutRight');

	    $('#focal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#focal').removeClass('animated fadeOutRight');
	    	$('#focal').hide();
	    });
	    setTimeout(showFieldBack, showDelay);
	}); 

	// Focal <--> Time
	$('#focal-to-time').click(function(){ 
	    $('#focal').addClass('animated fadeOutLeft');

	    $('#focal').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#focal').removeClass('animated fadeOutLeft');
	    	$('#focal').hide();
	    });
	    setTimeout(showTimeTo, showDelay);
	});

	$('#time-back-focal').click(function(){ 
	    $('#time').addClass('animated fadeOutRight');

	    $('#time').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#time').removeClass('animated fadeOutRight');
	    	$('#time').hide();
	    });
	    setTimeout(showFocalBack, showDelay);
	});

	// Time --> Results
	$('#time-to-results').click(function(){ 
	    $('#time').addClass('animated fadeOutLeft');

	    $('#time').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#time').removeClass('animated fadeOutLeft');
	    	$('#time').hide();
	    });

	    setTimeout(showLoading, showDelay);
	    setTimeout(hideLoading, 5000);
	    setTimeout(showResultsTo, 5000 + showDelay);
	});

	// Results --> Main
	$('#results-to-main').click(function(){ 
	    $('#results').addClass('animated fadeOut');

	    $('#results').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	    	$('#results').removeClass('animated fadeOut');
	    	$('#results').hide();
	    });
	    setTimeout(showMain, showDelay);
	});
});