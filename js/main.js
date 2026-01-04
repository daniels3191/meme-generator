'use strict'

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    resizeCanvas()

    window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme(elImg) {
    console.log(elImg);


}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')

    gElCanvas.width = elContainer.clientWidth


}

function renderMeme(elImg) {
    // const elImg = new Image()
    // elImg.src = 'img/gallery/1.jpg'
    console.log(elImg);
    

    elImg.onload = () =>
        gCtx.drawImage(elImg, 0, 0, elImg.naturalWidth, elImg.naturalHeight)
}