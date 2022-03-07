document.addEventListener("DOMContentLoaded", function(event) {
   let targetImage = document.querySelector("#smart-image");
targetImage.addEventListener("click", function() {
  targetImage.classList.remove("small");
}); 
    let targetImage1 = document.querySelector("#big-image");
targetImage1.addEventListener("click", function() {
  targetImage1.classList.remove("small");
});
    let targetImage2 = document.querySelector("#short-image");
targetImage2.addEventListener("click", function() {
  targetImage2.classList.remove("small");
});
 });  

