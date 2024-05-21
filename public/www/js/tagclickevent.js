window.addEventListener("load", function () {
  var subBtn = document.getElementsByClassName("sub-btn");

  function handleClick(event) {
    // console.log(event.target);

    // console.log(event.target.classList);

    if (event.target.classList[1] === "basic-btn") {
      event.target.classList.remove("basic-btn");
    } else {
      for (var i = 0; i < subBtn.length; i++) {
        subBtn[i].classList.remove("basic-btn");
      }

      event.target.classList.add("basic-btn");
    }
  }

  function init() {
    for (var i = 0; i < subBtn.length; i++) {
      subBtn[i].addEventListener("click", handleClick);
    }
  }

  init();
});
