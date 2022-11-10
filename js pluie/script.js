const body = document.body;

setInterval(rainfall, 1);

function rainfall () {
    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');
    waterDrop.style.fontSize = Math.random() * 7 + 'px';
    waterDrop.style.animationDuration = Math.random() * 1.5 + 's';
    waterDrop.style.opacity = Math.random() + 0.1;
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';

    body.appendChild(waterDrop);

    setTimeout(() => {
        waterDrop.remove();
    }, 6000)
    
}