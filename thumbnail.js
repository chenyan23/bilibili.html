document.addEventListener("DOMContentLoaded", function(event) {
   let targetImage = document.querySelector("#smart-image");
targetImage.addEventListener("click", function() {
   if (alert("点击了图片")){
      targetImage.classList.remove("small");
   } 
}); 
});
