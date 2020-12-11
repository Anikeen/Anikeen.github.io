//========== OWL INITIALIZATION ============//

$(document).ready(function(){

    $('.review_carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="158px"><path fill-rule="evenodd"  fill="rgb(153, 153, 153)" d="M14.000,0.915 L5.000,78.998 L14.000,157.083 L0.917,78.998 L14.000,0.915 Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="156px"><path fill-rule="evenodd"  fill="rgb(153, 153, 153)" d="M-0.000,0.009 L8.936,77.998 L-0.000,155.989 L12.990,77.998 L-0.000,0.009 Z"/></svg>']        
    });  

    $('.franchise_cost_mobile').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']        
    });

});

//========== OWL INITIALIZATION END ============//


//========== CALL REQUEST ============//

$(document).ready(function(){

    $('#call_request_form').submit(function(e){

        e.preventDefault();
    
        $('.call_request_success .modal-closer').on('click', function(){
    
            $('.call_request_success').removeClass('open');
            $('.call_request_success').closest('.modal-window_wrapper').removeClass('open'); 
            $('body').removeClass('no-scroll');           
    
        });
    
        $('#call_request_success').on('click', function(){
    
            $('.call_request_success').removeClass('open');
            $('.call_request_success').closest('.modal-window_wrapper').removeClass('open');            
            $('body').removeClass('no-scroll');
            
        });
    
        let formData = new FormData($(this)[0]);
    
        // $.ajax({
        //     url:'',
        //     data: formData
        // }); 
    
        $('.call_request').removeClass('open');
        $('.call_request_success').addClass('open');
    
    });

});

//========== CALL REQUEST END============//


//========== FIND OUT DETAILS ============//

$(document).ready(function(){

    $('#find_out_form').submit(function(e){

        e.preventDefault();
        let formData = new FormData($(this)[0]);

        // $.ajax({
        //     url:'',
        //     data: formData
        // });          

    });
    
});

//========== FIND OUT DETAILS END============//


//========== GET MAILING ============//

$(document).ready(function(){

    $('#get_mailing_form').submit(function(e){

        e.preventDefault();
        let formData = new FormData($(this)[0]);

        // $.ajax({
        //     url:'',
        //     data: formData
        // });          

    });
    
});

//========== GET MAILING END============//



//========== FRANCHISE COST DETAILS============//

$(document).ready(function(){

    $('#franchise_cost_details_form').submit(function(e){

        e.preventDefault();
        let formData = new FormData($(this)[0]);
    
        // $.ajax({
        //     url:'',
        //     data: formData
        // });    
        
        $('.franchise_cost_details').removeClass('open');
        $('.franchise_cost_details').closest('.modal-window_wrapper').removeClass('open');            
        $('body').removeClass('no-scroll');
    
    });

});


//========== FRANCHISE COST DETAILS END============//


//========== SEND REVIEW ============//

$(document).ready(function(){

    $('#partners_review_form').submit(function(e){

        e.preventDefault();
    
        $('.partners_review_success .modal-closer').on('click', function(){
    
            $('.partners_review_success').removeClass('open');
            $('.partners_review_modal').closest('.modal-window_wrapper').removeClass('open'); 
            $('body').removeClass('no-scroll');           
    
        });
    
        $('#partners_review_success').on('click', function(){
    
            $('.partners_review_success').removeClass('open');
            $('.partners_review_modal').closest('.modal-window_wrapper').removeClass('open');            
            $('body').removeClass('no-scroll');
            
        });
    
        let formData = new FormData($(this)[0]);
    
        // $.ajax({
        //     url:'',
        //     data: formData
        // }); 
    
        $('.partners_review_modal').removeClass('open');
        $('.partners_review_success').addClass('open');
    
    });

});


//========== SEND REVIEW END============//


//========== SEND COACH INFO ============//

$(document).ready(function(){

    $('#coach_info_form').submit(function(e){

        e.preventDefault();
        let formData = new FormData($(this)[0]);
    
        // $.ajax({
        //     url:'',
        //     data: formData
        // });    
        
        $('.coach_info_modal').removeClass('open');
        $('.coach_info_modal').closest('.modal-window_wrapper').removeClass('open');            
        $('body').removeClass('no-scroll');
    
    });

});


//========== SEND COACH INFO END============//



//========== ASK QUESTION ============//

$(document).ready(function(){

    $('#left_questsions_form').submit(function(e){

        e.preventDefault();
        let formData = new FormData($(this)[0]);

        // $.ajax({
        //     url:'',
        //     data: formData
        // });          

    });
    
});


//========== ASK QUESTION END============//


//=============== SMOOTH SCROLL ===============//

$(document).ready(function(){

let $page = $('html, body');

$('a[href*="#"]').click(function() {

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 90
    }, 600);

    return false;

});

});

//=============== SMOOTH SCROLL END ===============//


//=============== MOBILE MENU ===============//

$(document).ready(function(){

    $('#menu_btn').on('click', function(){        

        if($('.mobile_menu').attr('class') === 'mobile_menu'){

            $('.mobile_menu').addClass('open');

            $('#menu_btn').html('<img src="img/close.png" alt="close">');

        }else{

            $('.mobile_menu').removeClass('open');

            $('#menu_btn').html('<i class="fas fa-bars"></i>');

        }
        
    });

    $('.mobile_menu a').on('click', function(){

        $('.mobile_menu').removeClass('open');

        $('#menu_btn').html('<i class="fas fa-bars"></i>');

    });

        
});
    
    
//=============== MOBILE MENU END ===============//



//=============== SCROLL BUTTON ===============//

$(document).ready(function(){

    $('#scroll_btn').on('click', function(){

        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

        $('#scroll_btn').css('opacity', 0);

    });

    $(window).on('scroll', function(){
        
        if(window.scrollY === 0){
            $('#scroll_btn').css('opacity', 1);
        }else{

        }

    });
    
});
    
//=============== SCROLL BUTTON END ===============//