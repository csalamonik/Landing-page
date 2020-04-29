import "bootstrap/dist/js/bootstrap";
import "../sass/style.scss";
import "../fontawesome/css/fontawesome.min.css";
import "../fontawesome/css/regular.min.css";
import "../fontawesome/css/solid.min.css";

function clock() {
  const h1 = document.getElementById("items");
  let items = h1.textContent;

  const timer = () => {
    items--;
    h1.textContent = items;
    if (items == 0) {
      clearInterval(myVar);
    }
  };

  return timer;
}

var myVar = setInterval(clock(), 5000);
