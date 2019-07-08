// See the scroll function in onscroll.js

// window loaded
$(".banner .row").addClass("animated rotateIn");
// menu
$(".menu button, .banner button").click(function(){
    $(this).css("background-color","#fed136");
});


// timeline
let evenLIs = document.querySelectorAll(".timeline ul li");
let current_width = window.innerWidth;
window.onload= function(){
    for(let i=0; i<evenLIs.length; i++){
        if(i%2 == 1) evenLIs[i].classList.add("timeline-inverted");
    }
};
window.addEventListener("resize",function(){
    if(current_width<768 && window.innerWidth>768){
        for(let i=0; i<evenLIs.length; i++){
            if(i%2 == 1) evenLIs[i].classList.add("timeline-inverted");
        }
    }
});
