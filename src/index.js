console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () { 
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => displayImg(data.message))
    .catch(error => console.error("Error", error)); 

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => breeds(Object.keys(data.message)))
    .catch(error => console.error("Error getting breeds", error));
});

function displayImg(images) {
    const cntr = document.getElementById("dog-image-container");
    while (cntr.firstChild) {
        cntr.removeChild(cntr.firstChild);
    } 

    images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = `Image ${index}`;
        img.width = 150;
        img.height = 150;
        img.style.margin = "10px";
        cntr.appendChild(img);
    });
}


function breeds(breeds) {
    const breedCntr = document.getElementById("dog-breeds");
    while (breedCntr.firstChild) {
        breedCntr.removeChild(breedCntr.firstChild);
    }

    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedCntr.appendChild(li);
    });

document.getElementById("dog-breeds").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.style.color = "purple";
        }
    });

    const filter = document.getElementById("breed-dropdown");
    filter.addEventListener("change", function () {
        const fLetter = filter.value.toUpperCase();
        const liItems = breedCntr.getElementsByTagName("li");

        Array.from(liItems).forEach(li => {
            if (fLetter === "" || li.textContent.charAt(0).toUpperCase() === fLetter) {
                li.style.display = "list-item";
            } else {
                li.style.display = "none";
            }
        });
    });

}


