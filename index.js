//form
function openForm(){
    document.getElementById("overlay-form").style.display = "block";
    
    document.getElementById("myForm").style.display = "block";
    $('body').css("fliter","blur(10px)");
}

function closeForm(){
    document.getElementById("overlay-form").style.display = "none";
    document.getElementById("myForm").style.display = "none";
}

//slider
var responsiveSlider = function(){
    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slider-wrapper");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
  
    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    });
  
    var prevSlide = function() {
        if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        
        else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };
  
    var nextSlide = function() {
        if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";

        count++;
        }
    
        else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
        }
    };
  
    next.addEventListener("click", function() {
        nextSlide();
    });
  
    prev.addEventListener("click", function() {
        prevSlide();
    });
  
    setInterval(function() {
        nextSlide()
    }, 5000);
};
  
window.onload = function() {
    responsiveSlider();  
}


//map
function scrollMap(){
    const scrollMap = document.getElementById("map");
    scrollMap.scrollIntoView({block: 'center',  behavior: 'smooth'});
}

//facebook
function openFB(){
    window.open("https://www.facebook.com/dulcegarciafyd");
}