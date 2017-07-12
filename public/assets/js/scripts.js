(function () {

  var userAgent = window.navigator.userAgent;
  var isInternetExplorer = userAgent.indexOf("MSIE ") || userAgent.indexOf("Windows ");

  console.log(userAgent);
  console.log(isInternetExplorer);

})();
