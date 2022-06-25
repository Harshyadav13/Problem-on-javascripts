function showTable() {
  var divTable = document.getElementById("tableDiv");
 var showBtn = document.getElementById("show")
 var hideBtn = document.getElementById("hide")


  divTable.style.display = "block";
  showBtn.disabled = true;
  hideBtn.disabled = false;
}

function hideTable() {
  var divTable = document.getElementById("tableDiv");
  var showBtn = document.getElementById("show")
  var hideBtn = document.getElementById("hide")
 
  divTable.style.display = "none";
  showBtn.disabled = false;
  hideBtn.disabled = true;
}
