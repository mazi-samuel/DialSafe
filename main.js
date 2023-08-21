
// Faq
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
// Faq

// Survey Form
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");

var form_1_btns= document.querySelector(".form_1_btns");
var form_2_btns= document.querySelector(".form_2_btns");
var form_3_btns= document.querySelector(".form_3_btns");



var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

var form_2_progressbar = document.querySelector(".form_2_progressbar");
var form_3_progressbar = document.querySelector(".form_3_progressbar");

var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");



form_1_next_btn.addEventListener("click", function () {
    form_1.style.display = "none";
    form_2.style.display = "block";

    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_progressbar.classList.add("active");
});



form_2_back_btn.addEventListener("click", function () {
    form_1.style.display = "block";
    form_2.style.display = "none";

    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_progressbar.classList.remove("active");
})



form_2_next_btn.addEventListener("click", function () {
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_2_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_3_progressbar.classList.add("active");
});

form_2_next_btn.addEventListener("click", function () {
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_2_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_3_progressbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_2_btns.style.display = "flex";
    form_3_btns.style.display = "none";

    form_3_progressbar.classList.remove("active");
})




btn_done.addEventListener("click", function() {
    modal_wrapper.classList.add("active");
});

shadow.addEventListener("click", function() {
    modal_wrapper.classList.remove("active");
});


// SLIDER 

 var ind = document.getElementsByClassName("ind")

 var slide = document.getElementById("slide")

 ind[0].onclick = function () {
    slide.style.transform = "translatex(0px)";

    for(i=0; i<4; i++) {
        ind[i].classList.remove("active");
    }

    this.classList.add("active");
 };

 ind[1].onclick = function () {
    slide.style.transform = "translatex(-800px)";
    for(i=0; i<4; i++) {
        ind[i].classList.remove("active");
    }

    this.classList.add("active");
 }; 
 
 ind[2].onclick = function () {
    slide.style.transform = "translatex(-1600px)";
    for(i=0; i<4; i++) {
        ind[i].classList.remove("active");
    }

    this.classList.add("active");
 }; 
 
 ind[3].onclick = function () {
    slide.style.transform = "translatex(-2400px)";
    for(i=0; i<4; i++) {
        ind[i].classList.remove("active");
    }

    this.classList.add("active");
 };
// SLIDER