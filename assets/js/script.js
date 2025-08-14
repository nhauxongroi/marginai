// JavaScript để bật/tắt menu di động
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("fading-video");

  const fadeDuration = 1.5;

  video.addEventListener("timeupdate", function () {
    const currentTime = video.currentTime;
    const duration = video.duration;

    if (isNaN(duration)) {
      return;
    }

    if (currentTime < fadeDuration) {
      video.style.opacity = currentTime / fadeDuration;
    } else if (currentTime > duration - fadeDuration) {
      video.style.opacity = (duration - currentTime) / fadeDuration;
    } else {
      video.style.opacity = 1;
    }
  });
});

// Sticky navigation
document.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.getElementById('main-nav');
    if (nav) {
        const stickyPoint = nav.offsetTop;
        window.onscroll = function() {
            if (window.pageYOffset > stickyPoint) {
                nav.classList.add("sticky-nav");
            } else {
                nav.classList.remove("sticky-nav");
            }
        };
    }
});