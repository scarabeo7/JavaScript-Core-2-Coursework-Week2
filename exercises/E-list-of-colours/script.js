const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

function listOfColours(colours) {
    let div = document.getElementById("content");
    let select = document.createElement("select");
    div.appendChild(select);
    let p = document.createElement("p");
    p.innerHTMl;
    div.appendChild(p);

    colours.forEach(colour => {
        let option = document.createElement("option");
        option.innerText = colour;
        select.appendChild(option);
    });

    select.addEventListener("click", function() {
        p.innerHTML = `Colour selected is: ${this.value}`;
        p.style.color = this.value;
    })
};

listOfColours(colours);