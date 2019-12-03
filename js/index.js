// Change header image on hover
let headerImg = document.querySelector("header img");

let redBorder = "1px solid red";
let blackBorder = "1px solid black";

headerImg.style.border = blackBorder;

headerImg.addEventListener("mouseenter", () => {headerImg.style.border = redBorder; });
headerImg.addEventListener("mouseleave", () => {headerImg.style.border = blackBorder; });

// change welcome H2 color
let welcomeHeader = document.querySelector("header h2");

welcomeHeader.addEventListener("wheel", () => {welcomeHeader.style.color = "#339966"; })

// change picture size
let images = document.querySelectorAll(".img-content img");
let imgSizes = [];

for (let imgId = 0; imgId < images.length; imgId++) {

    let img = images[imgId];

    imgSizes[imgId] = "big";

    img.addEventListener("dblclick", () => {
        
        if (imgSizes[imgId] === "big")
            { img.style.width = "50%"; imgSizes[imgId] = "small"; }
        else
            { img.style.width = "100%"; imgSizes[imgId] = "big"; }
    })
}

// append "click! " text to end of paragraph
let paragraphText = document.querySelectorAll(".text-content p");

for (let pId = 0; pId < paragraphText.length; pId ++)
{
    let p = paragraphText[pId];
    p.addEventListener("click", () => { p.textContent += " click!"; });
}

// add an image after the boat image
let bus = document.createElement("img");
bus.src = "img/fun-bus.jpg";

let boatDiv = document.querySelector(".content-destination");
boatDiv.addEventListener("wheel", () => boatDiv.appendChild(bus));

