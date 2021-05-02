let form = document.getElementById("addForm");

let itemList = document.getElementById("items");

//Form Submit Event
form.addEventListener("submit", addItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  //Get Input value
  let newItem = e.target.value;
  console.log(e);
}
