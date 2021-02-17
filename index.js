function appendImageElem(keyword, index){
    let imageElem = document.createElement("img");
    imageElem.src = `https://source.unsplash.com/300x255/?"${keyword}&sig=${index}`;

    let galleryElem = document.querySelector(".gallery");
    galleryElem.appendChild(imageElem);
}
function removePhotos() {
    const galleryElem = document.querySelector(".gallery");
    galleryElem.innerHTML = ""
}
function searchPhotos(event) {
    const keyword = event.target.value;
    if (event.key === "Enter" && keyword !== ""){
        removePhotos();
        for (let i=1;i<=9;i++) {
            appendImageElem(keyword,i)
        }
    }
}

function run() {
    let inputElem = document.querySelector("Input");
    inputElem.addEventListener("keydown",searchPhotos);
}

run();