function loadVideo() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    const videoElement = document.getElementById('mainVideo');
    
    const videos = {
        'illojuan': '../videos/illojuan.mp4',
        'rubius': '../videos/rubius.mp4',
        'rubius2': '../videos/rubius2.mp4',
        'the grefg': '../videos/the grefg.mp4',
        'the grefg2': '../videos/the grefg2.mp4',
        'elmariana': '../videos/el mariana.mp4',
        'elmariana2': '../videos/el mariana2.mp4',
        'elmariana3': '../videos/el mariana3.mp4',
        'elmariana4': '../videos/el mariana4.mp4',
        'elmariana5': '../videos/el mariana5.mp4',
        'beniju': '../videos/beniju.mp4',
        'trebor': '../videos/trebor.mp4',
        'igrowan': '../videos/igrowan.mp4',
        'djmario': '../videos/djmario.mp4',
        'djmario2': '../videos/djmario2.mp4',
        'farfadox': '../videos/farfadox.mp4',
        'fernanfloo': '../videos/fernanfloo.mp4',
        'fernanfloo2': '../videos/fernanfloo2.mp4',
        'agustin51': '../videos/agustin51.mp4',
        'polman': '../videos/polman.mp4',
        'auron': '../videos/auron.mp4',
        'auron2': '../videos/auron.mp4',
        'juegagerman': '../videos/juegagerman.mp4',
        'danirep': '../videos/danirep.mp4',
        'lolito': '../videos/lolito.mp4',
        'ampeter': '../videos/ampeter.mp4',
        'kevinsito': '../videos/kevinsito.mp4',
        'kevinsito2': '../videos/kevinsito2.mp4',
    };

    if (videoId && videos[videoId]) {
        videoElement.src = videos[videoId];
    }
}

document.addEventListener('DOMContentLoaded', loadVideo);
