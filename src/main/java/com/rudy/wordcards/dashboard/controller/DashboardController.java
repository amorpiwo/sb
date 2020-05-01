package com.rudy.wordcards.dashboard.controller;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.rudy.wordcards.dashboard.dao.CardDao;
import com.rudy.wordcards.dashboard.model.Card;
import com.rudy.wordcards.dashboard.model.Test;
import com.rudy.wordcards.dashboard.model.Word;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//indicates that the data returned by each method will be written straight into the response body instead of rendering a template
@RestController
@RequestMapping("/words")
public class DashboardController {

    private static final Logger LOG = LogManager.getLogger(DashboardController.class.getName());

    private CardDao cardDao;
    public void setCardDao(CardDao cardDao) {
        this.cardDao = cardDao;
    }

    @RequestMapping(
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Card> getUserDashboard() {
        LOG.info("Retrieving Cards for user ...");
        return cardDao.list();
    }

    @RequestMapping(
            method =  RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void createNewCard(@RequestBody Word word) {
        LOG.info("And the word is " + word);
        cardDao.createWord(word);
    }

    @RequestMapping(
            method = RequestMethod.PUT,
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public void putIt(@RequestBody @JsonFormat(with = JsonFormat.Feature.ACCEPT_SINGLE_VALUE_AS_ARRAY) List<Test> test) {
        System.out.println("test " + test);
    }


}
