// GSAP liscensed under GSAP's: "Standard 'No Charge' GreenSock License"
const 	element = document.querySelector('.landingInfo'),
        parent  = element.parentElement;

	function move(e){
        if (window.matchMedia("(min-width: 700px)").matches) {
            var moveX = (e.pageX * -1 / 1);
            var moveY = (e.pageY * -1 / 10);

            element.style.transform = "translateX(" + moveX + 'px) ' + "translateY(" + + moveY + "%)";

            }else{
                element.style.transform = "translateX(-50%) translateY(-50%)";
            }
    }
    parent.onmousemove = move;

    var waypoint = new Waypoint({
    element: document.querySelector('.mainHeader'),
    handler: function(direction) {
        element.style.transform = "translateX(-50%) translateY(-50%)";
    }
  })
    