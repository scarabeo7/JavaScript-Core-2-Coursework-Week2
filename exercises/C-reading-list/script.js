let content = document.getElementById("content")
let header = document.createElement("h1");
header.innerText = "Book list";
content.appendChild(header);

function readingList(books) {
    // Write your code here...
}

const books = [{
        title: "The Design of Everyday Things",
        author: "Don Norman",
        alreadyRead: false
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true
    },
    {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        alreadyRead: true
    }
];

readingList(books);