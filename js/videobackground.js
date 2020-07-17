$(document).ready(function () {
    var videobackground = new $.backgroundVideo($('.about'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "src/",
        "filename": "particle",
        "types": ["mp4", "ogg", "webm"],
        "preload": true,
        "autoplay": true,
        "loop": true,
        "muted": true
    });
});