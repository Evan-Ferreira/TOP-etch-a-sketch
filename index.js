const divdiv = document.querySelector('.divdiv');
const ngButton = document.querySelector('.ng-button');
const message = document.querySelector('.message');

function gridMaker(n) {
    if (n < 1 || n > 100) {
        message.textContent =
            'Out of Range! Choose a Number between 1 and 100!';
    } else {
        const ETCH_WIDTH = 960;
        const ETCH_HEIGHT = 960;
        const boxWidth = ETCH_WIDTH / n;
        const boxHeight = ETCH_HEIGHT / n;
        divdiv.innerHTML = '';
        for (let i = 0; i < n ** 2; i++) {
            const div = document.createElement('div');
            div.style.width = `${boxWidth}px`;
            div.style.height = `${boxHeight}px`;
            divdiv.appendChild(div);
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'orange';
            });
        }
    }
}

ngButton.addEventListener('click', () => {
    const n = parseInt(prompt('Please Enter a New Grid Size:'), 10);
    gridMaker(n);
});
