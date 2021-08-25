var triggered = 0;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
var navigation =  document.getElementById("navigation");
var main =  document.getElementById("main");
function expandNav() {
    navigation.style.width = "9.4em";
    main.style.position = "absolute";
    main.style.left = "9.4em";
    main.style.width = "100%";
    main.style.filter = "opacity(60%)";
    triggered = 1;

  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    navigation.style.width = "0";
    main.style.left = "0";
    main.style.position = "static";
    main.style.filter = "opacity(100%)";
    triggered = 0;
  }

  function trigger(){
      if (triggered == 0){
          expandNav();
      } else{
          closeNav();
      }
  }
  
  