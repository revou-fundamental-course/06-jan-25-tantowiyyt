// user greeting 
function ubahNama(){
    let nama = prompt("What is Your Name?", "");
    document.getElementById("user-greeting").innerHTML = nama
}

ubahNama()

// responsifitas mobile 
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Tambahkan event listener untuk toggle menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// waktu skrg
document.getElementById("currentTime").innerText = new Date().toLocaleString();

// submit form
const form = document.getElementById("messageForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // ambil data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // tampilan data
    document.getElementById("outputName").innerText = name;
    document.getElementById("outputDob").innerText = dob;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputMessage").innerText = message;
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    } 
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
}

// auto slide
var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 20000);
}