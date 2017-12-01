package com.rudy.spring.requestmapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by rudnikp on 25/11/2017.
 */
@RestController
public class FirstRestController {

    @RequestMapping("/but")
    @ResponseBody
    public String getButMsg() {
        return "Ajax request handled";
    }

    @RequestMapping("/clickMe")
    @ResponseBody
    public String hanldeClickMeButton() {
        return "Greetings from rest response";
    }


}
