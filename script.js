const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

yesButton.addEventListener('mouseenter', function () {
    const newTop = Math.random() * 80;
    const newLeft = Math.random() * 80;

    yesButton.style.top = `${newTop}vh`;
    yesButton.style.left = `${newLeft}vw`;
});

noButton.addEventListener('click', function () {
    message.style.display = 'block';
});
