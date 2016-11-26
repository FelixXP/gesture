document.addEventListener('gest', function(gesture) {
    //handle gesture .direction .up .down .left .right .error
    if (gesture.left) {
    	console.log("left")
    }
}, false);

gest.start();

