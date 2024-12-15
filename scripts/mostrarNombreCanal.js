function loadChannelName() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    
    const channelNames = {
        'illojuan': 'IlloJuan',
        'rubius': 'Rubius',
        'rubius2': 'Rubius',
        'the grefg': 'TheGrefg',
        'the grefg2': 'TheGrefg',
        'elmariana': 'Elmariana',
        'elmariana2': 'Elmariana',
        'elmariana3': 'Elmariana',
        'elmariana4': 'Elmariana',
        'elmariana5': 'Elmariana',
        'beniju': 'BeniJu',
        'trebor': 'Trebor',
        'igrowan': 'Igrowan',
        'djmario': 'DjMario',
        'djmario2': 'DjMario',
        'farfadox': 'Farfadox',
        'fernanfloo': 'Fernanfloo',
        'fernanfloo2': 'Fernanfloo',
        'agustin51': 'Agustin51',
        'polman': 'Polman',
        'auron': 'AuronPlay',
        'juegagerman': 'JuegaGerman',
        'danirep': 'DaniRep',
        'lolito': 'LOLiTO FDEZ',
        'ampeter': 'Ampeterby7',
        'kevinsito': 'Kevin Pazmiño',
        'kevinsito2': 'Kevin Pazmiño',
    };

    if (videoId && channelNames[videoId]) {
        const channelNameElement = document.getElementById('channelName');
        if (channelNameElement) {
            channelNameElement.textContent = channelNames[videoId];
        }
    }
}

document.addEventListener('DOMContentLoaded', loadChannelName);
function loadChannelInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('v');
    
    const channelInfo = {
        'illojuan': {
            name: 'IlloJuan',
            image: '../imagenes_perfil/illojuan.png'
        },
        'rubius': {
            name: 'Rubius',
            image: '../imagenes_perfil/rubius.jpg'
        },
        'rubius2': {
            name: 'Rubius',
            image: '../imagenes_perfil/rubius.jpg'
        },
        'the grefg': {
            name: 'TheGrefg',
            image: '../imagenes_perfil/thegrefg.png'
        },
        'the grefg2': {
            name: 'TheGrefg',
            image: '../imagenes_perfil/thegrefg.png'
        },
        'elmariana': {
            name: 'Elmariana',
            image: '../imagenes_perfil/elmariana.png'
        },
        'elmariana2': {
            name: 'Elmariana',
            image: '../imagenes_perfil/elmariana.png'
        },
        'elmariana3': {
            name: 'Elmariana',
            image: '../imagenes_perfil/elmariana.png'
        },
        'elmariana4': {
            name: 'Elmariana',
            image: '../imagenes_perfil/elmariana.png'
        },
        'elmariana5': {
            name: 'Elmariana',
            image: '../imagenes_perfil/elmariana.png'
        },
        'beniju': {
            name: 'BeniJu03',
            image: '../imagenes_perfil/beniju.jpg'
        },
        'trebor': {
            name: 'Trebor',
            image: '../imagenes_perfil/Trebor.png'
        },
        'igrowan': {
            name: 'Igrowan',
            image: '../imagenes_perfil/igrowan.png'
        },
        'djmario': {
            name: 'DjMario',
            image: '../imagenes_perfil/DjMario.png'
        },
        'djmario2': {
            name: 'DjMario',
            image: '../imagenes_perfil/DjMario.png'
        },
        'farfadox': {
            name: 'FarfadoxVEVO',
            image: '../imagenes_perfil/farfadoxVEVO.png'
        },
        'fernanfloo': {
            name: 'Fernanfloo',
            image: '../imagenes_perfil/fernanfloo.jpg'
        },
        'fernanfloo2': {
            name: 'Fernanfloo',
            image: '../imagenes_perfil/fernanfloo.jpg'
        },
        'agustin51': {
            name: 'Agustin51',
            image: '../imagenes_perfil/Agustin51.png'
        },
        'polman': {
            name: 'Polman',
            image: '../imagenes_perfil/polman.jpg'
        },
        'auron': {
            name: 'AuronPlay',
            image: '../imagenes_perfil/auron.png'
        },
        'auron2': {
            name: 'AuronPlay',
            image: '../imagenes_perfil/auron.png'
        },
        'juegagerman': {
            name: 'JuegaGerman',
            image: '../imagenes_perfil/GermanGarmendia.png'
        },
        'danirep': {
            name: 'DaniRep',
            image: '../imagenes_perfil/danirep.png'
        },
        'lolito': {
            name: 'LOLITOFDEZ',
            image: '../imagenes_perfil/lolito.png'
        },
        'ampeter': {
            name: 'Ampeterby7',
            image: '../imagenes_perfil/Ampeter.png'
        },
        'kevinsito': {
            name: 'Kevin Pazmiño',
            image: '../imagenes_perfil/Kevinsito.jpg'
        },
        'kevinsito2': {
            name: 'Kevin Pazmiño',
            image: '../imagenes_perfil/Kevinsito.jpg'
        },
    };

    if (videoId && channelInfo[videoId]) {
        // Update channel name
        const channelNameElement = document.getElementById('channelName');
        if (channelNameElement) {
            channelNameElement.textContent = channelInfo[videoId].name;
        }

        // Update channel image
        const channelImageElement = document.getElementById('channelImage');
        if (channelImageElement) {
            channelImageElement.src = channelInfo[videoId].image;
            channelImageElement.alt = channelInfo[videoId].name;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadChannelInfo);
