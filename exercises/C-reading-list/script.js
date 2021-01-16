// Adding header to page
let content = document.getElementById("content");
let header = document.createElement("h1");
header.innerText = "Book list";
content.appendChild(header);
header.style.margin = "30px";

function readingList(books) {
  // Append image src to each book passed from the object array
  books[0].src = "img/image-1.jpg";
  books[1].src = "img/image-2.jpg";
  books[2].src = "img/image-3.jpg";

  let content = document.getElementById("content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  books.forEach((item) => {
    // p element and append textContent to display title and author
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.textContent = `${item.title} - ${item.author}`;
    img.src = item.src;
   
    li.appendChild(p);
    li.appendChild(img);
    unorderedList.appendChild(li);
    unorderedList.style.listStyle = "none";
    unorderedList.style.display = "flex";
    li.style.margin = "2em";

    if (item.alreadyRead) {
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }
  });
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