$(document).ready(function () {

    /* = Menu profile = */
    $('.header_profile_btn').on('click', function(){
        $('.header_profile_menu').slideToggle().css({
            display: 'block'
        });
    })

    
    const btnContainer = $(".header_profile_btn");
    const container = $(".header_profile_menu");
    $(document).mouseup(function (e) {
        // событие клика по веб документу
        if (! btnContainer.is(e.target) && btnContainer.has(e.target).length === 0 &&
        // если клик был не по нашему документу
            ! container.is(e.target) && container.has(e.target).length === 0
        // и не по его дочерним элементам
        ) {
        container.slideUp();
        }
      });

    /* = Checkbox menu profile = */  
    $('.header_profile_checkbox').on('click', function(){
        $('.profile_checkbox_element').toggle(function(){
            $('#profile_checkbox_click').toggleClass('profile_checkbox_ellipse_click')
        });
    }) 

    /* = Checkbox mobile menu section = */  
    $('.mobile_section_checkbox').on('click', function(){
        $('.section_checkbox_element').toggle(function(){
            $('#section_checkbox_click').toggleClass('section_checkbox_ellipse_click')
        });
    }) 

    /* Переход в радел Menu в мобильном меню */
    $('#mobile_item_menu').on('click', function(){
        $('#mobile_item_menu, #icon_menu').toggleClass('mobile_item_click');
        $('.header_mobile_section').slideToggle();
        $('html, body').toggleClass('not_scroll');
    })
}); // Конец ready