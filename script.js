document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.skill');
    
    circles.forEach(circle => {
        let progress = circle.getAttribute('data-progress');
        let angle = (progress / 100) * 360;
        let mask = circle.querySelector('.mask');
        let fill = circle.querySelector('.fill');

        if (angle <= 180) {
            mask.style.transform = `rotate(${angle}deg)`;
        } else {
            mask.style.transform = 'rotate(180deg)';
            fill.style.transform = `rotate(${angle - 180}deg)`;
        }
    });
});
