'use strict';

let elem = document.querySelector('.fish'),
    aqua = document.querySelector('.aqua');

let posX = (aqua.clientWidth - elem.clientWidth) * Math.random(),
    posY = (aqua.clientHeight - elem.clientHeight) * Math.random(),
    dirX = true,
    dirY = true;

elem.style.top = posY + 'px';
elem.style.left = posX + 'px';

function myAnimation() {

    let id = setInterval(frame, 10);
    function frame () {
        let speedX,
            speedY;

        if (posX >= (aqua.clientWidth - elem.clientWidth) && dirX) {
            elem.style.transform = 'scale(-1, 1)';
            dirX = false;
        } else if (posX <= 0 && !dirX) {
            elem.style.transform = 'scale(1, 1)';
            dirX = true;
        }
        speedX = 4*(dirX - 0.5)*Math.random();
        posX += speedX;
        elem.style.left = posX + 'px';
        
        if (posY >= (aqua.clientHeight - elem.clientHeight)) {
            dirY = false;
        } else if (posY <= 0) {
            dirY = true;
        }
        speedY = 2*(dirY - 0.5)*Math.random();
        posY += speedY;
        elem.style.top = posY + 'px';
    }
}

myAnimation();