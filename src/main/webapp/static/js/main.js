function addAjaxHandlingToButton() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', '/but');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
      } else {
            alert('There was a problem with the request.');
      }
    }
  }
}

var indexController = (function(){
    var ajax = new XMLHttpRequest();
    var clickMeButton = {};

    function handleAjaxResponse() {
        console.log('inside handle ajax response');
        if (ajax.readyState === XMLHttpRequest.DONE) {
            if (ajax.status === 200) {
                alert(clickMeButton.innerHTML);
                clickMeButton.innerHTML =  clickMeButton.innerHTML + " " + ajax.responseText;
            } else {
                alert('Error while handling ajax request ' + ajax.status);
            }
        }
    }

    function handleClickMe () {
        if (!ajax) {
            alert('Ajax object not created');
            return false;
        }
        console.log('Inside handle click me');
        ajax.onreadystatechange = handleAjaxResponse;
        ajax.open('GET', '/clickMe');
        ajax.send();
     }

    return {
        setClickMeButton : function(clickButton) {
            //DO NOT ADD THIS TO clickMeButton like this.clickMeButton - this here is probably function itself
            clickMeButton = clickButton;
            clickMeButton.addEventListener('click', handleClickMe);
        }
    }
}());

function registerEvents() {
    indexController.setClickMeButton(document.getElementById('clickMeButton'));

}