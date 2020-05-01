"use strict";

const dashboard = (() => {

    var wordsUrl = "/words"

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
                 var divNode = createElementWithTextNode("div", entry.word + ' ' + entry.lastViewed);
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
        ajax.get(wordsUrl, renderDashboard);
    }

    return {
        getWords: () => {
            ajax.get(wordsUrl, renderDashboard);
        },

        createWord: () => {
            const value = document.getElementById('addNewWordInput').value || ''
            ajax.googleSend(value, response => {
                 const translation = response.data.translations[0].translatedText
                 ajax.post(wordsUrl, rerenderDashBoard, JSON.stringify({
                    "value" : value + " : " + translation,
                    "lastViewed" : new Date().toJSON()
                    }))
            })


        },
        getTranslation: () => {
            const value = document.getElementById('addNewWordInput').value || ''
            ajax.googleSend(value)
        },
        clickAddNewWord: () => {
            clickAddNewWord();
        }
    }


})();