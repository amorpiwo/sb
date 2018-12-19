"use strict";

var ajax = (function() {
    var that = this;
    var request;
    var url;
    var method;
    var errorArea;

    function send(url, method, callback) {
        request = new XMLHttpRequest();
        console.log("Sending ajax request with url " + url + " using method " + method);

        request.open(method, url);
        request.onreadystatechange = callback;
        request.responseType = 'json';

        if (!callback) {
            console.log('Custom callback not defined. Default one will be used.');
            request.onreadystatechange = defaultHandling;
        }

        request.send();
    }

    function defaultHandling() {
        console.log("Default Handling for ajax response...")
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert("Response is here, no custom handling so only displaying this message");
            } else {
                if (errorArea) {
                    errorArea.innerHTML = request.status;
                }
//                alert("Problem with handling request " + ajax.status);
            }
        }
    }


    return {
        sendRequest : function(url, method, callback) {
            send(url, method, callback);
        },

        setErrorArea : function(elementId) {
            that.errorArea = document.getElementById(elementId);
        }

    }

}());