$(document).ready(function() {
    
    // test if jquery works
    //alert("jquery ready!");
    
        
    // tinynav script
		$("#nav").tinyNav({
		  	active: 'selected', // String: Set the "active" class
		 	header: 'Navigation', // String: Specify text for "header" and show header instead of the active item
		 	label: '' // String: Sets the <label> text for the <select> (if not set, no label will be added)
		});
});