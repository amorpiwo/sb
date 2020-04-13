"use strict";

const dashboard = (() => {


    var getUserDashboardUrl = "/getUserDashboard";
    var createNewWordForUser = "/createNewCard";

    function createElementWithTextNode(elementName, text) {
        var element = createElement(elementName);
        var textElement = createTextElement(text);
        element.appendChild(textElement);
        return element;
    }

    function createElement(elementName) {
        return document.createElement(elementName);
    }

    function createTextElement(elementName) {
            return document.createTextNode(elementName);
    }

    function renderDashboard(response) {
        var text = '';
        const dashboard = document.getElementById('dashboard');
        response.forEach(entry =>  {
                 var divNode = createElementWithTextNode("div", entry.word);
                 divNode.className = "wordBox";
                 dashboard.appendChild(divNode);
        });
    }

    function clickAddNewWord() {
         var addWordElement = document.getElementById('addWord').style.visibility='visible';
    }

    const clearDashboard = (dashboard) => {
        dashboard.childNodes.forEach(child => child.remove())
    }

    const rerenderDashBoard = () => {
        clearDashboard(document.getElementById('dashboard'))
        ajax.get(getUserDashboardUrl, renderDashboard);
    }

    return {
        getWords: () => {
            ajax.get(getUserDashboardUrl, renderDashboard);
        },

        createWord: () => {
            const value = document.getElementById('addNewWordInput').value || ''
            ajax.post(createNewWordForUser, rerenderDashBoard, JSON.stringify({value}));
        },

        clickAddNewWord : function() {
            clickAddNewWord();
        }
    }


})();