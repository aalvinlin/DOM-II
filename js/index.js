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

let imgAdded = false;

let boatDiv = document.querySelector(".content-destination");
boatDiv.addEventListener("click", () => {

    if (imgAdded)
        {
            bus.remove();
            imgAdded = false;
        }
    else
        {
            boatDiv.appendChild(bus);
            imgAdded = true;
        }
});

// change background color on keypress
let destinationText = document.querySelector(".content-destination p");
let keyPressCount = {red: 0, green: 0, blue: 0, gray: 0};

document.addEventListener("keydown", () => {
    destinationText.style.backgroundColor = calculateColor(keyPressCount, "gray");
} )

// function to change color based on keypresses
function calculateColor(keypressCount, color) {

    keyPressCount[color] += 1;

    if (keyPressCount[color] > 15)
        { keyPressCount[color] = 0;}

    let codes = "0123456789ABCDEF";
    let hexCode = codes[keypressCount[color]] + codes[keypressCount[color]];

    if (color === "red")
        { return "#" + hexCode + "0000"; }
    else if (color === "green")
        { return "#00" + hexCode + "00"; }
    else if (color === "blue")
        { return "#0000" + hexCode; }
    else
        { return "#" + hexCode + hexCode + hexCode; }
}

// change background color on keypress, keyup, and keydown
let destinationParagraphs = document.querySelectorAll(".destination p");

document.addEventListener("keypress", () => {
    destinationParagraphs[0].style.backgroundColor = calculateColor(keyPressCount, "red");

    destinationParagraphs[0].innerHTML += "<em>keypress</em>! ";
} )

document.addEventListener("keyup", () => {
    destinationParagraphs[1].style.backgroundColor = calculateColor(keyPressCount, "green");

    destinationParagraphs[1].innerHTML += "keyup</em>! ";
} )

document.addEventListener("keydown", () => {
    destinationParagraphs[2].style.backgroundColor = calculateColor(keyPressCount, "blue");
    
    destinationParagraphs[2].innerHTML += "<em>keydown</em>! ";
} )

// change background color on click - stopping propagation
let h1 = document.querySelector("h1");
h1.addEventListener("click", (element) => {
    h1.style.backgroundColor = "#CC9966";
    event.stopPropagation();
});

let header = document.querySelector("header");
header.addEventListener("click", () => header.style.backgroundColor = "#FFCC99")

// stop navigation items from refreshing page
