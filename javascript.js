/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  // Get the output text
  var x = document.getElementById("hamitems");
  var logo = document.querySelector(".logo");
  var header=document.querySelector("header")

  
  if (x.style.display === "block") {
    x.style.display = "none";
    logo.style.display = "block";
    header.style.justifyContent = "";
  } else {
    x.style.display = "block";
    logo.style.display = "none";
    header.style.justifyContent = "flex-end";
  }
}

