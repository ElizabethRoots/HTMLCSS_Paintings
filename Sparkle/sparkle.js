function clickHandle(event) {
    event = window.event || event;
    var firework = document.createElement('DIV'),
        sky = document.querySelector('#sky'),
        i,
        color1 =
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
        color2 =
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
        color3 =
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

    // Set position of the container of fireworks
    firework.className += 'firework';
    firework.style.top = event.clientY + 'px';
    firework.style.left = event.clientX + 'px';

    //Make fireworks
    for (i = 0; i < 8; i++) {
        var sparkle = document.createElement('DIV'),
            cls = 'sparkle1';
        sparkle.className += cls;
        sparkle.style.transform = 'rotate(' + i * 45 + 'deg)';
        sparkle.style.background =
            'linear-gradient(to left,' + color1 + ',rgba(0,0,0,0))';
        firework.appendChild(sparkle);
    }

    for (i = 0; i < 11; i++) {
        var sparkle_ = document.createElement('DIV'),
            cls = 'sparkle2';
        sparkle_.className += cls;
        sparkle_.style.transform = 'rotate(' + i * 36 + 'deg)';
        sparkle_.style.background =
            'linear-gradient(to left,' + color2 + ',rgba(0,0,0,0))';
        firework.appendChild(sparkle_);
    }

    for (i = 0; i < 25; i++) {
        var sparkle_ = document.createElement('DIV'),
            cls = 'sparkle3';
        sparkle_.className += cls;
        sparkle_.style.transform = 'rotate(' + i * 15 + 'deg)';
        sparkle_.style.background =
            'linear-gradient(to left,' + color3 + ',rgba(0,0,0,0))';
        firework.appendChild(sparkle_);
    }

    sky.appendChild(firework);

    // Remove DOM of fireworks
    setTimeout(function() {
        sky.removeChild(firework);
    }, 3500);
}