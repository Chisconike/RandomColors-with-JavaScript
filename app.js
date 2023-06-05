const btn = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255) + 1
    const g = Math.floor(Math.random() * 255) + 1
    const b = Math.floor(Math.random() * 255) + 1
    const newcolor = `rgb(${r}, ${g}, ${b})`
    body.style.backgroundColor = newcolor;
    h1.innerText = newcolor;
    body.style.textAlign = 'center'
    btn.style.backgroundColor = newcolor;
})