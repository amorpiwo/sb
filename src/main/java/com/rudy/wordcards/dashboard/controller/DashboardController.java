package com.rudy.wordcards.dashboard.controller;

import com.rudy.wordcards.dashboard.dao.CardDao;
import com.rudy.wordcards.dashboard.model.Card;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DashboardController {

    private static final Logger LOG = LogManager.getLogger(DashboardController.class.getName());

    private CardDao cardDao;

    @RequestMapping(value = "/getUserDashboard", method = RequestMethod.POST)
    @ResponseBody
    public List<Card> getUserDashboard() {
        LOG.info("Retrieving Cards for user ...");
        return cardDao.list();
    }


    public CardDao getCardDao() {
        return cardDao;
    }

    public void setCardDao(CardDao cardDao) {
        this.cardDao = cardDao;
    }
}
