"use strict";

var ajaxResponse;

var dashboard = (function(){

    var getUserDashboardUrl = "/getUserDashboard";
    var createNewWordForUser = "/createNewCard";
    var method = 'POST';


    function createElement(elementName) {
        return document.createElement(elementName);
    }

    function createTextElement(elementName) {
            return document.createTextNode(elementName);
    }

    function renderDashboard(response) {
        var text = '';
        var dashboard = document.getElementById('dashboard');

        response.forEach(function(entry) {
                 var divNode = createElement("div");
                 divNode.className = "wordBox";
                 var textNode = createTextElement(entry.word);

                 divNode.appendChild(textNode);
                 dashboard.appendChild(divNode);
        });

    }

    function addNewWord(response) {
        var dashboard = document.getElementById('dashboard');
    }

    return {
        getWords : function () {
            ajax.sendRequest(getUserDashboardUrl, method, renderDashboard);
        },

        createWord : function(word) {
            ajax.sendRequest(createNewWordForUser, method, addNewWord);
        }
    }


}());