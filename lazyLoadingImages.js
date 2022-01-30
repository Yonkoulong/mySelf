document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");
    var lazyloadThrottleTimeout;

    function lazyLoad() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrolltoppos = window.pageYOffset;

            //lay vi tri scroll 
            lazyloadImages.forEach(function (image) {
                if (image.offsetTop < (window.innerHeight + scrolltoppos)) {
                    image.src = image.dataset.src;
                    image.classList.remove('lazy')
                }
            });

            if (lazyloadImages.length==0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationChange", lazyLoad);
            }
        }, 100);
    }
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationChange", lazyLoad);
})