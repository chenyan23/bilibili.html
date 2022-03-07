document.addEventListener("DOMContentLoaded", function(event) {
   let targetImage = document.querySelector("#smart-image");
targetImage.addEventListener("click", function() {
  targetImage.classList.remove("small");
}); 
  let targetImage = document.querySelector("#big-image");
targetImage.addEventListener("click", function() {
  targetImage.classList.remove("small");
}); 
   let targetImage = document.querySelector("#short-image");
targetImage.addEventListener("click", function() {
  targetImage.classList.remove("small");
}); 
});
