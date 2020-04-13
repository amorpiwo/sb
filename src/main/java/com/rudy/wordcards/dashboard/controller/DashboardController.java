package com.rudy.wordcards.dashboard.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.TextNode;
import com.rudy.wordcards.dashboard.dao.CardDao;
import com.rudy.wordcards.dashboard.model.Card;
import com.rudy.wordcards.dashboard.model.Word;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.function.Function;

//indicates that the data returned by each method will be written straight into the response body instead of rendering a template
@RestController
public class DashboardController {

    private static final Logger LOG = LogManager.getLogger(DashboardController.class.getName());

    private CardDao cardDao;

    @RequestMapping(value = "/getUserDashboard",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public List<Card> getUserDashboard() {
        LOG.info("Retrieving Cards for user ...");
        return cardDao.list();
    }

    @RequestMapping(value = "/createNewCard",
            method =  RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void createNewCard(@RequestBody Word word) {
        cardDao.createWord(word.getValue());
    }

    public void setCardDao(CardDao cardDao) {
        this.cardDao = cardDao;
    }
}
