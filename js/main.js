document.addEventListener('gest', function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    if (gesture.left) {
    	$("#current").html("left")
    	console.log("left")
    	$(".gest-left i").html($(".gest-left i").html()-0+1)
    }
    if (gesture.right) {
    	$("#current").html("right")
    	console.log("right")
    	$(".gest-right i").html($(".gest-right i").html()-0+1)
    }
    if (gesture.up) {
    	$("#current").html("right")
    	console.log("up");
    	$(".gest-up i").html($(".gest-up i").html()-0+1)
    }
    if (gesture.down) {
    	$("#current").html("right");
    	console.log("down");
    	$(".gest-down i").html($(".gest-down i").html()-0+1)
    }
}, false);

gest.start();

