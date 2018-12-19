"use strict";

var ajaxResponse;

var dashboard = (function(){

    var url = "/getUserDashboard";
    var method = 'POST';

    function fillDashboard(e) {
        var request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
           if (request.status === 200) {
                ajaxResponse = request.response;

                var text = '';
                ajaxResponse.forEach(function(entry) {
                    text += '<div class="wordBox">' + entry.word + '</div>';
                });

                document.getElementById('dashboard').innerHTML = text;

           } else {
              alert("Problem with handling request in dashboard handler " + ajax.status);
           }
        }
    }

    return {
        getWords : function () {
            ajax.sendRequest(url, method, fillDashboard);
        }
    }


}());