/**
 * @type {import("artplayer")}
 */
/**
 * @param {import("artplayer")} art
 */
function getInstance(art) {
    //
  }
export default {
data() {
    return {
    /**
     * @type {import("artplayer")}
     */
    art: null,
    }
}
}
/**
 * @type {import("artplayer/types/option").Option}
 */


option.volume = 0.5;

const art8 = new Artplayer(option);

setTimeout(() => {
    art.url = '/assets/videos/SampleVideo_1280x720_1mb.mp4';
}, 1000);

let art = new Artplayer({
    container: '.artplayer-app',
    url: '/assets/videos/SampleVideo_1280x720_1mb.mp4',
    autoplay: true,
    autoSize: true,
    aspectRatio: true,
    setting: true,
    hotkey: true,
    fullscreen: true,
    useSSR: true,
    volume: 0.5,
    lang: 'fr',
    controls: [
        {
            position: 'right',
            html: 'Play/Pause',
            click: function () {
                art.toggle();
            },
        },
    ],
    isLive: true, quality: [
        {
            default: true,
            html: 'SD 480P',
            url: '/assets/videos/SampleVideo_1280x720_1mb.mp4',
        },
        {
            html: 'HD 720P',
            url: '/assets/videos/SampleVideo_1280x720_1mb.mp4,
        },
        {
            html: 'HD 1280P',
            url: '/assets/videos/SampleVideo_1280x720_1mb.mp4',
        }
    ],
    icons: {
        play: '<div class="custom-play-icon"></div>',
        pause: '<div class="custom-pause-icon"></div>',
        loading: '<div class="loading-icon"></div>'
    },
});

art.on('play', () => {
    console.log('Video is playing');
});

art.on('pause', () => {
    console.log('Video is paused');
});
art.on('ready', () => {
    console.info(art.duration);
});

art.on('ready', () => {
    art.fullscreenWeb = true;

    setTimeout(() => {
        art.fullscreenWeb = false;
    }, 3000);
});