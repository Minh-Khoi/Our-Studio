let current_scrollTop = document.documentElement.scrollTop;

window.onscroll = function(){
    let banner_pos = document.documentElement.scrollTop;
    let service_offset = $("#service").offset().top,
        portfolio_offset = $("#portfolio").offset().top,
        timeline_offset = $("#timeline").offset().top,
        founder_offset = $("#founder").offset().top,
        contact_offset = $("#contact").offset().top ;
    let animate_classes_removed = "animated flipInX fadeInUp rotateIn"; //It containe all animated classes that were used
    
    // Set background for menu bar
    if(banner_pos>=510 && window.innerWidth>768){
        $(".menu").css("background-color", "#636569");
    } else if (banner_pos<510 && window.innerWidth>768){
        $(".menu").css("background-color", "hsla(89, 43%, 51%, 0)");
    }

    // Set background for each block option (ul li) of menu
    // Set all animation (add class animated) for elements 
    // each if...else block is Equivalent one step to set animation on each container
    // See the detail activities at the "service" if...else block (the second block)
    if(banner_pos<service_offset/3 ){
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".container").removeClass(animate_classes_removed);
        if (banner_pos < current_scrollTop) $(".banner .row").addClass("animated rotateIn");
        current_scrollTop = banner_pos;
        $(".service-infos").css("visibility","hidden");
    } else if (banner_pos>=service_offset/3 && banner_pos<portfolio_offset*3/4){
        // The first I set the tab on menu bar turn transparent and the tab equivalent turn blue (#5bc0de) (I)
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".menu ul.nav li:nth-child(1)")
                .css({"background-color":"#5bc0de"}); // Done setting tab on menu bar
        $(".menu ul.nav li:nth-child(1)").click();
        // The second I set animation by adding the animated class from animate.css 
        // I remove all the animated class that are exist on or in the .container(-fluid) elements  
        $(".container, .container *, .container-fluid, .container-fluid *")
                                        .removeClass(animate_classes_removed);
        // After that, I set the animated elements visible (that was set hidden at the previous step)  
        $(".service-infos").css("visibility","visible");
        // Set animation (add animated classes) for them  
        $(".service, .service-infos").addClass("animated flipInX");
        // set hidden the animated elements next (and also the previous - if existing) .container element. 
        $(".portfolio .col-lg-4").css("visibility","hidden");  // The previous .container element DOES NOT EXIST
// All the if...else blocks below DO THE SAME.
    } else if (banner_pos>=portfolio_offset*3/4 && banner_pos<timeline_offset-window.innerHeight/2 ){
        // FIRST
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".menu ul.nav li:nth-child(2)").
                css({"background-color":"#5bc0de"});
        // SECOND
        $(".container, .container *, .container-fluid, .container-fluid *")
                                    .removeClass(animate_classes_removed);
        $(".portfolio .col-lg-4").css("visibility","visible");
        $(".portfolio .col-lg-4, .portfolio .row-of-heading")
                                    .addClass("animated fadeInUp");
        $(".timeline-panel, .service-infos").css("visibility", "hidden");
    }else if(banner_pos>=timeline_offset-window.innerHeight/2 && banner_pos<founder_offset-window.innerHeight/2 ){
        // FIRST
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".menu ul.nav li:nth-child(3)").
                css({"background-color":"#5bc0de"});
        // SECOND
        $(".timeline-panel").css("visibility", "visible");
        $(".container, .container *, .container-fluid, .container-fluid *")
            .removeClass(animate_classes_removed);
        $(".timeline-panel").addClass("animated fadeInUp");
        $(".portfolio .col-lg-4, .founder .col-xs-12").css("visibility", "hidden");
    }else if(banner_pos>=founder_offset-window.innerHeight/2 && 
                banner_pos< (((contact_offset - founder_offset) < window.innerHeight) ? 
                                ( founder_offset + (contact_offset - founder_offset)/2) :
                                 (contact_offset- window.innerHeight/2)) ){
        //FIRST
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".menu ul.nav li:nth-child(4)").
                css({"background-color":"#5bc0de"});
        // SECOND
        $(".container, .container *, .container-fluid, .container-fluid *")
            .removeClass(animate_classes_removed);
        $(".founder .col-xs-12").css("visibility", "visible");
        $(".founder .col-xs-12").addClass("animated flipInX");
        $(".timeline-panel").css("visibility", "hidden");
        $(".form-contact input, .form-contact textarea").css("visibility", "hidden");
            // console.log(banner_pos>=founder_offset-window.innerHeight);
    }else if(banner_pos>= (((contact_offset - founder_offset) < window.innerHeight) ? 
                                                ( founder_offset + (contact_offset - founder_offset)/2) :
                                                (contact_offset- window.innerHeight/2)) ){
        // FIRST
            // console.log((contact_offset - founder_offset) +"_____" + (contact_offset- ((contact_offset - founder_offset) < window.innerHeight) ? 
                            // (contact_offset - founder_offset) : window.innerHeight));
        $(".menu ul.nav li").each(function(){
            $(this).css("background-color", "hsla(0, 0%, 0%, 0)");
        });
        $(".menu ul.nav li:nth-child(5)").
                css({"background-color":"#5bc0de"});
        // SECOND
        $(".container, .container *, .container-fluid, .container-fluid *")
            .removeClass(animate_classes_removed);
        $(".form-contact input, .form-contact textarea").css("visibility", "visible");
        $(".form-contact input, .form-contact textarea").addClass("animated fadeInUp");
        $(".founder .col-xs-12").css("visibility", "hidden");
        // console.log("not done");
    }
}
