document.addEventListener('DOMContentLoaded', function() {
    const colorButton = document.getElementById('colorButton');
    const body = document.body;

    colorButton.addEventListener('click', function() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        body.style.backgroundColor = randomColor;
    });

    const box = document.querySelector('.box');
    box.addEventListener('click', function() {
        box.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
        box.style.width = `${Math.floor(Math.random() * 200) + 100}px`;
        box.style.height = `${Math.floor(Math.random() * 200) + 100}px`;
    });

    const circle = document.querySelector('.circle');
    setInterval(function() {
        circle.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }, 1000);
});
