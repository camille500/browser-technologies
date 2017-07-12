(function () {
  var changeColors = document.getElementsByClassName('cls-3');
  var userAgent = navigator.userAgent; // Get actual user Agent
  var userAgent_regEx = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})"); // Regular expression for detecting IE
  if (userAgent_regEx.exec(userAgent) === null) { // If not IE11, but older or other browser, show SVG, hide PNG
    var span = document.getElementsByTagName('span');
    var png = document.getElementsByTagName('img');
    for(var i = 0; i < png.length; i++) {
      png[i].style.display = 'none';
      if(span[i]) {
        span[i].style.display = 'none';
      }
    }
  } else { // Else show the SVG
    var svg = document.getElementsByTagName('svg');
    for(var i = 0; i < svg.length; i++) {
      svg[i].style.display = 'none';
    }
  }

  if (window.XMLHttpRequest) {
    var request = new XMLHttpRequest();
    request.addEventListener("load", changeColor);
    request.open("GET", "http://www.colr.org/json/color/random");
    request.send();

    function changeColor() {
      var response = JSON.parse(this.responseText)
      for(var i = 0; i < changeColors.length; i++) {
        changeColors[i].style.fill = '#' + response.colors[0].hex;
      }
    }
  } else if (userAgent_regEx.exec(userAgent) != null) {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var hexColors = ['#C4E6FF', '#FFC621', '#C13C24', '#00AE88', '#330087', '#181714'];
    for(var i = 0; i < changeColors.length; i++) {
      changeColors[i].style.fill = hexColors[randomNumber];
    }
  }

})();
