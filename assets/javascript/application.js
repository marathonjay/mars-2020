document.addEventListener("DOMContentLoaded", function() {

/* --------------LOGIN FORM VALIDATION----------------- */
  
  let login = document.querySelector("#form-login");

  function validateField(selector1, selector2) {
    const field1 = document.querySelector(selector1).value;
    const field2 = document.querySelector(selector2).value;
    if (field1 === "jason" && field2 === "1234") {
      window.location.href = "index.html";
    } else
    login.style.backgroundColor = "red";
  }

  login.addEventListener("submit", function(event) {
    event.preventDefault();
    validateField("input[id='username']", "input[id='password']" );
   });








  // Add your Javascript Here
})