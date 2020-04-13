package com.rudy.spring.requestmapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.function.Supplier;
import java.util.stream.Stream;

/**
 * Created by rudnikp on 25/11/2017.
 */
@RestController
public class MainDashboardController {


    @RequestMapping(value = "/clickMe")
//    @ResponseBody
    public Box hanldeClickMeButton() {
        return new Box();
    }

    //with jackson on board one only need to define getters and their will be used to generate JSON
    //now one can return Box in REST service and it will be automatically translated to JSON
    //message converter needs to be registered in applicationContext ?? - not really, there is content negotiation
    // done in Sptring, so it checks ContentType header to figure out what type of message it really is
    static class Box {
        private String message = "some message";

        public String getMessage() {

            return message;
        }

        public int getPriority() {
            return 2;
        }
    }


}