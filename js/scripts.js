$(document).ready(function() {
    
        
    // tinynav script
		$("#nav").tinyNav({
		  	active: 'selected', // String: Set the "active" class
		 	header: 'Navigation', // String: Specify text for "header" and show header instead of the active item
		 	label: '' // String: Sets the <label> text for the <select> (if not set, no label will be added)
		});
    
    // slideshow
	$(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 500,            // Integer: Speed of the transition, in milliseconds
		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		pager: true,           // Boolean: Show pager, true or false
		nav: false,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
  	});
    
});

 // google map
    function initialize() {
      var myLatlng = new google.maps.LatLng(53.349732,-6.259989);  
      google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(myLatlng);
    });
    var mapOptions = {
          zoom: 10,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Wooden World'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);