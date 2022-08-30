const naruto = document.querySelector('.naruto');
const pipe = document.querySelector('.pipe');


const jump = () =>  {
        naruto.classList.add('jump');

        setTimeout(()    =>  {
            naruto.classList.remove('jump');

        }, 500);

}

const loop = setInterval(()   =>  {

    const pipePosition = pipe.offsetLeft;
    const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && narutoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        naruto.style.animation = 'none';
        naruto.style.bottom = `${narutoPosition}px`;

        naruto.src ='img/dead.png';
        pipe.src ='img/pipe2.png';

        clearInterval(loop);
    }

        

        

}, 10);

document.addEventListener('keydown', jump);