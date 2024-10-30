const galeria = document.querySelector('#galeria')

const miniatura = document.querySelector("miniatura")

const imagem1 = document.querySelector('#imagem1')

const imagem2 = document.querySelector('#imagem2')

const imagem3 = document.querySelector('#imagem3')

const imagem4 = document.querySelector('#imagem4')

const imagem5 = document.querySelector('#imagem5')

const imgAmpliada = document.querySelector('#imgAmpliada')

imagem1.addEventListener('mouseover', () => {
    imagem1.style.opacity = '1';
})

imagem1.addEventListener('mouseout', () => {
    imagem1.style.opacity = '0.4';
})

imagem2.addEventListener('mouseover', () => {
    imagem2.style.opacity = '1';
})

imagem2.addEventListener('mouseout', () => {
    imagem2.style.opacity = '0.4';
})

imagem3.addEventListener('mouseover', () => {
    imagem3.style.opacity = '1';
})

imagem3.addEventListener('mouseout', () => {
    imagem3.style.opacity = '0.4';
})

imagem4.addEventListener('mouseover', () => {
    imagem4.style.opacity = '1';
})

imagem4.addEventListener('mouseout', () => {
    imagem4.style.opacity = '0.4';
})

imagem5.addEventListener('mouseover', () => {
    imagem5.style.opacity = '1';
})

imagem5.addEventListener('mouseout', () => {
    imagem5.style.opacity = '0.4';
})