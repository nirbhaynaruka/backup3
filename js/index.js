window.onscroll = function () {
    myFunction()
  };

  var header = document.getElementById("fadein");
  function myFunction() {
   
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      header.classList.add("hidediv");
    } else {
      header.classList.remove("hidediv");
    }
  }