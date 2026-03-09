document.addEventListener('DOMContentLoaded', function (event) {
    gsap.registerEffect({
        name: 'fade',
        effect: (targets, config) => {
            return gsap.to(targets, { duration: config.duration, opacity: 0, repeat: -1 });
        },
        defaults: { duration: 2 },
        extendTimeline: true,
    });

    gsap.effects.fade('.red-box')
});