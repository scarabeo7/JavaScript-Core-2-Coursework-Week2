const blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#588fbd";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#ffa500";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
});

const orangeButton = document.getElementById("orangeBtn");
orangeButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#f0ad4e";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "#5751fd";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#31b0d5";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "white";
});

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", function() {
    document.getElementsByClassName("jumbotron")[0].style.backgroundColor = "#87ca8a";
    document.getElementsByClassName("btn btn-primary btn-lrg")[0].style.backgroundColor = "black";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.backgroundColor = "#8c9c08";
    document.getElementsByClassName("btn btn-secondary btn-lrg")[0].style.color = "black";
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", formFieldValidator);

function formFieldValidator(e) {
    e.preventDefault();
    const forms = [document.getElementById("exampleInputEmail1"),
        document.getElementById("example-text-input"),
        document.getElementById("exampleTextarea")
    ];
    for (let key of forms) {
        if (key.id === "exampleInputEmail1" && !key.value.includes('@')) {
            key.value = "";
        }
        if (!key.value.length) {
            document.getElementById(`${key.id}`).style.backgroundColor = "red";
        }
    }
    if (forms.every(input => input.value.length > 0)) {
        forms.map(input => {
            input.value = "";
            input.style.backgroundColor = "white";
        });
        alert(`Thank you for filling out the form`);
    }

}