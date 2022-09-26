function burgerNav() {
  const nav = document.getElementById("navbar");
  if (nav.className === "nav") {
    nav.className += "responsive";
  } else {
    nav.className = "nav";
  }
}
