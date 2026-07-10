const script = document.createElement('script');
script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
document.head.appendChild(script);

script.onload = function() {
    AOS.init({
        duration: 1500,
        offset: 15,
        once: true
      });
};