"use strict";

var indexController = (function(){
    var ajax = new XMLHttpRequest();
    var clickMeButton = {};

    function handleAjaxResponse() {
        console.log('inside handle ajax response');
        if (ajax.readyState === XMLHttpRequest.DONE) {
            if (ajax.status === 200) {
//                alert(clickMeButton.innerHTML);
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
        ajax.setRequestHeader('Accept', "application/json");
        ajax.setRequestHeader('Content-Type', 'application/json');
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