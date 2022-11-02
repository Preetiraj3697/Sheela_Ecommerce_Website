jQuery(document).ready(function() {

  var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

});



//dark-mode


function toggle_light_mode() {
  var darktheme = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      darktheme.setAttribute("light-mode", "light");
  } else {
      localStorage.lightMode = "dark";
      darktheme.setAttribute("light-mode", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
      if (localStorage.lightMode == "dark") {
        darktheme.setAttribute("light-mode", "dark");
      } else {
        darktheme.setAttribute("light-mode", "light");
      }
  },
  false
);