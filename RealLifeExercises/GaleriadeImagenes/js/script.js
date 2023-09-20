document.addEventListener('DOMContentLoaded', function() {
    var galleryImages = document.querySelectorAll('.galleryImage');

    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            abrirZoom(image);
        });
    });

    function abrirZoom(image) {
        var overlay = document.createElement('div');
        overlay.className = 'overlay';

        var zoomedImage = document.createElement('img');
        zoomedImage.src = image.src;
        zoomedImage.className = 'zoomedImage';

        overlay.appendChild(zoomedImage);

        overlay.addEventListener('click', function() {
            cerrarZoom(overlay);
        });

        document.body.appendChild(overlay);
    }

    function cerrarZoom(overlay) {
        document.body.removeChild(overlay);
    }
});
