

"use strict";

export const ripple = function($rippleElem){
    $rippleElem.addEventListener("pointerdown",function (e) {
        e.stopImmediatePropagation()


        const $ripple = document.createElement("div")
        $ripple.classList.add("ripple")

        this.appendChild($ripple)


        const removeRipple = () => {
            $ripple.animate({
                opacity:0
            },{
                fill:"forwards",
                duration:200
            })
            setTimeout(() => {
               $ripple.remove() 
            }, 1000);
        } 

        this.addEventListener("pointerup",removeRipple)
        this.addEventListener("pointerleave",removeRipple)
    })
}