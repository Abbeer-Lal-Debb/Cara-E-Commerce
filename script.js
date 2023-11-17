const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const bag = document.getElementById('bag')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        bag.style.visibility = "hidden";

    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        bag.style.visibility = "visible";
    })
}

const MainImg = document.getElementById('MainImg');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = () => {
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = () => {
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = () => {
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = () => {
    MainImg.src = smallImg[3].src;
}


