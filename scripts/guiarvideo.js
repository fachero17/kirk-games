const urlParams = new URLSearchParams(window.location.search);
            const videoSrc = urlParams.get('videoSrc');
            if (videoSrc) {
                document.getElementById('video').src = videoSrc;
            }