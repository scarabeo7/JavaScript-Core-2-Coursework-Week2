const colours = ["Red", "Blue", "Green", "Yellow", "Pink", "Brown"];

function listOfColours(colours) {
  let div = document.getElementById("content");
  let select = document.createElement("select");
  div.appendChild(select);
  let p = document.createElement("p");
  div.appendChild(p);

  colours.forEach(element => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.innerText = element;
  });
  
  //TODO Each `<option>` should have a 'click' event listener to update the contents and colour of
  // the `<p>` with the selected colour.
  let option = document.querySelectorAll("option");
  option.forEach((item) => {
    console.log(item);
    item.addEventListener("click", function () {
  
    });
  });
};

listOfColours(colours);
