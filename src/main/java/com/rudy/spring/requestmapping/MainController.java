package com.rudy.spring.requestmapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Locale;

/**
 * Created by rudnikp on 20/09/2017.
 */

@Controller
public class MainController {

    {
        System.out.println("MainController initialized");
    }

    /**
     * It is returning main page view when request for the root (/) is made
     *
     * @return name od the home page
     */
    @RequestMapping("/")
    public String home() {
        return "index.html";
    }




}
