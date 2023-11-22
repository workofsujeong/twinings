$(document).ready(function(){
    accControl("footer div h3");
    accControl(".detailContainer ul:last-of-type li h3");
    accControl(".shippingPolicyContainer div ul li h3");
    accControl(".faqsContainer div > ul li h2");
    accControl(".AboutsideMenu nav ul li span");
    panalControl("header div button");
    panalControl(".detailContainer div:first-of-type aside button");
    panalControl(".detailContainer figure:nth-of-type(2) figcaption ul li button");
    panalControl(".mypageContainer.myAddress div ul li button");
    panalControl(".contactUsContainer div form fieldset button");
    accDivControl("main > div:last-of-type ul li div button");
    headerScroll("header");
    customSlider(".detailSlider",false,true);
    quantityComponent(".countnumb input[type='number']", ".countnumb button:first-of-type", ".countnumb button:last-of-type");
})

function accControl(accBtn){
    $(accBtn).click(function(){
        $(this).toggleClass("active");
    });
}

function panalControl(openBtn){
    var currentPanel = null;
    $(openBtn).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".btnClose").click(function(){
        $(currentPanel).removeClass("active");
    });
}

function accDivControl(openBtn){
    var accPanel = null;
    $(openBtn).click(function(){
        accPanel = "#" + $(this).attr("data-acccontent");
        $(this).toggleClass("active");
        $(accPanel).toggleClass("active");
    });
}

function headerScroll(){
    var $header = $('header');
    $(window).scroll(function(){
        $($header).removeClass("start");
        $($header).addClass("scrollDown");
    })
}

function customSlider(target, loopSlide, loopControl){
    $(target).bxSlider({
        infiniteLoop: loopSlide,
        hideControlOnEnd: loopControl
    });
}

function quantityComponent(target, minus, plus){
    var cartField = $(target);
    var cartCount = $(cartField).val();
    $(minus).click(function(){
        cartCount --;
        if(cartCount <= 1){
            cartCount = 1;
        }
        cartField.val(cartCount);
    });
    $(plus).click(function(){
        cartCount ++;
        if(cartCount >= 99){
            cartCount = 99;
        }
        cartField.val(cartCount);
    });
}

