package com.rudy.spring.requestmapping;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by rudnikp on 20/09/2017.
 */

@Controller
public class MainController {

    {
        System.out.println("MainController initialized");
    }

    @RequestMapping("/")
    public String home() {
        return "index.html";
    }




}
