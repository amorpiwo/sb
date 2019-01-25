"use strict";

var ajax = (function() {
    var that = this;
    var request;
    var url;
    var method;
    var errorArea;

    function send(url, method, handler) {
        request = new XMLHttpRequest();
        console.log("Sending ajax request with url " + url + " using method " + method);

        request.open(method, url);
        request.onreadystatechange = handleResponse(handler);
        request.responseType = 'json';

        if (!handler) {
            console.log('Custom callback not defined. Default one will be used.');
            request.onreadystatechange = defaultHandling;
        }

        request.send();
    }

     function handleResponse(handler) {
        return function(e){
            var request = e.target;
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    ajaxResponse = request.response;

                    handler(ajaxResponse);

                } else {
                    alert("Problem with handling request in dashboard handler " + ajax.status);
                }
            }
        }
     }

    function defaultHandler() {
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
        sendRequest : function(url, method, handler) {
            send(url, method, handler);
        },

        setErrorArea : function(elementId) {
            that.errorArea = document.getElementById(elementId);
        }

    }

}());