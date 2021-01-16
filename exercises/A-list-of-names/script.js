function listOfNames(arrayOfPeople) {
    let content = document.querySelector("#content");
    let header1, header2;
    arrayOfPeople.forEach(element => {
        header1 = document.createElement("h1");
        header2 = document.createElement("h2");
        header1.innerText = element.name;
        content.appendChild(header1);
        header2.innerText = element.job;
        content.appendChild(header2);
    });
}

let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);