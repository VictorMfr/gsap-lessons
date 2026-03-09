document.addEventListener('DOMContentLoaded', function (event) {
    const redBoxAnimation = gsap.to('.red-box', { 
        x: 300, 
        duration: 2, 
        rotation: 360, 
        ease: 'power1.inOut', 
        repeat: -1, 
        yoyo: true 
    });

    const greenBoxAnimation = gsap.from('.green-box', { 
        x: 300, 
        duration: 2, 
        rotation: -360, 
        ease: 'power1.inOut', 
        repeat: -1, 
        yoyo: true 
    });

    const blueBoxAnimation = gsap.fromTo('.blue-box', { 
        x: 300, 
        rotation: 360 
    }, { 
        x: 0, 
        rotation: 0, 
        duration: 2, 
        ease: 'power1.inOut', 
        repeat: -1, yoyo: true 
    });

    const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    timeline.to('.yellow-box', { x: 300, duration: 1, ease: 'power1.inOut' })
        .to('.yellow-box', { rotation: 360, duration: 1, ease: 'power1.inOut' })
        .to('.blue-box', { scale: 0.5, duration: 1, ease: 'power1.inOut' })

    
});