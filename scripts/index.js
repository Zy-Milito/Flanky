window.onscroll = function () {
    scrolling();
}

let slideIndex = 0;
slideshow()

function slideshow() {
    try {
        let slides = document.getElementsByClassName("slides");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        slideIndex > slides.length ? slideIndex = 1 : undefined;
        slides[slideIndex - 1].style.display = "block";
        setTimeout(slideshow, 5000);
    } catch {
        console.error("Document element not found.")
    }
}

let header = document.getElementById('global-header');
let arrow = document.getElementById('arrow-img');
let arrowLink = document.getElementById('arrow-link');

function scrolling() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        header.classList.add('solid');
        arrow.classList.add('flip');
        arrowLink.href = "#slideshow";
    } else {
        header.classList.remove('solid');
        arrow.classList.remove('flip');
        arrowLink.href = "#content";
    }
}