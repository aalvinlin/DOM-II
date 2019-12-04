let rockets = "red blue green pink gray".split(" ");

for (let rocketId = 0; rocketId < rockets.length; rocketId++)
    {
        let rocketColor = rockets[rocketId];
        let rocket = document.querySelector(".block--" + rocketColor);

        rocket.addEventListener("click", reorderRockets.bind(this, rocketColor));
        rocket.addEventListener("mousedown", moveToRight.bind(this, rocketColor));
    }

// place the rocket on the top of the stack
function reorderRockets(rocketColor)
{
    let blocks = document.querySelector(".blocks");
    let rocket = document.querySelector(".block--" + rocketColor);

    rocket.remove();
    blocks.prepend(rocket);
}

// move the rocket ot the right
function moveToRight(rocketColor)
{
    let rocket = document.querySelector(".block--" + rocketColor);

    // if (rocket.style.marginLeft === "")
    //     { rocket.style.marginLeft = 0; }
    // else
    //     { rocket.style.marginLeft += 100; }

}
