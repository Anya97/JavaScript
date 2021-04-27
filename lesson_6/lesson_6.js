//1. Доработать функцию замены картинки в галерее таким образом, 
//чтобы она проверяла наличие картинки по указанному в src адресу.

function openImage(event) {
    const gallery = document.getElementsByClassName("galary")[0];
    gallery.innerHTML = "";
    const target = event.target;
    const seed = target.dataset.seed;
    if (!seed) {
        return;
    }
    const image = document.createElement("img");
    image.id = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${target.dataset.seed}/500`;
    image.alt = `Изображение ${seed}`;
    image.onerror = function() {
        alert("Ошибка во время загрузки изображения");
    };
    image.onload = function() {
        alert("Изображение изменено");
    };
    gallery.appendChild(image);
}

function init() {
    const images = document.querySelectorAll(".thumbnails > img");

    for (let image of images) {
        image.addEventListener('click', openImage);
    }
} 

window.addEventListener('load', init);


let arImagesObjs = document.querySelectorAll(".thumbnails");
// console.log(arImagesObjs);

for (let objImage of arImagesObjs) {
  // console.log(objImage);
  objImage.onclick = function(e) {
    console.log(e.target);
  };
}