let people = [
    { name: "Chris", job: "Teacher" },
    { name: "Joanna", job: "Student" },
    { name: "Boris", job: "Prime Minister" },
];

function listOfNames(arrayOfPeople) {
    let content = document.querySelector("#content");
    let header1, header2;
    arrayOfPeople.forEach(people => {
        header1 = document.createElement("h1");
        header2 = document.createElement("h2");
        header1.innerText = people.name;
        content.appendChild(header1);
        header2.innerText = people.job;
        content.appendChild(header2);
    });
};

listOfNames(people);