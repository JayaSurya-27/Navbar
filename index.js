const ham = document.querySelector(".hamburger");
const dropdown = document.querySelector(".menu")

ham.addEventListener('click' , function () {
    this.classList.toggle('is-active');
    dropdown.classList.toggle("is-on");
});
