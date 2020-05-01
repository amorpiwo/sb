"use strict";
// strict mode also cause that this in IIFE is undefined cause there is no object on which function is invoked

const ajax = (function () {

    const localHeaders = [{name: "Content-Type", value: "application/json"}]
    const googleHeaders = [...localHeaders, {name: "X-HTTP-Method-Override", value: "GET"}]

    console.log('ajax this ', this)

    function createCORSRequest() {
      var xhr = new XMLHttpRequest();
      if (!("withCredentials" in xhr)) {
        if( typeof XDomainRequest != "undefined") {
                // Otherwise, check if XDomainRequest.
                // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
                xhr = new XDomainRequest();
        } else {
                // Otherwise, CORS is not supported by the browser.
                xhr = null;
              }
      }
      return xhr;
    }

    const sendGet = (url, handler) => {
//        console.log('get headers ', localHeaders)
        send(url, 'GET', handler, null, localHeaders)
    }

    const sendPost = (url, handler, body, headers = localHeaders) =>  {
//        console.log('local headers ', localHeaders)
        send(url, 'POST', handler, body, headers)
    }

    const send = (url, method, handler, body, headers) => {
        console.log("Sending ajax request with url " + url + " using method " + method + ", headers ", headers) ;
        // need to create with new, otherwise 'this' won't be bound
        const request = new RequestBuilder()
                            .setUrl(url)
                            .setMethod(method)
                            .setHandler(handler)
                            .setRequestHeaders(headers)
                            .build()

        console.log('body ', body)
        request.send(body);

    }

    const googleSend = (word, handler) => {
        console.log(word)
        const rootUrl = `https://translation.googleapis.com/language/translate/v2?key=`
        const body = {
            "q": `${word}`,
            "source": "pl",
            "target": "en",
        }
        sendPost(rootUrl, handler, JSON.stringify(body), googleHeaders)
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


    /**
    Type (almost like class). Function can be used to create new object (function itself is an object) using new operator.
    Use of new is not necessary but without it 'this' inside object won't be initialized.
    Everything we declare and assign to this will be visible in object (public - not sure if valid in JS)
        e.g:
              this.setRequestHeaders

    Rest of variables will be hidden (private)

        e.g:

              const obj = new  RequestBuilder()
              obj.setRequestHeaders(...) - it's OK, setRequestHeaders is property of this

              ale

              obj.url - will be undefined but it's visible inside type, private
    */
    const RequestBuilder = function() {
            const headers = []
            let url
            let method
            let responseType
            let handler
            let jakasZmienna = 2

//            console.log('its', this)

            this.setRequestHeaders = _headers => {
                headers.length = 0
//                headers.length = !!_headers ? _headers.length : 0
                console.log(_headers)
                headers.push(..._headers)
                console.log(headers)
                return this
            }
            this.setUrl = _url => {
                url = _url
//                console.log('zmienna', jakasZmienna)
                jakasZmienna = url
                return this
            }
            this.setMethod = _method => {
                method = _method
//                console.log('zmienna', jakasZmienna)
                return this
            }
            this.setResponseType = _responseType => {
                responseType = responseType
                return this
            }
            this.setHandler = _handler => {
                handler = _handler
                return this
            }


            this.build = () => {
                const request = createCORSRequest()
                request.open(method, url, true);
                headers.forEach(header => request.setRequestHeader(header.name, header.value))
                request.onreadystatechange = !!handler ? handleResponse(handler) : defaultHandler
                request.responseType = responseType || 'json'
                return request
            }
        }

    return {
        get: (url, handler) =>
            sendGet(url, handler),
        post: (url, handler, body) =>
            sendPost(url, handler, body),
        googleSend: googleSend,
    }
})()

