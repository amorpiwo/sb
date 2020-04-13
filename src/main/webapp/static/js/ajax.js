"use strict";

const ajax = (() => {
    const that = this;

    const sendGet = (url, handler) => send(url, 'GET', handler)

    const sendPost = (url, handler, body) => send(url, 'POST', handler, body)

    const send = (url, method, handler, body) => {
        const request = new XMLHttpRequest();

        console.log("Sending ajax request with url " + url + " using method " + method);

        request.open(method, url, true);
        request.setRequestHeader("Content-Type", "application/json")
        request.onreadystatechange = handleResponse(handler);
        request.responseType = 'json';

        if (!handler) {
            console.log('Custom callback not defined. Default one will be used.');
            request.onreadystatechange = defaultHandler;
        }

        console.log('body ', body)
        request.send(body);
    }

     const handleResponse = (handler) => {
        return e => {
            const request = e.target;
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    handler(request.response)
                } else {
                    alert("Problem with handling request " + ajax.status);
                }
            }
        }
     }

    const defaultHandler = (e) => {
        console.log("Default Handling for ajax response...")
        const request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                alert("Response is here, no custom handling so only displaying this message");
            } else if (errorArea) {
                alert('error ' + request.status)
            }
        }
    }

    return {
        get: (url, handler) =>
            sendGet(url, handler),
        post: (url, handler, body) =>
            sendPost(url, handler, body),
    }
})()