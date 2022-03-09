$(document).ready(function(){
    $('.close-icon').on('click', function(){
        $(window).on('resize', function(e){
            checkScreensize();
        });
        checkScreensize();
        function checkScreensize(){
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 767) {
                $('.side-menu').removeClass("mob-tgl-ham");
            } else {
                $('.side-menu').removeClass("toggle-menu");
            }
        }
    });
    $('.ham-menu').on('click', function(){

    $(window).on('resize', function(e){
        checkScreensize();
    });

    checkScreensize();
    function checkScreensize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 767) {
            $('.side-menu').addClass("mob-tgl-ham");
        } else {
            $('.side-menu').addClass("toggle-menu");
        }
    }
    });

    // *********testimonial**********
    $('#right-btn').on('click', function () {
        var currentSlide = $('.cards.wipe');
        var nextSlide = currentSlide.next();

        if(nextSlide.length) {
            currentSlide.removeClass('wipe').css('z-index', -10);
            nextSlide.addClass('wipe').css('z-index', 10);
        }
    })

    $('#left-btn').on('click', function () {
        var currentSlide = $('.cards.wipe');
        var nextSlide = currentSlide.prev();

        if(nextSlide.length) {
            currentSlide.removeClass('wipe').css('z-index', -10);
            nextSlide.addClass('wipe').css('z-index', 10);
        }
    })
    // ************form**************

    $('.grid-form:first').show();
    $('.tab-btns:first').addClass('selected');

    $('.tab-btns').click(function(){
        index = $(this).index();
        $('.tab-btns').removeClass('selected');
        $(this).addClass('selected');
        $('.grid-form').hide();
        $('.grid-form').eq(index).show();
    });

    //   **************aboutus tab seciton *****************

    $('.content-in:first').show();
    $('.tab-in:first').addClass('on');
    $(".tab-in").on("click", function () {
        var categoryId = $(this).data("id");
        index=$(this).index();
    
        $(".tab-in").removeClass("on");
        $(this).addClass("on");
        $(".content-in" + categoryId).addClass("vison");
        $('.content-in').hide();
            $('.content-in').eq(index).show();
      });


    $('.ans-cont').hide();
    $('.que-cont').on("click",function(){
        index=$(this).index();

        
        $(this).next().slideToggle().css({"display":block, "transition": height1s});
        
    });  
    
        
   

   
});

// ***********vanila-javascript-starts-from-here**************

let tabHeaders = document.querySelectorAll(".profile-head");
let tabContents = document.querySelectorAll(".expChild");
  
for (let i=0; i<tabHeaders.length; i++) {
    tabHeaders[i].addEventListener("click", () => {
            document.querySelector(".profile-head .active-profile").classlist.remove("active-profile");
            tabHeaders[i].classlist.add("active-profile");
            
            document.querySelector(".expChild .display-vis").classlist.remove("display-vis");
            tabContents[i].classlist.add("display-vis");
        })
}