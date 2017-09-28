package com.rudy.spring.requestmapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.http.MediaType;

/**
 * Created by rudnikp on 20/09/2017.
 */

@Controller
public class MainController {

    {
        System.out.println("initialized");
    }

    @RequestMapping("/")
    public @ResponseBody String home() {
        return "index";
    }

    @RequestMapping("/one")
    public @ResponseBody String handleOneButton() {
        return "<h1>Button one handled</h1>";
    }

    // Handles POST Request If The Request Header Contains 'content-type=application/x-www-form-urlencoded'
    @RequestMapping(value = "/two", method = RequestMethod.POST, headers = {"content-type=application/x-www-form-urlencoded"})
    public @ResponseBody String handleSecondButton() {

        return "<h1>Button two handled </h1>";
    }

    // Handles POST Request If The Request Content Type Is 'application/x-www-form-urlencoded'
    @RequestMapping(value = "/three", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public @ResponseBody String handleThirdButton() {
        return "<h1>button three handled</h1>";
    }

}
